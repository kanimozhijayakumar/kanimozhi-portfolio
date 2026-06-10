const Footer = () => (
  <footer className="relative z-10 pb-20 md:pb-0 bg-black">
    <div className="border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col items-center gap-1.5">
        <p className="text-xs text-white/25">
          © {new Date().getFullYear()} Kanimozhi J. All rights reserved.
        </p>
        <p className="text-[11px] text-white/12">
          Data Engineering Portfolio
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
