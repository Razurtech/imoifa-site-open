import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setDarkMode(false);
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors">
        <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-900">
          <div className="flex items-center gap-2">
            <img src="/logo-no-background.png" alt="Ìmọ̀Ifá logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-orange-600">Ìmọ̀Ifá</span>
          </div>
          <nav className="flex gap-6 text-sm font-medium items-center">
            <a href="#about" className="hover:text-orange-500">About</a>
            <a href="#bookstore" className="hover:text-orange-500">Bookstore</a>
            <a href="#orisha-shop" className="hover:text-orange-500">Orisha Shop</a>
            <a href="#directory" className="hover:text-orange-500">Directory</a>
            <a href="#blog" className="hover:text-orange-500">Blog</a>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
            <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Dark Mode">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
        </header>

        <section className="text-center py-28 px-6 bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-700 dark:text-orange-400">Ìmọ̀Ifá – The Wisdom of Ifá</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Explore the sacred knowledge, divine wisdom, and spiritual traditions of Yoruba culture.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#bookstore" className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">Explore Yoruba Literature</a>
            <a href="#directory" className="underline text-orange-600 dark:text-orange-400">Find a Babaláwo →</a>
          </div>
        </section>

        <section id="about" className="py-32 px-6 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">About Ìmọ̀Ifá</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Ìmọ̀Ifá is a spiritual and educational platform centered on Yoruba traditions. We serve as a trusted bridge between ancient wisdom and modern application by offering a curated bookstore, blog, sacred Orisha items, and access to spiritual consultants. Our mission is to enlighten, guide, and empower seekers on their ancestral path.
            </p>
          </div>
        </section>

        <section id="bookstore" className="py-20 px-6 bg-white dark:bg-gray-950 text-center">
          <h2 className="text-3xl font-semibold mb-8">Bookstore</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">Browse sacred texts, Ifá guides, spiritual teachings, and historical works.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <a key={i} href="/bookstore" className="bg-orange-100 dark:bg-orange-900 dark:text-white text-orange-900 px-6 py-8 rounded-xl hover:bg-orange-200 dark:hover:bg-orange-800 transition">
                <h3 className="font-semibold mb-2">Book Title {i + 1}</h3>
                <p className="text-sm">Short description of the book and its purpose.</p>
              </a>
            ))}
          </div>
        </section>

        <section id="orisha-shop" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center">
          <h2 className="text-3xl font-semibold mb-8">Orisha Shop</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">Authentic items for devotion, ritual practice, and ancestral reverence.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <a key={i} href="/shop" className="bg-orange-100 dark:bg-orange-900 dark:text-white text-orange-900 px-6 py-8 rounded-xl hover:bg-orange-200 dark:hover:bg-orange-800 transition">
                <h3 className="font-semibold mb-2">Product {i + 1}</h3>
                <p className="text-sm">Description of the item and spiritual use.</p>
              </a>
            ))}
          </div>
        </section>

        <section id="directory" className="py-32 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Directory</h2>
            <p className="mb-8 text-gray-700 dark:text-gray-300">
              Looking for spiritual guidance or consultation? Contact us and we'll pair you with verified Ìyánífás and Babaláwos based on your needs.
            </p>
            <a href="#contact" className="inline-block px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">Request a Connection</a>
          </div>
        </section>

        <section id="blog" className="py-20 px-6 bg-white dark:bg-gray-950 text-center">
          <h2 className="text-3xl font-semibold mb-8">Blog</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">Stories, teachings, reflections, and Yoruba spirituality insights.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <a key={i} href="/blog" className="bg-gray-100 dark:bg-gray-800 px-6 py-8 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <img src={`https://source.unsplash.com/featured/?ifa,spirituality,${i}`} alt="Blog preview" className="w-full h-40 object-cover mb-4 rounded" />
                <h3 className="font-semibold mb-2">Blog Post {i + 1}</h3>
                <p className="text-sm">Intro summary of this post to engage and guide the reader.</p>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <p className="max-w-xl mx-auto mb-6 text-gray-700 dark:text-gray-300">
            Send us a message to collaborate, ask questions, request consultations, or bulk orders.
          </p>
          <form className="max-w-md mx-auto flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800" />
            <input type="email" placeholder="Your Email" className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800" />
            <textarea placeholder="Your Message" rows={4} className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"></textarea>
            <button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700">Send Message</button>
          </form>
        </section>

        <footer className="text-center py-6 text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Ìmọ̀Ifá. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
