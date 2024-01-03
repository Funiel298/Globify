import Image from 'next/image';
import norwayImage from '../images/oslo-city-norway-uhd-4k-wallpaper.jpg';
import { FaArrowRight } from 'react-icons/fa6'
import Header from '@/components/Header/page';
import Scroll from '@/components/VerticalScroll/page';
import CenterParagraphs from '@/components/CenterParagraphs/page';
import WideParagraphs from '@/components/WideParagrahs/page';
import Footer from '@/components/Footer/page';
import Card from '@/components/Card/page';


export default function Home() {

  let sources = [
    {
        link : 'https://www.youtube.com/embed/bAGhXcYc0o4',
        name : 'Geography Now! NORWAY',
        description : 'Ahhh the land of the ....never ending and / or never rising sun.',
        image: '../images/mainPage/geographynow_norway.jpg'
    },
    {
        link : 'https://www.youtube.com/embed/CxwJrzEdw1U',
        name : 'Norway 4K - Scenic Relaxation Film with Calming Music',
        description : `Norway is one of the most scenic countries in the world. Enjoy this 4K relaxation film across the Norway's most beautiful regions. From the endless Fjords to the stunning Lofoten Islands, Norway's landscapes have so much to offer. `,
        image: '../images/mainPage/geographynow_norway.jpg'
      },
    {
        link : 'https://www.youtube.com/embed/zyZAMR56mXY',
        name : 'Норвегия. Богатая и очень красивая. Большой Выпуск.',
        description : 'Съемка, монтаж и все остальное : ВСЕ САМ.',
        image: '../images/mainPage/geographynow_norway.jpg'
        
    },
    {
        link : 'https://www.youtube.com/embed/c3suauAz0zQ',
        name : 'nordic home office ~ chill lofi beats',
        description : 'Cozy Nordic is an independent little channel, with the aim of creating cozy little moments for everyone to enjoy, whether you need to calm down or concentrate. The music and animations are made by myself, as I personally think that it creates a more whole experience. ',
        image: '../images/mainPage/geographynow_norway.jpg'
    },
]

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


        <Scroll sources={sources} sign={'Play'} />
      </div> 

      <div className='flex justify-center'>

      <div className='flex flex-col justify-center items-center'>
        <WideParagraphs></WideParagraphs>

        <Card></Card>

        

        <CenterParagraphs name={'General Data'}>
          <div className='flex flex-row justify-between w-full '>
            <div>
              <h5>Population: 5mln</h5>  
              <h5>GDP: 580 billions</h5>  
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

        <Footer/>
        </div>
      </div>

      

    </div>
    
  );
}
