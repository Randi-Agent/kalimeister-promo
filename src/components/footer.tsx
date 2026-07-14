export function Footer() {
  return (
    <footer className="border-t border-purple-900/50 mt-auto bg-[#070510]">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[#d4a843] font-bold text-lg">Kali Meister</p>
            <p className="text-purple-300 text-sm mt-1">Tarot &bull; Oracle &bull; Spiritual Counseling</p>
            <p className="text-purple-400 text-xs mt-2">Chattanooga, TN &bull; Virtual Worldwide</p>
          </div>
          <div className="flex gap-6 text-sm text-purple-400">
            <a href="https://kalimeister.com/readings" className="hover:text-[#d4a843]">Readings</a>
            <a href="https://kalimeister.com/courses" className="hover:text-[#d4a843]">Courses</a>
            <a href="https://kalimeister.com/contact" className="hover:text-[#d4a843]">Contact</a>
          </div>
        </div>
        <div className="border-t border-purple-900/30 mt-6 pt-6 text-center text-xs text-purple-500">
          &copy; {new Date().getFullYear()} Kali Meister. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
