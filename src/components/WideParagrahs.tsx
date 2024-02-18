export default function WideParagraphs({info}: any) {
    return (
        <div className="flex flex-row items-center justify-around min-w-full m-5 ">

            <div className="flex flex-col justify-between h-full items-start w-1/2 p-5 pb-7 pt-10">
                <h1 className="font-semibold mb-[1vw] text-5xl">{info.name}</h1>
                <h4 className="text-xl w-full">
                    {info.additional_info[0].description}
                </h4>
            </div>
            <div className="flex flex-row h-full justify-center items-center p-5">
                <img className="w-[25vw] h-[40vw] object-cover p-3" alt="great_image" src={info.additional_info[0].images[0].image}></img> 
                <img className="w-[25vw] h-[40vw] object-cover p-3" alt="great_image" src={info.additional_info[0].images[1].image}></img>
            </div>
        </div>
    )
}
