// src/components/Footer.tsx
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-black py-2  fixed bottom-0 rounded-t-lg ">
      <div className="container mx-auto px-3 flex-col md:flex-row justify-between items-center">
        <div className="md-flex mb-5">
          <h2 className="text-lg font-semibold text-center">Dare2Thai</h2>
          <p className="text-sm">© 2025 All rights reserved.</p>
          <p className="text-sm">contact us : 088-888-888</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl hover:text-blue-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-pink-400" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-sky-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
