import { useState, useEffect } from 'react';
import { Moon, Sun, Instagram, Twitter, MessageSquare, Send } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
        {/* Sticky Navbar */}
        <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
            <span className="text-xl font-bold">Ìmọ̀Ifá</span>
          </div>
          <nav className="flex gap-6 text-sm font-medium items-center">
            <a href="#about" className="hover:text-yellow-500">About</a>
            <a href="#bookstore" className="hover:text-yellow-500">Bookstore</a>
            <a href="#orisha-shop" className="hover:text-yellow-500">Orisha Shop</a>
            <a href="#directory" className="hover:text-yellow-500">Directory</a>
            <a href="#blog" className="hover:text-yellow-500">Blog</a>
            <a href="#contact" className="hover:text-yellow-500">Contact</a>
            <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Dark Mode">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="text-center py-28 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ìmọ̀Ifá – The Wisdom of Ifá</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Explore the sacred knowledge, divine wisdom, and spiritual traditions of Yoruba culture. Connect with your ancestral heritage through books, guides, and insight.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#bookstore" className="px-6 py-2 bg-yellow-600 text-white rounded-md">Explore Yoruba Literature</a>
            <a href="#directory" className="underline">Find a Babaláwo →</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">About Ìmọ̀Ifá</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Ìmọ̀Ifá is a cultural and spiritual project committed to preserving and sharing the profound wisdom of Ifá, the divinatory system of the Yoruba people. We offer literature, sacred tools, and a directory of knowledgeable diviners to support spiritual seekers worldwide.
            </p>
          </div>
        </section>

        {/* Bookstore Section */}
        <section id="bookstore" className="py-32 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Bookstore</h2>
            <p className="mb-8 text-gray-700 dark:text-gray-300">Discover sacred texts and modern interpretations of Ifá wisdom.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Odu Ifá', 'Spiritual Insights', 'Wisdom Scrolls'].map((title, i) => (
                <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded shadow">
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Explore this sacred text and its meanings.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Orisha Shop Section */}
        <section id="orisha-shop" className="py-32 px-6 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Orisha Shop</h2>
            <p className="mb-8 text-gray-700 dark:text-gray-300">Browse sacred tools, beads, and ritual items for Orisha worship.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Beads', 'Divination Tools', 'Incense'].map((item, i) => (
                <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded shadow">
                  <h3 className="font-semibold mb-2">{item}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Authentic items for your practice.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Directory Section */}
        <section id="directory" className="py-32 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Directory</h2>
            <p className="mb-8 text-gray-700 dark:text-gray-300">Connect with verified Babaláwos, Ìyánífás, and spiritual guides near you.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Babaláwo Ifakunlé', 'Ìyánífá Moréniké'].map((person, i) => (
                <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded shadow">
                  <h3 className="font-semibold mb-1">{person}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Available for spiritual consultation.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-32 px-6 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Blog</h2>
            <p className="mb-8 text-gray-700 dark:text-gray-300">Read insights, reflections, and teachings from the world of Ifá and Yoruba spirituality.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded shadow min-h-[180px]">
                  <h3 className="font-semibold mb-2">Sample Blog {i}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Brief description of a spiritual topic.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Contact</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Reach out to us with questions, collaborations, or general inquiries.</p>
            <form className="flex flex-col gap-4">
              <input type="email" placeholder="Your email address" className="px-4 py-2 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white" required />
              <textarea placeholder="Write your message..." rows={4} className="px-4 py-2 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white" required></textarea>
              <button className="self-center px-6 py-2 bg-yellow-600 text-white rounded-md flex items-center gap-2">
                <Send size={16} /> Send Message
              </button>
            </form>
            <div className="mt-6 flex justify-center gap-4 text-gray-500 dark:text-gray-300">
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="X"><Twitter size={20} /></a>
              <a href="#" aria-label="Telegram"><MessageSquare size={20} /></a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Ìmọ̀Ifá. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

