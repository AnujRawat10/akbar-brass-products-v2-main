import Link from "next/link"

export default function FinalCTA() {
  return (
    <section className="min-h-screen md:min-h-screen flex items-center justify-center bg-black text-white text-center px-6 py-16">
      <div>
        <h2 className="font-serif text-4xl md:text-5xl mb-6">
          Connect With Us
        </h2>
        <p className="text-white/60 mb-10">
          Let's build something exceptional together.
        </p>
      <Link href="/contact">
        <button className="px-12 py-4 bg-white text-black hover:bg-[#BF8B45] transition uppercase">
          Get In Touch
        </button>
      </Link>
      </div>
    </section>
  )
}
