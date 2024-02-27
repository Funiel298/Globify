export default function WideParagraphs({info}: any) {
    return (
        <div className="flex md:flex-row flex-col items-center justify-around min-w-full m-5 ">

            <div className="flex flex-col justify-between h-full items-start w-full md:w-1/2 md:p-5 px-10 pb-7 pt-10">
                <h1 className="font-semibold mb-[1vw] text-5xl">{info.name}</h1>
                <h4 className="text-xl w-full">
                    {info.additional_info[0].description}
                </h4>
            </div>
            <div className="flex md:flex-row flex-col h-full justify-center items-center md:p-5 w-full">
                <img className="md:w-[25vw] w-full h-[40vw] object-cover p-3" alt="great_image" src={info.additional_info[0].images[0].image}></img> 
                <img className="md:w-[25vw] w-full h-[40vw] object-cover p-3" alt="great_image" src={info.additional_info[0].images[1].image}></img>
            </div>
        </div>
    )
}
