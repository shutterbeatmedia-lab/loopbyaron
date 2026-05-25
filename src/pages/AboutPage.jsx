import { motion } from 'framer-motion'
import { AtSign, Instagram, Mail, Quote } from 'lucide-react'
import aron from "../assets/images/aron.jpg"
import FadeIn from '../components/FadeIn'
import Footer from '../components/Footer'

const credentials = [
  'Author',
  'Business and Brand Consultant',
  'Advertising and Marketing Specialist',
  'Photographer & Filmmaker',
  'VFX Artist & Visual Storyteller',
  'Founder and CEO of ShutterBeat Media',
]

const socialLinks = [
  { Icon: AtSign, label: 'Threads', href: 'https://www.threads.com/@arongoves' },
  { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/arongoves?igsh=MWlkcmRtZjBmdjJxMQ==' },
  { Icon: Mail, label: 'Email', href: 'mailto:author@loopbyaron.com' },
]

export default function AboutPage({ onNavigate }) {
  return (
    <>
      {/* ── Author Hero ──────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-0 overflow-hidden bg-[#0d1f2d]">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f2d] via-[#0f2744] to-[#0d3d38] opacity-90" />

        <div className="relative section-shell-wide">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-0 lg:gap-12 xl:gap-16 items-end">

            {/* Photo */}
            <FadeIn x={-24} y={0} className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-sm lg:max-w-none">
                {/* Glow behind image */}
                <div className="absolute -inset-4 rounded-[2.5rem] bg-teal-500/10 blur-2xl" />
                <div className="relative rounded-t-[2rem] lg:rounded-[2rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
                  style={{ aspectRatio: '3/4' }}>
                  <img
                    src={aron}
                    alt="Aron Goves"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f2d]/60 via-transparent to-transparent" />
                </div>
              </div>
            </FadeIn>

            {/* Bio */}
            <FadeIn delay={0.15} className="py-10 lg:py-16">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/25 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                Author &amp; Philosopher
              </span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-5 tracking-tight leading-[1.05]">
                Aron Goves
              </h1>
              <p className="text-gray-300 text-base xl:text-lg leading-7 mb-4">
                Aron Goves is a marketing specialist, writer, photographer, filmmaker, and VFX artist,
                as well as the CEO and Founder of ShutterBeat Media. With a career rooted in visual
                storytelling and human psychology, Aron brings a unique multidimensional perspective
                to his writing.
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-7 mb-8">
                In The Loop Trilogy, he blends introspective narrative with thought-provoking themes
                designed to challenge readers to confront the patterns, distractions, and overlooked
                truths of everyday life. His work reflects a deep curiosity about human behaviour and
                perception, encouraging readers not just to observe the story but to question their own
                reality within it.
              </p>

              {/* Credentials */}
              <div className="flex flex-wrap gap-2 mb-8">
                {credentials.map((c, i) => (
                  <motion.span
                    key={c}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg border border-white/10 text-gray-300 text-xs font-medium bg-white/5 hover:bg-white/10 transition-colors cursor-default"
                  >
                    {c}
                  </motion.span>
                ))}
              </div>

              {/* Social links */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">Connect</p>
                <div className="flex flex-wrap gap-2.5">
                  {socialLinks.map(({ Icon, label, href }, i) => {
                    const sharedProps = {
                      key: label,
                      initial: { opacity: 0, y: 10 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { delay: i * 0.08 },
                      className: 'inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm font-medium text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-400/40 hover:text-white hover:bg-white/10',
                    }
                    if (href) {
                      return (
                        <motion.a {...sharedProps} href={href} target="_blank" rel="noreferrer">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/15 text-teal-400">
                            <Icon size={15} />
                          </span>
                          {label}
                        </motion.a>
                      )
                    }
                    return (
                      <motion.button {...sharedProps} type="button">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/15 text-teal-400">
                          <Icon size={15} />
                        </span>
                        {label}
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Writer's Quote ────────────────────────────────────────────────── */}
      <section className="section-space bg-white">
        <div className="section-shell-wide">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2.25rem] bg-[radial-gradient(circle_at_bottom,rgba(45,212,191,0.18),transparent_38%),linear-gradient(135deg,#101828_0%,#172554_52%,#155e75_100%)] px-8 py-16 shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:px-16 md:py-20 xl:px-24">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
              <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-300 backdrop-blur-sm">
                  <Quote size={36} strokeWidth={1.75} />
                </div>
                <p className="mb-8 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                  Writer's Quote
                </p>
                <blockquote className="max-w-5xl text-xl font-light leading-[1.7] text-white md:text-3xl md:leading-[1.55] xl:text-[2.15rem]">
                  The Loop Trilogy is not just a work of fiction, it reflects the everyday experiences we often overlook. It explores the possibility that such events could happen to any of us, reminding us to stay aware of our choices and the consequences they carry. Every action has the power to shape our past, influence our present, and define our future.
                </blockquote>
                <p className="mt-10 text-lg font-medium text-cyan-300 md:text-xl">— Aron Goves</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Writing Philosophy ────────────────────────────────────────────── */}
      <section className="pt-16 pb-20 md:pt-18 md:pb-24 bg-white">
        <div className="section-shell-wide">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Writing Philosophy</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-[2rem] border border-gray-100 bg-gradient-to-br from-white via-white to-teal-50/40 p-8 shadow-[0_20px_55px_rgba(15,23,42,0.06)] md:p-12 xl:p-14">
              <div className="mx-auto max-w-6xl space-y-6 text-gray-600 text-lg leading-8">
                <p>
                  My writing is inspired by the everyday moments we experience but often ignore. I believe
                  that even the smallest shift in thought or action can change the course of an entire world.
                  Through The Loop Trilogy, I aim to make readers aware of these subtle yet powerful
                  possibilities and encourage them to recognise the weight of their choices and the
                  responsibility that comes with them.
                </p>
                <p>
                  To me, storytelling is inseparable from reality. A story should not just be read—it
                  should be felt. My goal is to create experiences that immerse readers emotionally and
                  make them question the boundaries between fiction and their own lives, prompting them
                  to reflect on what they would do if faced with the same circumstances.
                </p>
                <p>
                  My background in marketing and filmmaking has shaped my understanding of human emotion
                  and perception, allowing me to craft stories that are not only engaging but deeply
                  connective. I believe art should move people, challenge their thinking, and leave a
                  lasting impact—whether it brings clarity or chaos. If my work makes readers pause,
                  reflect, and see their reality differently, then it has served its purpose.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </>
  )
}
