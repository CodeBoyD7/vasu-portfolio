import { Github, Instagram, Linkedin } from 'lucide-react';
import { SiFiverr } from 'react-icons/si';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className='bg-[#381658] py-8 w-full'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          {/* Designed By Section */}
          <div className='text-center md:text-left w-full md:w-auto'>
            <h3 className='text-base sm:text-lg font-medium text-white/90 hover:text-white transition-colors'>
              Designed and Developed by <span className='font-semibold'>Teja Vasu</span>
            </h3>
          </div>

          {/* Copyright Section */}
          <div className='text-center md:text-left w-full md:w-auto'>
            <h3 className='text-base sm:text-lg font-medium text-white/90 hover:text-white transition-colors'>
              &copy; {year} <span className='font-semibold'>D7</span>
            </h3>
          </div>

          {/* Social Media Links */}
          <div className='flex justify-center md:justify-end space-x-4 sm:space-x-6 w-full md:w-auto'>
            <a
              href='https://github.com/CodeBoyD7/vasu-portfolio/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white/80 hover:text-purple-400 transition-colors duration-300'
              aria-label='GitHub'
            >
              <Github size={24} className='w-6 h-6 sm:w-7 sm:h-7' />
            </a>
            <a
              href='https://www.linkedin.com/in/teja-vasu-yellapu-a198a4233/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white/80 hover:text-blue-400 transition-colors duration-300'
              aria-label='LinkedIn'
            >
              <Linkedin size={24} className='w-6 h-6 sm:w-7 sm:h-7' />
            </a>
            <a
              href='https://www.instagram.com/_vasu_d7/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white/80 hover:text-pink-500 transition-colors duration-300'
              aria-label='Instagram'
            >
              <Instagram size={24} className='w-6 h-6 sm:w-7 sm:h-7' />
            </a>
            <a
              href='https://www.fiverr.com/tejavasu_deva/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white/80 hover:text-green-400 transition-colors duration-300'
              aria-label='Fiverr'
            >
              <SiFiverr size={28} className='w-6 h-6 sm:w-7 sm:h-7' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
