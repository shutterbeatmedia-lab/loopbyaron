import { useState, useEffect, useCallback, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageCarousel({ images = [] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: false })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const thumbRowRef = useRef(null)

  const manyImages = images.length > 5

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    const idx = emblaApi.selectedScrollSnap()
    setSelectedIndex(idx)
    if (thumbRowRef.current) {
      const thumb = thumbRowRef.current.children[idx]
      if (thumb) thumb.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' })
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo  = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi])

  if (!images.length) return null

  const canPrev = selectedIndex > 0
  const canNext = selectedIndex < images.length - 1

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 select-none bg-stone-900">

      {/* ── Main image track ─────────────────────────────────────────────── */}
      <div className="relative aspect-[3/2] lg:aspect-[3/4] overflow-hidden">
        <div ref={emblaRef} className="h-full overflow-hidden">
          <div className="flex h-full touch-pan-y">
            {images.map((src, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 h-full">
                <img
                  src={src}
                  alt={`Book artwork slide ${i + 1}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={scrollPrev}
          disabled={!canPrev}
          aria-label="Previous image"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow flex items-center justify-center text-gray-700 transition-all duration-200 hover:bg-white hover:shadow-md disabled:opacity-0 disabled:pointer-events-none"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canNext}
          aria-label="Next image"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow flex items-center justify-center text-gray-700 transition-all duration-200 hover:bg-white hover:shadow-md disabled:opacity-0 disabled:pointer-events-none"
        >
          <ChevronRight size={18} />
        </button>

        {/* Slide counter */}
        <div className="absolute bottom-2.5 right-3 z-10 bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-2 py-0.5 rounded-full">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* ── Thumbnail strip (many) or dot nav (few) ───────────────────────── */}
      {manyImages ? (
        <div className="bg-white border-t border-gray-100 px-2.5 py-2 overflow-x-auto">
          <div ref={thumbRowRef} className="flex gap-1.5 w-max">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`flex-shrink-0 rounded-md overflow-hidden transition-all duration-200 ${
                  i === selectedIndex
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
            onClick={scrollPrev} disabled={!canPrev}
            aria-label="Previous"
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-teal-600 hover:border-teal-300 transition-all disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft size={15} />
          </button>
          <div className="flex gap-2">
            {images.map((_, i) => (
              <button
                key={i} onClick={() => scrollTo(i)}
                className={`transition-all duration-300 rounded-full ${i === selectedIndex ? 'w-6 h-2.5 bg-teal-600' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
          <button
            onClick={scrollNext} disabled={!canNext}
            aria-label="Next"
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-teal-600 hover:border-teal-300 transition-all disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      )}
    </div>
  )
}
