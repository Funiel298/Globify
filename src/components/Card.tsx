import { FaArrowRight } from 'react-icons/fa6'

export default function Card(){

    let arr = [
        {
            name: 'History',
            desc: 'Learn more what happened wit your favourite country Norway!',
            link: '/History'
        },
        {
            name: 'Travel',
            desc: 'See the best places to see as a traveler',
            link: '/Travel'
        },
        {
            name: 'Politics and government',
            desc: 'Learn and understand a direction of the country of development',
            link: '/Government'
        },
        {
            name: 'Culture',
            desc: 'Learn how life is going in the country!',
            link: '/Culture'
        },
    ]

    return(
        <div className='flex flex-wrap w-2/3  flex-row justify-center'>
            {arr.map((source)=>(
                <a href={source.link} className='w-1/2  group p-5'>
                    <div className="group-hover:border-y-2 ml-[5vw] duration-300 h-full   group-hover:border-black border-white border-y-2  p-5 text-start ">
                        <span className="flex flex-row items-center mb-2">
                            <h2 className="font-medium text-2xl mr-1">{source.name}</h2>
                            <FaArrowRight className="group-hover:ml-5 duration-300"/>
                        </span>
                        <p className="font-light text-xs w-2/3">{source.desc}</p>
                    </div>
                </a>
            ))}
        </div>
    )
}