import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Navbar */}
      <nav className="w-full flex justify-start items-center py-6 pl-8 sm:pl-20 bg-white/80 dark:bg-black/80 backdrop-blur sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
        <ul className="flex gap-8 text-base font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-blue-600 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-600 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-blue-600 transition-colors"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
      {/* Page Sections */}
      <main className="flex-1 flex flex-col items-center justify-center gap-24 p-8 sm:p-20">
        <section
          id="home"
          className="w-full max-w-3xl min-h-[40vh] flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl font-bold mb-4">Home</h1>
        </section>
        <section
          id="about"
          className="w-full max-w-3xl min-h-[40vh] flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl font-bold mb-4">About</h1>
        </section>
        <section
          id="experience"
          className="w-full max-w-3xl min-h-[40vh] flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl font-bold mb-4">Experience</h1>
        </section>
        <section
          id="projects"
          className="w-full max-w-3xl min-h-[40vh] flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
        </section>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
