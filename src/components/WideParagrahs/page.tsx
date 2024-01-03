import Image from "next/image"
export default function WideParagraphs(){
    return(
        <div className="flex flex-row items-center justify-around min-w-full  m-5 ">
            
            <div className="flex flex-col justify-between h-full  items-start w-1/2 p-5 pb-7 pt-10">
                <h1 className="font-semibold mb-[1vw] text-5xl">Norway</h1>
                <h4 className="text-xl w-full">
                    Norway - formally the Kingdom of Norway,
                    is a Nordic country in Northern Europe, 
                    situated on the Scandinavian Peninsula. 
                    The remote Arctic island of Jan Mayen and the archipelago of Svalbard also form part of Norway.
                    Bouvet Island, located in the Subantarctic, is a dependency; 
                </h4>
            </div>
            <div className="flex flex-row h-full justify-center items-center p-5">
                    <img className="w-[25vw] h-[40vw] object-cover  p-3" alt="Norway" src={'data:image/jpeg;base64,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'}></img>   
                    <img className="w-[25vw] h-[40vw] object-cover  p-3" alt="Norway" src={'data:image/jpeg;base64,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'}></img>   
            </div>
        </div>
    )
}