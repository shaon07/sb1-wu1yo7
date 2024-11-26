const supportLinks = {
  Company: ["About", "Services", "Works", "Career"],
  Help: ["Customer support", "Terms & Conditions", "Privacy Policy"],
  Resources: ["Free ebooks", "Development Tutorial", "How to - Blog", "Career"],
};

export default function SupportLinks() {
  return (
    <div className="grid md:grid-cols-3 md:place-items-center gap-8 mb-8">
      {Object.entries(supportLinks).map(([category, links]) => (
        <div key={category} className="self-start">
          <h3 className="font-semibold text-dark dark:text-white mb-4">{category}</h3>
          <ul className="space-y-2 text-dark dark:text-gray-400">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-red-500 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
