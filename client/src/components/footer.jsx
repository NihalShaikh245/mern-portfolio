import { EnvelopeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-6 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <CodeBracketIcon className="h-6 w-6 text-cyan-400" />
            <span className="text-lg font-medium">Nihal_Dev</span>
          </div>
          <div className="flex space-x-4">
            <a 
              href="mailto:contact@example.com" 
              className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <EnvelopeIcon className="h-5 w-5 mr-1" />
              Contact
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Nihal Shaikh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}