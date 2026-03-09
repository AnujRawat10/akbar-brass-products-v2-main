import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f0efe2] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* 404 Number */}
        <h1 className="text-[120px] sm:text-[160px] font-serif leading-none text-[#63403A]/10 font-bold select-none">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-[#63403A] tracking-wide">
          Page Not Found
        </h2>

        {/* Divider */}
        <div className="mx-auto mt-6 h-px w-16 bg-[#BF8B45]" />

        {/* Description */}
        <p className="mt-6 text-sm sm:text-base text-[#63403A]/70 leading-relaxed">
          The page you are looking for might have been moved, renamed, or no longer exists.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <button className="group relative px-6 sm:px-8 py-2.5 sm:py-3 bg-[#63403A] text-[#f0efe2] overflow-hidden transition-all duration-500 uppercase tracking-wider font-medium text-xs sm:text-sm hover:shadow-lg transform hover:scale-105">
              <span className="absolute inset-0 bg-[#BF8B45] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="relative z-10">Back to Home</span>
            </button>
          </Link>

          <Link href="/contact">
            <button className="group relative px-6 sm:px-8 py-2.5 sm:py-3 border border-[#63403A] text-[#63403A] overflow-hidden transition-all duration-500 uppercase tracking-wider font-medium text-xs sm:text-sm hover:shadow-lg transform hover:scale-105">
              <span className="absolute inset-0 bg-[#63403A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="relative z-10 group-hover:text-[#f0efe2] transition-colors duration-500">Contact Us</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
