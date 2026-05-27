'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Sang Giàu</span>
              <span className="text-teal-400">.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Data-Driven Analyst specializing in Quantitative Finance &
              Algorithmic Trading. Passionate about solving complex problems
              through data science and automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-100 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Thông tin
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Kinh nghiệm
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Kỹ năng
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Dự án
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-gray-100 mb-4">
              Kết nối
            </h4>
            <div className="flex space-x-4">
              {[
                { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
                // { icon: Linkedin, href: '#', label: 'LinkedIn' },
                // { icon: Github, href: '#', label: 'GitHub' },
                // { icon: X, href: '#', label: 'X (Twitter)' },
              ].filter(Boolean).map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-teal-400 hover:bg-gray-700 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Nguyễn Phạm Sang Giàu. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Built with{' '}
            <span className="text-red-400">♥</span> using Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
