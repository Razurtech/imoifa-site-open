import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors">
        {/* Sticky Navbar */}
        <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-900">
          <div className="flex items-center gap-2">
            <img src="/logo-no-background.png" alt="Ìmọ̀Ifá logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-orange-600">Ìmọ̀Ifá</span>
          </div>
          <nav className="flex gap-6 text-sm font-medium items-center">
            <a href="#about" className="hover:text-orange-500">About</a>
            <a href="#bookstore" className="hover:text-orange-500">Bookstore</a>
            <a href="#orisha" className="hover:text-orange-500">Orisha Shop</a>
            <a href="#directory" className="hover:text-orange-500">Directory</a>
            <a href="#blog" className="hover:text-orange-500">Blog</a>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
            <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Theme">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="text-center py-28 px-6 bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-700 dark:text-orange-400">Ìmọ̀Ifá – The Wisdom of Ifá</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Explore the sacred knowledge, divine wisdom, and spiritual traditions of Yoruba culture. Connect with your ancestral heritage through books, guides, and insight.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#bookstore" className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">Explore Yoruba Literature</a>
            <a href="#directory" className="underline text-orange-600 dark:text-orange-400">Find a Babaláwo →</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-28 px-6 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">About Ìmọ̀Ifá</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Ìmọ̀Ifá is a cultural and spiritual initiative dedicated to the preservation, education, and practice of the ancient Yoruba wisdom tradition known as Ifá. Through our bookstore, blog, and curated directory of spiritual diviners, we bridge modern seekers with traditional knowledge systems. We empower individuals to explore authentic spiritual practices rooted in Africa’s ancestral legacy.
            </p>
          </div>
        </section>

        {/* Bookstore Section */}
        <section id="bookstore" className="py-20 px-6 bg-white dark:bg-gray-950 text-center">
          <h2 className="text-3xl font-semibold mb-8">Bookstore</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">Discover sacred texts, Ifá wisdom, and tools for spiritual enlightenment.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/bookstore" className="bg-orange-100 dark:bg-orange-900 dark:text-white text-orange-900 px-6 py-8 rounded-xl w-64 hover:bg-orange-200 transition">
              <h3 className="font-semibold mb-2">Odu Ifá</h3>
              <p className="text-sm">Explore this sacred text and its meanings.</p>
            </a>
            <a href="/bookstore" className="bg-orange-100 dark:bg-orange-900 dark:text-white text-orange-900 px-6 py-8 rounded-xl w-64 hover:bg-orange-200 transition">
              <h3 className="font-semibold mb-2">Spiritual Insights</h3>
              <p className="text-sm">Stories and wisdom from Yoruba diviners.</p>
            </a>
          </div>
        </section>

        {/* Orisha Shop */}
        <section id="orisha" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center">
          <h2 className="text-3xl font-semibold mb-8">Orisha Shop</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">Beads, tools, and sacred items for Orisha devotion.</p>
          <a href="/shop" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700">Visit Shop</a>
        </section>

        {/* Directory */}
        <section id="directory" className="py-24 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Directory</h2>
          <p className="max-w-xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
            Looking for spiritual guidance or consultation? Fill the contact form and we will connect you with verified Babaláwos and Ìyánífás based on your needs.
          </p>
          <a href="#contact" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700">Request a Connection</a>
        </section>

        {/* Blog */}
        <section id="blog" className="py-20 px-6 bg-white dark:bg-gray-950 text-center">
          <h2 className="text-3xl font-semibold mb-6">Blog</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">Reflections, teachings, and real-world Ifá experiences.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/blog" className="bg-gray-100 dark:bg-gray-800 px-6 py-8 rounded-xl w-64 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <h3 className="font-semibold mb-2">The Role of Babaláwos</h3>
              <p className="text-sm">Insights on guidance, roles, and responsibilities.</p>
            </a>
            <a href="/blog" className="bg-gray-100 dark:bg-gray-800 px-6 py-8 rounded-xl w-64 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <h3 className="font-semibold mb-2">Divination and Ifá</h3>
              <p className="text-sm">What is Ifá and how diviners receive answers.</p>
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <p className="max-w-xl mx-auto mb-6 text-gray-700 dark:text-gray-300">
            Reach out with questions, requests for divination, or wholesale inquiries.
          </p>
          <form className="max-w-md mx-auto flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800" />
            <input type="email" placeholder="Your Email" className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800" />
            <textarea placeholder="Your Message" rows={4} className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"></textarea>
            <button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700">Send</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Ìmọ̀Ifá. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
