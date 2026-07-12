import Link from "next/link";
import { SERVICES, CITIES } from "@/lib/pseo-data";

interface Props {
  params: {
    seo: string[];
  };
}

export default function SEOPage({ params }: Props) {
  // Get the slug from the first (and only) element of the seo array
  const slug = params.seo[0];

  // Split the slug to get service and city
  const [serviceSlug, citySlug] = splitSlug(slug);

  // If we couldn't split properly, show 404
  if (!serviceSlug || !citySlug) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <p className="text-red-400 text-center">Page not found</p>
      </div>
    );
  }

  // Find service and city data
  const serviceData = SERVICES[serviceSlug as keyof typeof SERVICES];
  const cityData = CITIES.find(city => city.slug === citySlug);

  if (!serviceData || !cityData) {
    // Handle 404 - you could redirect to a 404 page or show a message
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <p className="text-red-400 text-center">Page not found</p>
      </div>
    );
  }

  const { label: serviceLabel, description: serviceDescription } = serviceData;
  const { city: cityName, state, neighborhoods } = cityData;

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
            Transformative {serviceLabel} and spiritual counseling
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
          {serviceLabel} in {cityName}, {state}
        </h2>
        <p className="text-center text-purple-300 max-w-2xl mx-auto mb-12">
          Expert {serviceLabel.toLowerCase()} services tailored for the {cityName} community.
          Our experienced practitioners provide insightful readings that resonate with your
          unique situation and location-specific energy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Local Expertise",
              desc: `Deep understanding of ${cityName}'s unique energy and spiritual landscape`,
            },
            {
              title: "Community Trusted",
              desc: `Served clients throughout ${neighborhoods
                .split(",")
                .slice(0, 3)
                .join(", ")} and surrounding areas`,
            },
            {
              title: "Convenient Access",
              desc: "Available for in-person sessions in {cityName} or virtual consultations worldwide",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-purple-800/50 rounded-xl p-6 bg-purple-900/10 hover:border-[#d4a843]/50 transition-colors"
            >
              <h3 className="text-[#d4a843] text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-purple-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-purple-900/10 border-y border-purple-900/30 py-20 px-4 text-center">
        <blockquote className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-purple-200 italic leading-relaxed mb-6">
            &ldquo;Kali's {serviceLabel.toLowerCase()} reading gave me clarity I've been seeking for months.
            Her connection to the {cityName} community makes her insights feel personal and relevant.&rdquo;
          </p>
          <cite className="text-[#d4a843] not-italic font-medium">&mdash; {cityName} Resident</cite>
        </blockquote>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready for Your {serviceLabel} Session?
        </h2>
        <p className="text-purple-300 mb-8">
          Book a {serviceLabel.toLowerCase()} session and gain the clarity you deserve.
        </p>
        <Link
          href="/readings"
          className="inline-block bg-[#d4a843] text-[#0f0a1a] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#f0d870] transition-colors"
        >
          Book Your Session
        </Link>
      </section>
    </main>
  );
}

// Helper function to split a slug into service and city parts
// We assume the format is "service-slug-city-slug" where both parts are kebab-case
function splitSlug(slug: string): [string | null, string | null] {
  // We need to find the split point. Since both service and city slugs can contain hyphens,
  // we need to try matching against our known services and cities.
  
  // Try to match from the beginning with known service slugs
  for (const serviceSlug in SERVICES) {
    if (slug.startsWith(serviceSlug + "-")) {
      const citySlug = slug.substring(serviceSlug.length + 1); // +1 for the hyphen
      // Check if this citySlug exists in our cities
      if (CITIES.some(city => city.slug === citySlug)) {
        return [serviceSlug, citySlug];
      }
    }
  }
  
  // If we couldn't find a valid split, return nulls
  return [null, null];
}

// Generate static parameters for all service-city combinations
export async function generateStaticParams() {
  const routes = [];

  for (const [serviceSlug, serviceData] of Object.entries(SERVICES)) {
    for (const city of CITIES) {
      // Create a single slug combining service and city with hyphen
      const slug = `${serviceSlug}-${city.slug}`;
      routes.push({
        seo: [slug], // Pass as array to match the params.seo structure
      });
    }
  }

  return routes;
}