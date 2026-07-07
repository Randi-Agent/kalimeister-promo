import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tarot Readings & Spiritual Services | Kali Meister",
  description: "Personal tarot readings, spiritual healing, and psychic life coaching with Kali Meister. Chattanooga, TN and virtual worldwide. Sessions from $250.",
}

const readings = [
  {
    title: "Personal Tarot Reading",
    price: "From $250",
    duration: "60 min",
    includes: "Video recording, PDF guide, follow-up messaging",
    description: "A full 60-minute deep-dive tarot session exploring your question or situation. Classic and custom spreads — Tarot, Oracle, and Lenormand methods available. We will uncover patterns, illuminate hidden influences, and map your best path forward.",
    primary: true,
  },
  {
    title: "Spiritual Healing",
    price: "From $350",
    duration: "60–90 min",
    includes: "In-person or virtual, chakra balancing, energy cleansing, guided meditation",
    description: "A channeled healing session combining energy work, guided meditation, and intuitive guidance. Address emotional blocks, release stagnant energy, and restore balance. Available in-person in Chattanooga or virtually.",
  },
  {
    title: "Psychic Life Coaching",
    price: "From $400",
    duration: "75 min",
    includes: "Personalized roadmap, accountability, monthly packages available",
    description: "One-on-one spiritual mentorship combining tarot, intuitive guidance, and practical life coaching. Ongoing support for personal transformation, career clarity, and relationship navigation.",
  },
]

const addOns = [
  { title: "Oracle Card Reading", desc: "Intuitive oracle guidance attuned to your unique energy — fluid, affirming, and deeply personal." },
  { title: "Lenormand Reading", desc: "Direct, practical answers using the Grand Tableau and Lenormand system for everyday clarity." },
  { title: "Channeling Session", desc: "A guided session where Kali opens to spiritual messages meant specifically for you." },
]

export default function ReadingsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Readings &amp; Sessions</h1>
      <p className="text-lg text-purple-300 text-center mb-4">
        Every session is a sacred space — choose the format that calls to you.
      </p>
      <p className="text-sm text-purple-500 text-center mb-12">
        Everything is negotiable — custom packages available outside these published rates.
      </p>

      <div className="space-y-6 mb-16">
        {readings.map((reading) => (
          <div
            key={reading.title}
            className={`border rounded-xl p-6 transition-colors ${
              reading.primary
                ? "border-[#d4a843]/40 bg-[#d4a843]/5 hover:border-[#d4a843]"
                : "border-purple-800/50 bg-purple-900/10 hover:border-[#d4a843]/50"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-[#d4a843]">{reading.title}</h2>
                <p className="text-purple-300 mt-2 leading-relaxed">{reading.description}</p>
                <p className="text-purple-500 text-sm mt-2">Includes: {reading.includes}</p>
              </div>
              <div className="text-right md:text-center shrink-0">
                <p className="text-white font-bold text-2xl">{reading.price}</p>
                <p className="text-purple-400 text-sm">{reading.duration}</p>
                <a
                  href="mailto:kali@kalimeister.com?subject=Booking: {reading.title}"
                  className="inline-block mt-3 bg-[#d4a843] text-[#0f0a1a] px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#f0d870] transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Reading Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {addOns.map((item) => (
            <div key={item.title} className="border border-purple-800/50 rounded-xl p-5 bg-purple-900/10">
              <h3 className="text-[#d4a843] font-semibold mb-2">{item.title}</h3>
              <p className="text-purple-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center border border-purple-800/50 rounded-xl p-8 bg-purple-900/10">
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
