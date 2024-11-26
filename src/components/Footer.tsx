import { Twitter, Facebook, Instagram, Github } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Company: ['About', 'Services', 'Works', 'Career'],
    Help: ['Customer support', 'Terms & Conditions', 'Privacy Policy'],
    Resources: [
      'Free ebooks',
      'Development Tutorial',
      'How to - Blog',
      'Career',
    ],
  };

  return (
    <footer className="bg-darker py-12 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 md:place-items-center gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="">
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2 text-gray-400">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-red-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © Copyright 2024. All Rights Reserved By RedTilt
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
