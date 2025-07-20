import { BiLogoVisualStudio } from 'react-icons/bi';
import { FaAws, FaWindows } from 'react-icons/fa';
import { SiApple, SiDocker, SiInsomnia, SiPostman, SiUbuntu } from 'react-icons/si';

function Toolstack() {
  return (
    <div className='flex flex-wrap justify-center gap-4 p-4'>
      {/* Windows */}
      <div className='flex flex-col items-center p-4 hover:scale-110 transition-all duration-300 group'>
        <FaWindows className='text-4xl md:text-5xl text-blue-500 group-hover:text-blue-600' />
        <span className='mt-2 text-sm text-gray-600 group-hover:text-gray-800'>Windows</span>
      </div>

      {/* macOS */}
      <div className='flex flex-col items-center p-4 hover:scale-110 transition-all duration-300 group'>
        <SiApple className='text-4xl md:text-5xl text-gray-700 group-hover:text-gray-900' />
        <span className='mt-2 text-sm text-gray-600 group-hover:text-gray-800'>macOS</span>
      </div>

      {/* Ubuntu */}
      <div className='flex flex-col items-center p-4 hover:scale-110 transition-all duration-300 group'>
        <SiUbuntu className='text-4xl md:text-5xl text-orange-600 group-hover:text-orange-700' />
        <span className='mt-2 text-sm text-gray-600 group-hover:text-gray-800'>Ubuntu</span>
      </div>

      {/* VS Code */}
      <div className='flex flex-col items-center p-4 hover:scale-110 transition-all duration-300 group'>
        <BiLogoVisualStudio className='text-4xl md:text-5xl text-blue-400 group-hover:text-blue-500' />
        <span className='mt-2 text-sm text-gray-600 group-hover:text-gray-800'>VS Code</span>
      </div>

      {/* Postman */}
      <div className='flex flex-col items-center p-4 hover:scale-110 transition-all duration-300 group'>
        <SiPostman className='text-4xl md:text-5xl text-orange-500 group-hover:text-orange-600' />
        <span className='mt-2 text-sm text-gray-600 group-hover:text-gray-800'>Postman</span>
      </div>

      {/* Insomnia */}
      <div className='flex flex-col items-center p-4 hover:scale-110 transition-all duration-300 group'>
        <SiInsomnia className='text-4xl md:text-5xl text-purple-500 group-hover:text-purple-600' />
        <span className='mt-2 text-sm text-gray-600 group-hover:text-gray-800'>Insomnia</span>
      </div>

      {/* Docker */}
      <div className='flex flex-col items-center p-4 hover:scale-110 transition-all duration-300 group'>
        <SiDocker className='text-4xl md:text-5xl text-blue-400 group-hover:text-blue-500' />
        <span className='mt-2 text-sm text-gray-600 group-hover:text-gray-800'>Docker</span>
      </div>

      {/* AWS */}
      <div className='flex flex-col items-center p-4 hover:scale-110 transition-all duration-300 group'>
        <FaAws className='text-4xl md:text-5xl text-yellow-500 group-hover:text-yellow-600' />
        <span className='mt-2 text-sm text-gray-600 group-hover:text-gray-800'>AWS</span>
      </div>
    </div>
  );
}

export default Toolstack;
