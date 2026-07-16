"use client";


import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
    
    <main className="relative  min-h-screen items-center justify-center overflow-hidden bg-[#0B1020] px-6">
      
      {/* Background */}
      <div className="absolute left-[-100px] top-[-100px] h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] h-80 w-80 rounded-full bg-cyan-400/20 blur-[140px]" />
<Header/>
      <div className="relative z-10 pt-10 sm:pt-24 text-center">
        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm uppercase tracking-[4px] text-cyan-300">
          Under Development
        </span>

        <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
          Home Page
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          Our website is almost ready. The remaining pages are completed, and
          we' re currently putting the finishing touches on the Home page.
          Stay tuned for the full experience.
        </p>

      
      </div>

     
    </main>

    </>
    
  );
}