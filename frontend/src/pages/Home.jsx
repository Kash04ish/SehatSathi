import { Link } from 'react-router-dom';
import VoiceImg from '../assets/Voice.png';
import MedScannerImg from '../assets/medScanner.png';
import DashboardImg from '../assets/dashboard.png';
import SehatSathiLogo from '../assets/sehatsathi.png';
import frontImg from '../assets/front.png';

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* NAVBAR */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-teal-600">
            <Link to="/">SehatSathi</Link>
          </h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link to="/" className="text-teal-600 font-semibold">Home</Link>
            <Link to="/assistant" className="hover:text-teal-600">Assistant</Link>
            <Link to="/scanner" className="hover:text-teal-600">Scanner</Link>
            <Link to="/dashboard" className="hover:text-teal-600">Dashboard</Link>
            <Link to="/offline" className="hover:text-teal-600">Offline</Link>
          </nav>
          <div className="flex gap-4 text-sm">
            <Link to="/login" className="text-teal-600 hover:underline">Login</Link>
            <Link to="/signup" className="bg-teal-600 text-white px-4 py-1 rounded hover:bg-teal-700">Sign Up</Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center bg-gray-100 py-12 px-4" >
        <img
          src={frontImg}
          alt="Elderly woman using a tablet"
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        />
        <h2 className="text-4xl font-bold">Your Health, Our Voice, Always with You.</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          SehatSathi provides intuitive voice-activated health assistance, bringing care closer to home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700">
            Talk to SehatSathi AI Assistant
          </button>
          <button className="border border-teal-600 text-teal-600 px-6 py-2 rounded hover:bg-teal-100">
            Try Offline Mode
          </button>
        </div>
        
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Seamless Health Management, Tailored For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
          {[
            {
              title: 'Live Voice Interaction',
              desc: 'Engage in real-time health conversations, get answers, and track your daily wellness effortlessly.',
              img: VoiceImg,
              btn: 'Explore Voice Assistant'
            },
            {
              title: 'Medicine Scanner',
              desc: 'Simply scan medicine strips to understand dosages, warnings, and potential interactions instantly.',
              img: MedScannerImg,
              btn: 'Scan Medicines'
            },
            {
              title: 'Family Health Dashboard',
              desc: 'Monitor your family health logs, medication schedules, and receive AI-generated insights.',
              img: DashboardImg,
              btn: 'View Dashboard'
            }
          ].map((feature, i) => (
            <div key={i} className="border p-6 rounded-lg text-left">
              <h4 className="text-xl font-semibold">{feature.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
              <img src={feature.img} alt={feature.title} className="my-4 rounded-md w-full" />
              <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">{feature.btn}</button>
            </div>
          ))}
        </div>
      </section>

      {/* DEMO + LANGUAGE */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="flex-1 text-center">
            <h4 className="text-lg font-semibold mb-4">See SehatSathi in Action</h4>
            <img src={SehatSathiLogo} alt="Demo" className="rounded mx-auto" />
            <p className="mt-2 text-sm text-gray-600">
              Watch how our AI assistant simplifies health management with easy, voice-based interactions.
            </p>
          </div>
          <div className="flex-1 text-center">
            <h4 className="text-lg font-semibold mb-4">Choose Your Language</h4>
            <select className="border px-4 py-2 rounded">
              <option>English</option>
              <option>Hindi</option>
              <option>Gujarati</option>
              <option>Marathi</option>
              <option>Bengali</option>
            </select>
            <p className="mt-2 text-sm text-gray-500">
              SehatSathi is committed to serving you in your preferred language.
            </p>
          </div>
        </div>
      </section>

      {/* UPCOMING FEATURE */}
      <section className="text-center py-10 bg-white">
        <h4 className="text-xl font-semibold">Upcoming Feature: Choose Your Saathi’s Voice</h4>
        <p className="text-sm text-gray-500 mt-2">
          Coming soon: A voice that sounds like family — so your health companion truly feels like your own.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              quote: 'SehatSathi has transformed how my family monitors my health. The voice assistant is incredibly easy to use for elders.',
              name: 'Sarla Devi',
              city: 'Delhi'
            },
            {
              quote: 'The medicine scanner is a lifesaver! I can quickly check details and warnings without any hassle.',
              name: 'Rajesh Kumar',
              city: 'Mumbai'
            },
            {
              quote: 'Offline mode is brilliant. Even without internet, I can access crucial health information and support.',
              name: 'Ananya Sharma',
              city: 'Bengaluru'
            }
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow text-left">
              <blockquote className="italic">"{t.quote}"</blockquote>
              <p className="mt-2 text-sm font-semibold text-teal-700">
                {t.name}, {t.city}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-white text-center py-10">
        <h3 className="text-2xl font-bold mb-6">Our Valued Partners</h3>
        <div className="flex justify-center flex-wrap gap-6">
          <img src="https://i.imgur.com/ErJrLwA.png" alt="P1" className="w-12" />
          <img src="https://i.imgur.com/yzBvLgd.png" alt="P2" className="w-12" />
          <img src="https://i.imgur.com/yTyIPHz.png" alt="P3" className="w-12" />
          <img src="https://i.imgur.com/uyLgOEd.png" alt="P4" className="w-12" />
          <img src="https://i.imgur.com/9UakXwM.png" alt="P5" className="w-12" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-center py-8">
        <h4 className="text-xl font-bold">SehatSathi</h4>
        <p className="text-sm text-gray-600 mt-1 mb-4">Stay Healthy with SehatSathi</p>
        <div className="flex justify-center items-center gap-2 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="border px-4 py-2 rounded w-full"
          />
          <button className="bg-teal-600 text-white px-4 py-2 rounded">Subscribe</button>
        </div>
        <p className="mt-4 text-xs text-gray-400">© 2025 SehatSathi</p>
      </footer>
    </div>
  );
};

export default Home;
