import Link from "next/link"

export default function FinalCTA() {
  return (
    <section className="py-28 bg-black text-white text-center px-6">
      <h2 className="font-serif text-4xl md:text-5xl mb-6">
        Ready to Start Your Next Project?
      </h2>
      <p className="text-white/60 mb-10">
        Let’s build something exceptional together.
      </p>
      <Link href="/contact">
        <button className="px-12 py-4 bg-white text-black hover:bg-[#BF8B45] transition uppercase">
          Get In Touch
        </button>
      </Link>
    </section>
  )
}
