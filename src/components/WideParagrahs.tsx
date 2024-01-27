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
                    <img className="w-[25vw] h-[40vw] object-cover  p-3" alt="Norway" src={'https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_Norway.jpg?h=89acf671&itok=X9yMpO-u'}></img>   
                    <img className="w-[25vw] h-[40vw] object-cover  p-3" alt="Norway" src={'https://d31ezp3r8jwmks.cloudfront.net/jfeq9iyvrhtl0uqxjtjb2qekg04t'}></img>   
            </div>
        </div>
    )
}