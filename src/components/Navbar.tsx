const Navbar = () => {
  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-foreground/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          ATHIKE<span className="text-primary">SAVAN</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="glow-btn text-sm px-5 py-2 rounded-lg hidden sm:inline-block">
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
