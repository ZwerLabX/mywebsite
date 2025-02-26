import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaRocket, FaTools, FaBook, FaLock, FaCode } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0F1A] via-purple-900/10 to-[#0F0F1A]">
      <div className="fixed w-full top-0 z-50 px-4 pt-4">
        <nav className="nav-bar max-w-6xl mx-auto">
          <div className="px-6">
            <div className="flex items-center justify-between h-14">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center space-x-2"
              >
                <FaCode className="text-purple-400 text-xl" />
                <span className="text-xl font-semibold gradient-text">Zwer Lab</span>
              </motion.div>
              <div className="flex items-center space-x-8">
                {['Home', 'Tools', 'Blog', 'Resources', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href="#" 
                    className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>

      <main className="container mx-auto px-6 pt-24">
        <section className="py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-6xl font-bold mb-6 gradient-text leading-tight">
              Welcome to Zwer Lab
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your hub for security tools, programming resources, and developer insights
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn-primary">
                Explore Tools
              </button>
              <button className="btn-primary bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
                View Resources
              </button>
            </div>
          </motion.div>
        </section>

        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaTools,
                title: "Development Tools",
                description: "Access our collection of development and security tools",
                color: "text-purple-400"
              },
              {
                icon: FaLock,
                title: "Security Resources",
                description: "Best practices and tools for secure development",
                color: "text-pink-400"
              },
              {
                icon: FaBook,
                title: "Learning Hub",
                description: "Comprehensive guides on programming and web security",
                color: "text-blue-400"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <item.icon className={`text-5xl ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-2xl font-semibold mb-2 gradient-text">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card text-center"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Start Building Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our community and explore the world of modern development and security
            </p>
            <button className="btn-primary">
              Get Started
            </button>
          </motion.div>
        </section>
      </main>

      <footer className="glass-effect mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-400">© 2024 Zwer Lab. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-4">
              {['Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App