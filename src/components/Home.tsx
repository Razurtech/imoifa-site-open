import { useState, useEffect } from 'react';
import { Moon, Sun, Instagram, Twitter, MessageSquare, Send } from 'lucide-react';

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
              {[{
                title: 'Odu Ifá',
                img: 'https://images.unsplash.com/photo-1575311373925-f64c6f6ab8d6?auto=format&fit=crop&w=500&q=60'
              }, {
                title: 'Spiritual Insights',
                img: 'https://images.unsplash.com/photo-1509873435632-066b312ad75e?auto=format&fit=crop&w=500&q=60'
              }, {
                title: 'Wisdom Scrolls',
                img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=60'
              }].map((book, i) => (
                <div key={i} className="bg-white dark:bg-gray-700 p-4 rounded shadow min-h-[280px]">
                  <img src={book.img} alt={book.title} className="h-40 w-full object-cover rounded mb-4" />
                  <h3 className="font-semibold mb-2 text-lg">{book.title}</h3>
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
              {[{
                title: 'Beads',
                img: 'https://images.unsplash.com/photo-1619603364933-d6fa319c7b3d?auto=format&fit=crop&w=500&q=60'
              }, {
                title: 'Divination Tools',
                img: 'https://images.unsplash.com/photo-1621440315469-1c0e75c7cc90?auto=format&fit=crop&w=500&q=60'
              }, {
                title: 'Incense',
                img: 'https://images.unsplash.com/photo-1611928231666-2e3a6cd40349?auto=format&fit=crop&w=500&q=60'
              }].map((item, i) => (
                <div key={i} className="bg-white dark:bg-gray-700 p-4 rounded shadow min-h-[280px]">
                  <img src={item.img} alt={item.title} className="h-40 w-full object-cover rounded mb-4" />
                  <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
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
            <p className="mb-8 text-gray-700 dark:text-gray-300">Connect with verified spiritual guides and Ifá practitioners. Contact us to get connected.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded shadow min-h-[280px] flex flex-col items-center">
                  <img src="https://images.unsplash.com/photo-1590080877631-572db5f3b8ef?auto=format&fit=crop&w=500&q=60" alt="Spiritual Guide" className="h-40 w-full object-cover rounded mb-4" />
                  <h3 className="font-semibold mb-2 text-lg">Spiritual Consultant</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Reach out to our team to be connected with a verified guide.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-32 px-6 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Blog</h2>
            <p className="mb-8 text-gray-700 dark:text-gray-300">Insights and teachings from the world of Ifá and Yoruba spirituality.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded shadow min-h-[280px]">
                  <img src={`https://source.unsplash.com/featured/?spirituality,african,${i}`} alt="Blog Image" className="h-40 w-full object-cover rounded mb-4" />
                  <h3 className="font-semibold mb-2 text-lg">Sacred Wisdom {i}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Brief reflection or story about Yoruba tradition or practice.</p>
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
