import { Cinzel } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const cinzel = Cinzel({ subsets: ['latin-ext'], weight: ['400', '600', '700', '800'] });

const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'search' },
  { src: '/assets/icons/black-heart.svg', alt: 'heart' },
  { src: '/assets/icons/user.svg', alt: 'user' },
]

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/Mlogo.png"
            width={70}
            height={70}
            alt='logo'
          />

          <p className={`nav-logo ${cinzel.className}`}>
            Pri<span className="text-blue-500">Track</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={30}
              height={30}
              className="object-contain invert"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;