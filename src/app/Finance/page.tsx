import Image from 'next/image'
import darkNorway from '../../images/dark_norway.jpg'


export default function Finance(){
    return(
        <main className="flex flex-row w-screen overflow-hidden">
            
            <div className="w-1/2 p-5 flex flex-col justify-start items-start overflow-x-hidden overflow-y-scroll">
                
                <div className='flex flex-row'>
                    <h1 className='font-semibold text-xl'>Country from you are:</h1>
                    <input type="checkbox" name="" id="" />
                </div>


                <div className='flex flex-row items-center'>
                    <h1 className='font-semibold text-xl'>Your trip from </h1>
                    <input type="date" name="start" className='mx-2'/>
                    <h1 className='font-semibold text-xl'>to </h1>
                    <input type="date" name="end" className='mx-2' />
                </div>



                


            </div>




            <Image src={darkNorway} alt="Cool Image" className="h-screen w-1/2 object-cover" />
        </main>
    )
}