// src/components/Footer.tsx
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-black py-1 border-t bottom-0 w-45  ">
      <div className="container mx-auto px-3 flex-col md:flex-row justify-between items-center">
        <div className="md-flex mb-1">
          <h2 className="text-20 font-extrabold">Dare2Thai</h2>
          <p className="text-sm">© 2025 All rights reserved.</p>
          <p className="text-sm">contact us : 088-888-888</p>
        </div>
        <div>
          <a
            href="https://github.com/tanawatmix"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-sky-400 transition-colors"
          >
            <FaGithub className="text-xl hover:text-sky-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
