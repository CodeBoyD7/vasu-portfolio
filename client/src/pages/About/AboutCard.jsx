import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 quote-card-view hover:shadow-xl transition-shadow duration-300'>
      <blockquote className='mb-0'>
        <p className='text-justify leading-relaxed font-medium text-gray-400'>
          Hi Everyone, I am <span className='text-purple-600 font-semibold'>Teja Vasu Yellapu</span>{' '}
          from <span className='text-purple-600 font-semibold'>Andhra Pradesh, India.</span>
          <br />I have completed my{' '}
          <span className='text-purple-600 font-semibold'>
            MCA (Master of Computer Applications)
          </span>{' '}
          in Computer Science.
          <br />I hold a B.Sc in Computer Science from{' '}
          <span className='text-purple-600 font-semibold'>Andhra University</span>.
          <br />
          <br />
          Apart from coding, here are some other activities that I love to do:
        </p>
        <ul className='mt-4 space-y-2'>
          <li className='about-activity flex items-start'>
            <ImPointRight className='mt-1 mr-2 flex-shrink-0 text-purple-500' />
            <span>Working with different Operating Systems and exploring their architectures</span>
          </li>
          <li className='about-activity flex items-start'>
            <ImPointRight className='mt-1 mr-2 flex-shrink-0 text-purple-500' />
            <span>Being socially active and mentoring junior developers</span>
          </li>
          <li className='about-activity flex items-start'>
            <ImPointRight className='mt-1 mr-2 flex-shrink-0 text-purple-500' />
            <span>Learning and experimenting with new technologies</span>
          </li>
        </ul>
        <p className='text-purple-700 mt-6 text-2xl sm:text-3xl font-bold italic'>
          "Strive to build solutions that make a meaningful impact!"
        </p>
        <footer className='text-right mt-4'>
          <span className='text-purple-600 font-semibold'>— Vasu</span>
        </footer>
      </blockquote>
    </div>
  );
}

export default AboutCard;
