import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tarot & Oracle Readings | Kali Meister",
  description: "Transformative tarot, oracle, Lenormand, channeling, and spiritual counseling sessions with Kali Meister. Virtual and in-person readings available.",
}

const readings = [
  {
    title: "Tarot Reading",
    duration: "60 min",
    price: "$250",
    description: "A full tarot spread exploring your question or situation in depth. We will uncover patterns, illuminate hidden influences, and map your best path forward. Classic and custom spreads available.",
  },
  {
    title: "Oracle Card Reading",
    duration: "45 min",
    price: "$200",
    description: "Intuitive oracle guidance attuned to your unique energy. Less structured than tarot — these readings are fluid, affirming, and deeply personal. Ideal for emotional and spiritual clarity.",
  },
  {
    title: "Lenormand Reading",
    duration: "30 min",
    price: "$150",
    description: "Direct, practical answers using the Lenormand system. Best for everyday questions about work, relationships, and decisions. Straightforward and grounded.",
  },
  {
    title: "Channeling Session",
    duration: "60 min",
    price: "$275",
    description: "A guided session where Kali opens to spiritual guidance and messages meant specifically for you. Includes reflection and integration time.",
  },
  {
    title: "Spiritual Counseling",
    duration: "75 min",
    price: "$280",
    description: "One-on-one spiritual mentorship combining tarot, intuitive guidance, and practical life coaching. Ongoing support for personal transformation and growth.",
  },
]

export default function ReadingsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Readings &amp; Sessions</h1>
      <p className="text-lg text-purple-300 text-center mb-12">
        Every session is a sacred space — choose the format that calls to you.
      </p>
      <div className="space-y-6">
        {readings.map((reading) => (
          <div
            key={reading.title}
            className="border border-purple-800/50 rounded-xl p-6 bg-purple-900/10 hover:border-[#d4a843]/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-[#d4a843]">{reading.title}</h2>
                <p className="text-purple-300 mt-2 leading-relaxed">{reading.description}</p>
              </div>
              <div className="text-right md:text-center shrink-0">
                <p className="text-white font-bold text-2xl">{reading.price}</p>
                <p className="text-purple-400 text-sm">{reading.duration}</p>
                <a
                  href="#book"
                  className="inline-block mt-3 bg-[#d4a843] text-[#0f0a1a] px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#f0d870] transition-colors"
                >
                  Book
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center border border-purple-800/50 rounded-xl p-8 bg-purple-900/10">
        <h2 className="text-2xl font-bold text-white mb-4">Not sure which reading is right for you?</h2>
        <p className="text-purple-300 mb-6">Reach out and Kali will help guide you to the right session.</p>
        <a
          href="mailto:kali@kalimeister.com"
          className="text-[#d4a843] hover:underline font-semibold"
        >
          kali@kalimeister.com
        </a>
      </div>
    </main>
  )
}
