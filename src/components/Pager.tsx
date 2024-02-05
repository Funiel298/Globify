

export default function Pager({id, sources}:any){
    
    
    return(
        <div className="w-[65%] flex flex-col p-10 justify-start items-start  overflow-y-scroll h-screen ">
            <div className="border-b-2 pb-2 border-[#212427] w-full ">
                <h1 className="font-bold text-3xl">{sources[id].name}</h1>
                <h3 className="mt-2 font-light text-[1rem]">{sources[id].description}</h3>
            </div>


            <div className="flex flex-row flex-wrap mt-5 justify-between h-[15vw]">
                <img src={sources[id].flag} alt="city's flag" className="w-1/4 h-full object-cover object-center"  />
                <img src={sources[id].additional_image1} alt="city's flag" className="w-2/5 h-full object-cover"  />
                <img src={sources[id].additional_image2} alt="city's flag" className="w-2/6 h-full object-cover"  />
            </div>


            <h1 className="font-semibold text-xl mt-5">General Data</h1>
            <div className='flex flex-row justify-between w-full my-5'>
                    <div>
                        <h5>Population: {sources[id].population}</h5>  
                        <h5>GDP: {sources[id].gdp}</h5>  
                    </div>
                    <div>
                        <h5>GPD per capita: {sources[id].gdp_per_capita}</h5>  
                        <h5>Area: {sources[id].area}</h5>  
                    </div>
                    <div>
                        <h5>Established: {sources[id].established}</h5>  
                        <h5>Population: 5mln</h5>  
                    </div>
                </div>

            <h1 className="font-semibold text-xl mb-5">Geography</h1>
            <div className="flex flex-row justify-between">

                <h2 className=" pr-5">{sources[id].geography}</h2>

                <iframe 
                    src={sources[id].map} 
                    className="border-0 w-[30vw] h-auto"
                    loading="lazy" >

                </iframe>
                
            </div>

            <h1 className="font-semibold text-xl mt-5 ">History</h1>
            <div className="flex flex-row justify-between">

                <h2 className=" pr-5">{
                    sources[id].history.split('\n').map((paragraph:any) => (
                    <p key={paragraph} className="my-5">{paragraph}</p>
                ))}
                </h2>

                
            </div>


        </div>
    )
}