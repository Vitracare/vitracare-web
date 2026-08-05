const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Insert isScrolled state
code = code.replace(
  "const [isSubmitted, setIsSubmitted] = useState(false);",
  "const [isSubmitted, setIsSubmitted] = useState(false);\n  const [isScrolled, setIsScrolled] = useState(false);\n\n  useEffect(() => {\n    const handleScroll = () => {\n      setIsScrolled(window.scrollY > 50);\n    };\n    window.addEventListener('scroll', handleScroll);\n    return () => window.removeEventListener('scroll', handleScroll);\n  }, []);\n"
);

// Update header class
// Current header:
// <header className="relative z-20 w-full px-8 py-10 md:px-16 lg:px-20 flex items-center justify-between">
code = code.replace(
  /<header className="relative z-20 w-full px-8 py-10 md:px-16 lg:px-20 flex items-center justify-between">/,
  '<header className={`fixed top-0 left-0 right-0 z-50 w-full px-8 py-6 md:px-16 lg:px-20 flex items-center justify-between transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent py-10"}`}>'
);

fs.writeFileSync('src/App.tsx', code);
