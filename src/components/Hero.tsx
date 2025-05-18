export default function Hero() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">Ìmọ̀Ifá – The Wisdom of Ifá</h1>
        <p className="mb-6 max-w-xl mx-auto text-lg">
          Explore the sacred knowledge, divine wisdom, and spiritual traditions of Yoruba culture.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/bookstore" className="bg-yellow-700 text-white px-6 py-2 rounded-md">Explore Yoruba Literature</a>
          <a href="/contact" className="underline">Find a Babaláwo →</a>
        </div>
      </section>

      {/* Blog Section Preview */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Latest from Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Sample Blog Title {i}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">May 2025</p>
              <p className="mt-2 text-sm">Short description of the blog post goes here.</p>
              <a href="/blog" className="mt-4 inline-block text-yellow-700 dark:text-yellow-400 font-medium">Read More →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="text-center py-16 px-6 bg-amber-50 dark:bg-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
        <p className="mb-6">Subscribe to receive updates, new resources, and spiritual insights.</p>
        <form className="flex justify-center gap-2 max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" className="p-2 w-full rounded" />
          <button className="bg-yellow-700 text-white px-4 py-2 rounded">Subscribe</button>
        </form>
      </section>
    </main>
  );
}
