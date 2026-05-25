import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const thumbRowRef = useRef(null)
  const dragStartX = useRef(null)

  if (!images.length) return null

  const manyImages = images.length > 5

  const goTo = (i, dir) => {
    setDirection(dir)
    setCurrent(i)
    if (thumbRowRef.current) {
      const thumb = thumbRowRef.current.children[i]
      if (thumb) thumb.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' })
    }
  }

  const prev = () => current > 0 && goTo(current - 1, -1)
  const next = () => current < images.length - 1 && goTo(current + 1, 1)

  const handleSelect = (i) => goTo(i, i > current ? 1 : -1)

  // Touch / mouse drag swipe
  const onPointerDown = (e) => { dragStartX.current = e.clientX }
  const onPointerUp   = (e) => {
    if (dragStartX.current === null) return
    const delta = dragStartX.current - e.clientX
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev()
    dragStartX.current = null
  }

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? '60%' : '-60%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (dir) => ({ x: dir > 0 ? '-60%' : '60%', opacity: 0 }),
  }

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-50 border border-gray-100 select-none">

      {/* Main image */}
      <div
        className="relative overflow-hidden bg-gray-50 cursor-grab active:cursor-grabbing aspect-[3/2] md:aspect-[3/4]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            src={images[current]}
            alt={`Book artwork slide ${current + 1}`}
            loading={current === 0 ? 'eager' : 'lazy'}
            decoding="async"
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </AnimatePresence>

        {/* Prev / Next arrow buttons */}
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous image"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow flex items-center justify-center text-gray-700 transition-all duration-200 hover:bg-white hover:shadow-md disabled:opacity-0 disabled:pointer-events-none"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          disabled={current === images.length - 1}
          aria-label="Next image"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow flex items-center justify-center text-gray-700 transition-all duration-200 hover:bg-white hover:shadow-md disabled:opacity-0 disabled:pointer-events-none"
        >
          <ChevronRight size={18} />
        </button>

        {/* Slide counter */}
        <div className="absolute bottom-2.5 right-3 z-10 bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-2 py-0.5 rounded-full">
          {current + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail strip (many images) or dot indicators (few images) */}
      {manyImages ? (
        <div className="bg-white border-t border-gray-100 px-2.5 py-2 overflow-x-auto">
          <div ref={thumbRowRef} className="flex gap-1.5 w-max">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                aria-label={`Slide ${i + 1}`}
                aria-pressed={i === current}
                className={`flex-shrink-0 rounded-md overflow-hidden transition-all duration-200 ${
                  i === current
                    ? 'ring-2 ring-teal-600 opacity-100'
                    : 'opacity-40 hover:opacity-75'
                }`}
                style={{ width: 44, height: 44 }}
              >
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-100">
          <button
            onClick={prev} disabled={current === 0} aria-label="Previous"
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-teal-600 hover:border-teal-300 transition-all disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft size={15} />
          </button>
          <div className="flex gap-2">
            {images.map((_, i) => (
              <button
                key={i} onClick={() => handleSelect(i)} aria-label={`Slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${i === current ? 'w-6 h-2.5 bg-teal-600' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
          <button
            onClick={next} disabled={current === images.length - 1} aria-label="Next"
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-teal-600 hover:border-teal-300 transition-all disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      )}
    </div>
  )
}
