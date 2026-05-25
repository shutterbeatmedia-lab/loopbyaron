import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ImageCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0)
  const thumbRowRef = useRef(null)
  if (!images.length) return null

  const manyImages = images.length > 5

  const handleSelect = (i) => {
    setCurrent(i)
    if (thumbRowRef.current) {
      const thumb = thumbRowRef.current.children[i]
      if (thumb) thumb.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' })
    }
  }

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-50 border border-gray-100">
      {/* Main image — portrait book-cover ratio */}
      <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: '3/4' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Book artwork slide ${current + 1}`}
            loading={current === 0 ? 'eager' : 'lazy'}
            decoding="async"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </AnimatePresence>
      </div>

      {/* Thumbnail strip (many images) or dots (few images) */}
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
        <div className="flex items-center gap-2 px-4 py-3 bg-white border-t border-gray-100">
          {images.map((_, i) => (
            <button
              key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
              aria-pressed={i === current}
              className={`transition-all duration-300 rounded-full ${i === current ? 'w-6 h-2.5 bg-teal-600' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
