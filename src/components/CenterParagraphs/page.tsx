export default function CenterParagraphs({name,children} : any){
    return(
        <div className="flex flex-col items-start text-start justify-center w-1/2 font-medium mt-10 mb-10 top-1/2">
            <h3 className="font-semibold mb-4 text-2xl">{name}</h3>
            {children}
        </div>
    )
}