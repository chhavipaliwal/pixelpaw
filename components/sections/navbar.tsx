'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [circleRotation, setCircleRotation] = useState(0);
  const [closeRotation, setCloseRotation] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setCircleRotation((prev) => prev + 180);
    setCloseRotation((prev) => prev - 180);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-background font-pp-neue-machina shadow-md backdrop-blur-md">
      <div className="mx-auto flex items-center justify-between py-4 pl-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl font-medium tracking-wide text-white">
            Chhavi
          </span>
        </Link>

        {/* Right side: Contact, Menu, and Circle Logo */}
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <Button>Contact</Button>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              menu
            </button>
            <div
              className={`fixed right-0 top-0 z-50 transform rounded-lg bg-white p-6 text-black shadow-lg transition-all duration-500 ease-in-out ${
                isOpen
                  ? 'translate-x-0 translate-y-0'
                  : '-translate-y-full translate-x-full'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className={`absolute right-2 top-2 text-gray-600 transition-transform duration-500 ease-in-out hover:text-black ${
                  closeRotation === 0 ? 'rotate-0' : '-rotate-180'
                }`}
              >
                ✕
              </button>

              {/* Menu Links */}
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    href="/homepage"
                    className="text-lg hover:text-gray-600"
                  >
                    portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-lg hover:text-gray-600">
                    about
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-lg hover:text-gray-600">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/socials" className="text-lg hover:text-gray-600">
                    Socials
                  </Link>
                </li>
              </ul>

              {/* Social Icons and Email */}
              <div className="mt-6 flex items-center space-x-3">
                {/* Instagram */}
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5 text-gray-600 hover:text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.132 5.775.072 7.053.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.278.261 2.173.558 2.913.306.789.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.74.297 1.635.498 2.913.558C8.333 23.985 8.74 24 12 24s3.667-.015 4.947-.072c1.278-.06 2.173-.261 2.913-.558.789-.306 1.459-.717 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.297-.74.498-1.635.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.278-.261-2.173-.558-2.913-.306-.789-.717-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.74-.297-1.635-.498-2.913-.558C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.421.42.679.819.896 1.381.167.422.36 1.057.415 2.227.055 1.265.071 1.647.071 4.85s-.016 3.585-.071 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.42.421-.819.679-1.381.896-.422.167-1.057.36-2.227.415-1.265.055-1.647.071-4.85.071s-3.585-.016-4.85-.071c-1.17-.055-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.421-.42-.679-.819-.896-1.381-.167-.422-.36-1.057-.415-2.227-.055-1.265-.071-1.647-.071-4.85s.016-3.585.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.421.819-.679 1.381-.896.422-.167 1.057-.36 2.227-.415 1.265-.055 1.647-.071 4.85-.071zm0 3.435c-2.89 0-5.235 2.345-5.235 5.235s2.345 5.235 5.235 5.235 5.235-2.345 5.235-5.235-2.345-5.235-5.235-5.235zm0 8.47c-1.682 0-3.235-1.553-3.235-3.235s1.553-3.235 3.235-3.235 3.235 1.553 3.235 3.235-1.553 3.235-3.235 3.235zm4.6-4.225c-.049-.026-.122-.035-.167-.035-.145 0-.278.047-.402.072-.124.025-.267.068-.407.108-.134.04-.302.076-.454.076s-.32-.036-.454-.076-.283-.083-.407-.108c-.124-.025-.257-.072-.402-.072-.045 0-.118.009-.167.035-.105.046-.189.112-.251.19-.062.077-.103.18-.103.301 0 .121.041.224.103.301.062.078.146.144.251.19.049.026.122.035.167.035.145 0 .278-.047.402-.072.124-.025.267-.068.407-.108.134-.04.302-.076.454-.076s.32.036.454.076c.14.04.283.083.407.108.124.025.257.072.402.072.045 0 .118-.009.167-.035.105-.046.189-.112.251-.19.062-.077.103-.18.103-.301 0-.121-.041-.224-.103-.301-.062-.078-.146-.144-.251-.19z" />
                  </svg>
                </Link>

                {/* GitHub */}
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5 text-gray-600 hover:text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5 text-gray-600 hover:text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.73c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm15.11 12.72h-3.56v-5.94c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.27 1.54-2.27 3.13v6.04H9.09V9h3.41v1.56h.05c.47-.89 1.62-1.83 3.34-1.83 3.57 0 4.23 2.35 4.23 5.41v6.31z" />
                  </svg>
                </Link>

                {/* Twitter */}
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5 text-gray-600 hover:text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.045.762.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.732-.666 1.585-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.785-.023-1.17-.067 2.189 1.405 4.787 2.224 7.544 2.224 9.056 0 14.01-7.496 14.01-13.986 0-.214-.005-.426-.014-.637.962-.695 1.8-1.562 2.457-2.549z" />
                  </svg>
                </Link>
              </div>
              <p className="mt-2 text-gray-600">hello@chhavi.dev</p>
            </div>
          </div>
          <div className="relative h-14 w-14">
            <div
              className="${ closeRotation === 0 ? 'rotate-0' : '-rotate-180' group flex h-full w-full flex-col items-center justify-center rounded-full bg-white transition-transform duration-500 ease-in-out"
              onClick={toggleMenu}
            >
              {/* Four smaller circles */}
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-black transition-transform duration-500 ease-in-out group-hover:rotate-180"></div>
                <div className="h-2 w-2 rounded-full bg-black transition-transform duration-500 ease-in-out group-hover:rotate-180"></div>
              </div>
              <div className="mt-1 flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-black transition-transform duration-500 ease-in-out group-hover:rotate-180"></div>
                <div className="h-2 w-2 rounded-full bg-black transition-transform duration-500 ease-in-out group-hover:rotate-180"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
