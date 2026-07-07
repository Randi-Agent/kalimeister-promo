import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Kali | Tarot Reader & Spiritual Counselor",
  description: "Meet Kali Meister — tarot reader, oracle practitioner, and spiritual counselor based in Chattanooga, TN. Offering transformative readings worldwide.",
}

const testimonials = [
  {
    quote: "Kali has an incredible gift. My reading was deeply accurate and gave me the clarity I needed to make a major life decision.",
    author: "Sarah M.",
  },
  {
    quote: "I was skeptical at first, but the tarot session with Kali completely changed how I see my path. Every card resonated.",
    author: "David R.",
  },
  {
    quote: "The channeling session was one of the most profound spiritual experiences of my life. Kali holds space with such grace.",
    author: "Jennifer L.",
  },
]

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">About Kali</h1>

      <section className="mb-16">
        <div className="border border-purple-800/50 rounded-xl p-8 bg-purple-900/10">
          <p className="text-lg text-purple-200 leading-relaxed mb-4">
            Kali is a gifted intuitive reader, spiritual counselor, and guide based in Chattanooga, Tennessee.
            With years of experience working with tarot, oracle cards, and Lenormand, Kali offers readings
            that are grounded, compassionate, and deeply transformative.
          </p>
          <p className="text-lg text-purple-200 leading-relaxed mb-4">
            Kali&apos;s approach blends traditional card reading with intuitive channeling, creating
            sessions that feel both ancient and uniquely personal. Each reading is a collaborative
            exploration — not a prediction, but a conversation with the wisdom already within you.
          </p>
          <p className="text-lg text-purple-200 leading-relaxed">
            Whether you are navigating a life transition, seeking clarity on relationships or career,
            or simply curious about what the cards have to say — Kali welcomes you.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="border border-purple-800/50 rounded-xl p-6 bg-purple-900/10">
              <p className="text-purple-300 italic mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-[#d4a843] font-semibold text-sm">&mdash; {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center border border-purple-800/50 rounded-xl p-8 bg-purple-900/10">
        <h2 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h2>
        <p className="text-purple-300 mb-4">Based in Chattanooga, TN. Available for virtual sessions worldwide.</p>
        <a
          href="mailto:kali@kalimeister.com"
          className="text-[#d4a843] hover:underline font-semibold"
        >
          kali@kalimeister.com
        </a>
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://instagram.com/kalimeister"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-[#d4a843] transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com/@kalimeister"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-[#d4a843] transition-colors"
          >
            TikTok
          </a>
        </div>
      </section>
    </main>
  )
}
