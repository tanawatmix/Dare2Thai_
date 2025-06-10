// src/components/Footer.tsx
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="dark:bg-secondary bg-primary mt-auto border-t transition duration-500 dark:border-white">
      <div className="container  px-3 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="md-flex mb-1">
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent">Dare2Thai</h2>
          <p className="text-sm text-pink-400">© 2025 All rights reserved.</p>
          <p className="text-sm text-pink-400">contact us : 088-888-888</p>
        </div>
        <div>
          <a
            href="https://github.com/tanawatmix"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary text-pink-400 transition-colors"
          >
            <FaGithub className="text-xl hover:text-sky-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
