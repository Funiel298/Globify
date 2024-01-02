import Image from 'next/image';
import norwayImage from '../images/oslo-city-norway-uhd-4k-wallpaper.jpg';
import { FaArrowRight } from 'react-icons/fa6'
import Header from '@/components/Header/page';
import Scroll from '@/components/Scroll/page';
import CenterParagraphs from '@/components/CenterParagraphs/page';
import WideParagraphs from '@/components/WideParagrahs/page';


export default function Home() {
  return (
    <div >
      <Header/>
      <div className="relative h-screen overflow-hidden">
        
        <Image
          src={norwayImage}
          alt="Norway"
          layout="fill"
          objectFit="cover"
          className="opacity-90 z-1 object-top"
        />
        
        
        <div className='absolute top-1/3 mt-10 left-1/3 transform p-3 -translate-x-2/3 -translate-y-1/3 text-blue  text-start '>
          <h1 className='text-[12vw] opacity-60 font-bold'>Norway</h1>
          <button className='m-[1.25vw] mt-[-2vw] p-[1vw] text-[1vw] text-white absolute border-white border-solid border-2  hover:bg-white hover:text-black duration-300 flex items-center '>
            <span className='mr-2'>
              Explore
            </span> 
            <FaArrowRight/>
          </button>
        </div>


        <Scroll/>
      </div> 

      <div className='flex justify-center'>

      <div className='flex flex-col justify-center items-center'>
        <WideParagraphs></WideParagraphs>


        <CenterParagraphs name={'Important Note'}>
          <h5>
            It is really important text<br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Random highlights: made short films, worked on self-driving cars as a deep learning researcher, made products for gamers from my bedroom that gathered over 1M users, built 2 ML companies (one acquired by Niantic and the other by Riot Games),
            <br/> founded an online school for kids and streamed 2,000,000+ minutes of content per week + had 100,000+ kids on it, and pivoted it to buildspace -- went through Y-Combinator and recently raised $10M from a16z.
          </h5>  
          
        </CenterParagraphs>

        <CenterParagraphs name={'General Data'}>
          <div className='flex flex-row justify-between w-full '>
            <div>
              <h5>Population: 5mln</h5>  
              <h5>Population: 5mln</h5>  
            </div>
            <div>
              <h5>Population: 5mln</h5>  
              <h5>Population: 5mln</h5>  
            </div>
            <div>
              <h5>Population: 5mln</h5>  
              <h5>Population: 5mln</h5>  
            </div>
          </div>
          
        </CenterParagraphs>
        </div>
      </div>


    </div>
    
  );
}
