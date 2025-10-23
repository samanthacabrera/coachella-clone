import { useState } from "react";
import Background from "./Background";
import { FaFacebookF, FaInstagram, FaYoutube, FaDiscord, FaSnapchatGhost, FaTiktok, FaPinterestP } from "react-icons/fa";

function App() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdowns = {
    Music: [
      { label: "Lineup", href: "#" },
      { label: "2025 YouTube Livestream", href: "#" },
      { label: "Coachella: 20 Years In The Desert", href: "#" },
      { label: "Past Festivals", href: "#" },
    ],
    Passes: [
      { label: "2026 Pass Types", href: "#" },
      { label: "2026 Sale Info", href: "#" },
      { label: "2026 Amex® Passes", href: "#" },
      { label: "2026 Hotel Packages", href: "#" },
      { label: "2026 Waitlist", href: "#" },
    ],
    Plan: [
      { label: "2025 Festival Info", href: "#" },
      { label: "2025 Camping", href: "#" },
      { label: "2025 Getting Here", href: "#" },
      { label: "2025 Maps", href: "#" },
      { label: "2025 Support & FAQ", href: "#" },
      { label: "2025 Services", href: "#" },
      { label: "2025 Accessibility / ADA", href: "#" },

    ],
    Experience: [
      { label: "2025 Activities", href: "#" },
      { label: "2025 Art", href: "#" },
      { label: "2025 Eat & Drink", href: "#" },
      { label: "2025 Coachella in Fortnite", href: "#" },
      { label: "2025 Community", href: "#" },
      { label: "2025 Mobile", href: "#" },
      { label: "2025 Photo Gallery", href: "#" },
      { label: "2025 Sustainability", href: "#" },
    ],
  };

  return (
    <>
      <Background />
      <header className="sticky top-0 z-50 flex items-stretch justify-between w-full h-20 border border-black bg-[#ffedd3] uppercase tracking-widest font-sans text-sm md:text-base">
        <div className="flex items-center w-full h-full">
          <div className="flex items-center justify-center w-72 h-full text-2xl border-r border-black">
            <img src="/coachella-logo.svg" alt="Coachella logo" />
          </div>
          <h3 className="w-full pl-12 tracking-tighter font-medium">APR 10-12 & 17-19, 2026</h3>
        </div>

        <nav
          className="hidden md:flex items-center justify-end h-full w-full space-x-4 pr-12 tracking-tighter relative"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {["Music", "Passes", "Plan", "Experience"].map((item, index) => {
            const shapes = [
              { borderRadius: "60% 40% 50% 70% / 60% 40% 70% 50%", transform: "scale(1.2, 2.1) rotate(-2deg)" },
              { borderRadius: "55% 45% 65% 35% / 50% 60% 40% 70%", transform: "scale(1.3, 1.9) rotate(3deg)" },
              { borderRadius: "70% 30% 60% 40% / 65% 35% 55% 45%", transform: "scale(1.25, 2) rotate(-4deg)" },
              { borderRadius: "65% 35% 55% 45% / 70% 30% 60% 40%", transform: "scale(1.15, 1.8) rotate(2deg)" },
            ];
            const shape = shapes[index % shapes.length];
            return (
              <div
                key={item}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item)}
              >
                <a href="#" className="relative z-10 px-2 py-1">{item}</a>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-out" style={{ background: "#ffcba4", borderRadius: shape.borderRadius, transform: shape.transform, zIndex: 0,}}></span>
              </div>
            );
          })}
          <a href="#" className="relative z-10 px-2 py-1">Shop</a>
          <a href="#" className="border-2 border-black rounded-xl bg-blue-200 p-2">Join Waitlist</a>
          {activeDropdown && dropdowns[activeDropdown] && (
            <div
              className="fixed right-0 top-[5rem] w-screen bg-[#ffedd3] flex flex-col items-end uppercase text-xl tracking-tight z-40 pt-24 pr-24"
              style={{ height: "70vh" }}
            >
              <ul className="space-y-12 font-medium">
                {dropdowns[activeDropdown].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        <div className="flex items-center justify-center w-52 h-full hidden md:flex border-l border-black">
          <img src="/search.svg" alt="search icon" className="w-5 h-5 object-contain" />
        </div>
      </header>

      <main className="w-full bg-transparent">
        <div>
          <h3 className="text-center text-8xl text-[#582d41] font-bold pt-24 pb-12">2026 Passes Are Sold Out</h3>
          <div className="flex justify-center space-x-12 uppercase text-2xl tracking-tighter pb-16">
            <button className="border-2 border-black rounded-xl bg-blue-200 p-3 shadow-[4px_4px_0_0_#000] transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#000]">
              Join Waitlist W1
            </button>
            <button className="border-2 border-black rounded-xl bg-blue-200 p-3 shadow-[4px_4px_0_0_#000] transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#000]">
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
        <div className="flex items-center space-x-40 max-w-6xl mx-auto py-44">
          <img src="/shuttle.png" alt="photo of shuttle" className="w-[35vw] h-[55vh]" />
          <div className="flex flex-col">
            <h3 className="text-5xl font-medium pb-6">Shuttles Make Getting Here Easy</h3>
            <p className="max-w-xl">The dedicated routes throughout the Valley provide safe, comfortable and reliable transportation with drop off / pick up just steps from the festival entrance.</p>
            <a className="text-[#582d41] font-medium uppercase flex items-center">
              <span className="border-b-2 border-[#582d41]">Learn More</span>
              <span className="text-2xl text-black px-2">→</span>
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-40 max-w-6xl mx-auto py-44">
          <div className="flex flex-col">
            <h3 className="text-5xl font-medium pb-6">Payment Plan</h3>
            <p className="max-w-xl">More time to plan and more time to pay for your passes over time. Turn on the payment plan at checkout for your only chance to buy passes for $49 down and split the rest into equal monthly payment through February 2026.</p>
            <a className="text-[#582d41] font-medium uppercase flex items-center">
              <span className="border-b-2 border-[#582d41]">Learn More</span>
              <span className="text-2xl text-black px-2">→</span>
            </a>
          </div>
          <img src="/payment.png" alt="photo of two people jumping" className="w-[35vw] h-[55vh]" />
        </div>
        <div className="flex items-center space-x-40 max-w-6xl mx-auto py-44">
          <img src="/hotel.png" alt="photo of two people jumping" className="w-[25vw] h-[45vh]" />
          <div className="flex flex-col">
            <h3 className="text-5xl font-medium pb-6">Hotels & Passes</h3>
            <p className="max-w-xl">Bundle your festival passes with local resort accommodations and Coachella Shuttle transportation. Prices vary. Official Hotel Packages are on sale now for both Coachella weekends and sold exclusively through Valley Music Travel.</p>
            <button className="border-2 border-black rounded-xl bg-orange-500 w-fit p-3 mt-4 text-xl uppercase shadow-[4px_4px_0_0_#000] transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#000]">
              Purchase Now
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-20 max-w-6xl mx-auto py-12">
          <div className="w-1/2 flex flex-col">
            <h3 className="text-4xl text-center font-medium pb-6">Go Behind The Scenes With <span className="uppercase">Arrival</span></h3>
            <p className="max-w-xl text-lg text-center">Shot in the lead-up to their Coachella performances, ARRIVAL goes inside 5 artists’ rehearsals, creative sessions, and personal moments to capture the energy, pressure, and purpose behind the stage.</p>
          </div>
           <div className="w-1/2 aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Niiuprmot84?si=vu-BHHFfpcCysQLC"
              title="Coachella Arrival Documentary"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </main>
      <footer
        className="w-full bg-[#f9f1e4] bg-cover bg-right p-24"
        style={{ backgroundImage: "url('/footer-background.png')", backgroundPosition: "50% center", }}
      >
        <div className="grid grid-cols-5 gap-8">
          <div className="flex flex-col space-y-4 col-span-2">
            <div className="flex space-x-6">
              <img src="/coachella-logo.svg" alt="Coachella logo" className="" />
              <img src="/goldenvoice-logo.svg" alt="Goldenvoice logo" className="" />
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
