import theLoopCover from './images/LoopCover.png'
import Ch1P1 from './images/The Loop/Ch1P1.png'
import Ch1P2 from './images/The Loop/Ch1P2.png'
import Ch1P3 from './images/The Loop/Ch1P3.png'
import Ch1P4 from './images/The Loop/Ch1P4.png'
import Ch2P1 from './images/The Loop/Ch2P1.png'
import Ch2P2 from './images/The Loop/Ch2P2.png'
import Ch2P3 from './images/The Loop/Ch2P3.png'
import Ch2P4 from './images/The Loop/Ch2P4.png'
import Ch3P1 from './images/The Loop/Ch3P1.png'
import Ch3P2 from './images/The Loop/Ch3P2.png'
import Ch3P3 from './images/The Loop/Ch3P3.png'
import Ch3P4 from './images/The Loop/Ch3P4.png'
import Ch4P1 from './images/The Loop/Ch4P1.png'
import Ch4P2 from './images/The Loop/Ch4P2.png'
import Ch4P3 from './images/The Loop/Ch4P3.png'
import Ch4P4 from './images/The Loop/Ch4P4.png'
import Ch5P1 from './images/The Loop/Ch5P1.png'
import Ch5P2 from './images/The Loop/Ch5P2.png'
import Ch5P3 from './images/The Loop/Ch5P3.png'
import Ch5P4 from './images/The Loop/Ch5P4.png'

export const authorImages = {
  primary: '/Users/yashnahar/loop-trilogy/src/assets/images/aron.jpg',
}

export const chapterIllustrations = [
  Ch1P1, Ch1P2, Ch1P3, Ch1P4,
  Ch2P1, Ch2P2, Ch2P3, Ch2P4,
  Ch3P1, Ch3P2, Ch3P3, Ch3P4,
  Ch4P1, Ch4P2, Ch4P3, Ch4P4,
  Ch5P1, Ch5P2, Ch5P3, Ch5P4,
]

export const bookImages = {
  theLoop: {
    cover: theLoopCover,
    carousel: [theLoopCover, ...chapterIllustrations],
  },
  withinTheLoop: {
    cover: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
    carousel: [
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80',
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80',
    ],
  },
  beyondTheLoop: {
    cover: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80',
    carousel: [
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80',
      'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=800&q=80',
      'https://images.unsplash.com/photo-1509266272358-7701da638078?w=800&q=80',
      'https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=800&q=80',
    ],
  },
}
