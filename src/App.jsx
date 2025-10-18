import { FaFacebookF, FaInstagram, FaYoutube, FaDiscord, FaSnapchatGhost, FaTiktok, FaPinterestP } from "react-icons/fa";

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

      <main className="w-full bg-[#f9f1e4]">
        <div>
          <h3 className="text-center text-8xl text-[#582d41] font-bold pt-24 pb-12">2026 Passes Are Sold Out</h3>
          <div className="flex justify-center space-x-12 uppercase text-2xl tracking-tighter pb-16">
            <button className="border-2 border-black rounded-xl bg-blue-200 p-3 shadow-[4px_4px_0_0_#000] transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000]">
              Join Waitlist W1
            </button>
            <button className="border-2 border-black rounded-xl bg-blue-200 p-3 shadow-[4px_4px_0_0_#000] transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000]">
              Join Waitlist W2
            </button>
          </div>
          <div className="flex justify-center space-x-6 text-[#582d41] font-medium uppercase pb-20">
            <a href="#" className="group flex items-center space-x-2">
              <span className="border-b-2 border-black group-hover:border-orange-800">Bundle Hotel & Passes</span>
              <span className="text-xl text-black">→</span>
            </a>
            <a href="#" className="group flex items-center space-x-2">
              <span className="border-b-2 border-black group-hover:border-orange-800">Purchase Camping</span>
              <span className="text-xl text-black">→</span>
            </a>
            <a href="#" className="group flex items-center space-x-2">
              <span className="border-b-2 border-black group-hover:border-orange-800">View Pass Types</span>
              <span className="text-xl text-black">→</span>
            </a>
          </div>
        </div>
        <img src="/coachella-lineup.jpg" alt="photo of Coachella Lineup Poster" className="max-w-6xl mx-auto rounded-lg" />
        <div className="flex items-center space-x-20 max-w-6xl mx-auto py-44">
          <img src="/shuttle.png" alt="photo of shuttle" className="w-[25vw] h-[45vh]" />
          <div className="flex flex-col">
            <h3 className="text-5xl font-medium pb-6">Shuttles Make Getting Here Easy</h3>
            <p className="max-w-prose">The dedicated routes throughout the Valley provide safe, comfortable and reliable transportation with drop off / pick up just steps from the festival entrance.</p>
            <a className="text-[#582d41] uppercase">Learn More</a>
          </div>
        </div>
      </main>
      <footer className="w-full bg-[#f9f1e4] p-24">
        <div className="grid grid-cols-5 gap-8">
          <div className="flex flex-col space-y-4 col-span-2">
            <div className="flex space-x-6">
              <a href="#" className="uppercase font-bold">Coachella</a>
              <a href="#" className="uppercase font-bold">Golden Voice</a>
            </div >
            <div className="flex space-x-4 text-4xl">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaDiscord /></a>
              <a href="#"><FaSnapchatGhost /></a>
              <a href="#"><FaTiktok /></a>
              <a href="#"><FaPinterestP /></a>
            </div>
            <p>© 2025 Goldenvoice</p>
          </div>

          <div className="flex flex-col space-y-8 font-medium">
            <a href="#">Your Privacy Choices</a>
            <a href="#">Terms of Use</a>
            <a href="#">Festival Ticket Terms</a>
            <a href="#">Contact</a>
          </div>

          <div className="flex flex-col space-y-8 font-medium">
            <a href="#">Privacy Policy</a>
            <a href="#">Accessibility Statement</a>
            <a href="#">Partners</a>
            <a href="#">Health & Saftety</a>
          </div>

          <div className="flex flex-col space-y-8 font-medium">
            <a href="#">California Privacy Notice</a>
            <a href="#">Managae Cookies</a>
            <a href="#">Accessibility / ADA</a>
            <a href="#">Get The Newletter</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
