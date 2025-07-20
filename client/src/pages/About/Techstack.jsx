import {
  DiGit,
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
} from 'react-icons/di';
import { SiExpo, SiNextdotjs, SiRedis, SiTypescript } from 'react-icons/si';

function Techstack() {
  const techItems = [
    { icon: <DiJavascript1 />, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: <SiTypescript />, name: 'TypeScript', color: 'text-blue-500' },
    { icon: <DiNodejs />, name: 'Node.js', color: 'text-green-500' },
    { icon: <DiReact />, name: 'React', color: 'text-blue-400' },
    { icon: <SiNextdotjs />, name: 'Next.js', color: 'text-gray-800' },
    { icon: <SiExpo />, name: 'Expo', color: 'text-gray-200' },
    { icon: <DiMongodb />, name: 'MongoDB', color: 'text-green-600' },
    { icon: <SiRedis />, name: 'Redis', color: 'text-red-600' },
    { icon: <DiGit />, name: 'Git', color: 'text-orange-500' },
    { icon: <DiPython />, name: 'Python', color: 'text-blue-300' },
    { icon: <DiJava />, name: 'Java', color: 'text-red-500' },
  ];

  return (
    <div className='flex flex-wrap justify-center gap-6 p-8 max-w-6xl mx-auto'>
      {techItems.map((tech, index) => (
        <div
          key={index}
          className='flex flex-col items-center p-4 w-20 h-20 md:w-24 md:h-24 rounded-lg
                    bg-white/10 backdrop-blur-sm border border-white/20
                    hover:scale-110 hover:bg-white/20 transition-all duration-300 group
                    shadow-lg hover:shadow-xl'
        >
          <div className={`${tech.color} text-4xl md:text-5xl group-hover:text-white`}>
            {tech.icon}
          </div>
          <span className='mt-2 text-xs md:text-sm text-white/70 group-hover:text-white transition-colors'>
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
