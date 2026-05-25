import { useState } from 'react'
import { X, ExternalLink, ShoppingCart } from 'lucide-react'
import './BuyPopup.css'

const buyData = [
  {
    category: 'Hardcover / Hardback',
    links: [
      { name: 'Amazon.in',  url: 'https://tr.ee/OSIjSw_AS2' },
      { name: 'Flipkart',   url: 'https://dl.flipkart.com/s/3MDw4zNNNN' },
    ],
  },
  {
    category: 'Paperback',
    links: [
      { name: 'Amazon.in',    url: 'https://tr.ee/EGGFgrrDNB' },
      { name: 'Flipkart.com', url: 'https://tr.ee/1ZmQrRzCI-' },
    ],
  },
  {
    category: 'Ebook',
    links: [
      { name: 'Amazon Kindle', url: 'https://tr.ee/3cVyVZbnjB' },
    ],
  },
]

export default function BuyPopup({ bookTitle = 'The Loop', className = '', buttonText = 'Buy Now', showIcon = true }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Trigger */}
      <button
        className={`buy-popup-trigger ${className}`}
        onClick={() => setIsOpen(true)}
      >
        {showIcon && <ShoppingCart size={16} />}
        {buttonText}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="buy-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="buy-sheet"
            onClick={e => e.stopPropagation()}
          >
            {/* Handle (mobile) */}
            <div className="buy-handle" />

            {/* Header */}
            <div className="buy-header">
              <div className="buy-header-icon">
                <ShoppingCart size={20} className="text-teal-600" />
              </div>
              <div>
                <p className="buy-header-label">Get your copy</p>
                <h2 className="buy-header-title">"{bookTitle}"</h2>
              </div>
              <button className="buy-close" onClick={() => setIsOpen(false)} aria-label="Close">
                <X size={18} />
              </button>
            </div>

            {/* Links */}
            <div className="buy-body">
              {buyData.map(({ category, links }) => (
                <div key={category} className="buy-category">
                  <p className="buy-category-label">{category}</p>
                  <div className="buy-links">
                    {links.map(({ name, url }) => (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="buy-link-btn"
                      >
                        <span className="buy-link-name">{name}</span>
                        <ExternalLink size={14} className="buy-link-icon" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
