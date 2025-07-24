import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-[rgba(var(--footer-bg),1)] text-[color:rgba(var(--footer-text))] text-center text-sm sm:text-base border-t border-[rgba(var(--border),0.4)] transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-3">
        <p className="font-medium">&copy; {new Date().getFullYear()} Fatema Haque. All rights reserved.</p>
        <div className="flex justify-center items-center gap-6 text-lg">
          <a
            href="https://github.com/fatemashaque"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[color:rgba(var(--accent))] transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/fatema-haque-cs/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[color:rgba(var(--accent))] transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
