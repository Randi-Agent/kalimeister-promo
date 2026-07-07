import Link from "next/link"

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-[#0f0a1a] to-[#0f0a1a]" />
        <div className="relative z-10 max-w-3xl">
          <p className="text-[#d4a843] text-sm tracking-[0.3em] uppercase mb-4">
            Tarot &bull; Oracle &bull; Spiritual Guidance
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Kali Meister
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-10 leading-relaxed">
            Transformative tarot readings and spiritual counseling
            that illuminate your path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/readings"
              className="bg-[#d4a843] text-[#0f0a1a] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#f0d870] transition-colors"
            >
              Explore Readings
            </Link>
            <Link
              href="/about"
              className="border border-[#d4a843] text-[#d4a843] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d4a843]/10 transition-colors"
            >
              About Kali
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Clarity Through the Cards
        </h2>
        <p className="text-center text-purple-300 max-w-2xl mx-auto mb-12">
          Whether you are at a crossroads, seeking deeper understanding, or ready to embrace your next chapter — a reading with Kali opens the door.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Tarot", desc: "Classic tarot spreads for love, career, and life path. Deep insight through archetypal wisdom." },
            { title: "Oracle", desc: "Intuitive oracle guidance tuned to your energy and questions. Gentle, affirming, powerful." },
            { title: "Lenormand", desc: "Direct, practical answers to everyday questions. Straightforward and grounded." },
          ].map((item) => (
            <div key={item.title} className="border border-purple-800/50 rounded-xl p-6 bg-purple-900/10 hover:border-[#d4a843]/50 transition-colors">
              <h3 className="text-[#d4a843] text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-purple-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-purple-900/10 border-y border-purple-900/30 py-20 px-4 text-center">
        <blockquote className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-purple-200 italic leading-relaxed mb-6">
            &ldquo;Kali has an incredible gift. My reading was deeply accurate and gave me the clarity I needed to make a major life decision.&rdquo;
          </p>
          <cite className="text-[#d4a843] not-italic font-medium">&mdash; Sarah M.</cite>
        </blockquote>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin?</h2>
        <p className="text-purple-300 mb-8">
          Book a private session with Kali. Available in-person in Chattanooga or virtually worldwide.
        </p>
        <Link
          href="/readings"
          className="inline-block bg-[#d4a843] text-[#0f0a1a] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#f0d870] transition-colors"
        >
          Book a Reading
        </Link>
      </section>
    </main>
  )
}
