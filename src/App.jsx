function App() {

  return (
    <>
      <header className="flex items-stretch justify-between w-full h-20 border border-black bg-[#ffedd3] uppercase tracking-widest font-sans text-sm md:text-base">
        <div className="flex items-center w-full h-full">
          <h1 className="flex items-center justify-center w-72 h-full text-2xl border-r border-black">COACHELLA</h1>
          <h3 className="w-full pl-12 tracking-tighter font-medium">APR 10-12 & 17-19, 2026</h3>
        </div>

        <nav className="hidden md:flex items-center justify-end h-full w-full space-x-6 pr-12 tracking-tighter">
          <a href="#">Music</a>
          <a href="#">Passes</a>
          <a href="#">Plan</a>
          <a href="#">Experience</a>
          <a href="#">Shop</a>
          <a href="#" className="border-2 border-black rounded-xl bg-blue-200 p-2">Join Waitlist</a>
        </nav>

        <div className="flex items-center w-52 h-full hidden md:block border-l border-black">
          <span className="flex items-center justify-center h-full transform scale-x-[-1] text-4xl">⌕</span>
        </div>
      </header>

      <main></main>
      <footer></footer>
    </>
  )
}

export default App
