import { navbarLinks } from "../../../resources";

export default function NavLinks() {
  return (
    <div className="flex flex-1 justify-center items-center gap-4">
      {navbarLinks.map((link) => (
        <a key={link.name} href={link.href} className="nav-link">
          {link.name}
        </a>
      ))}
    </div>
  );
}
