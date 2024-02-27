'use client'

export default function Header(){

    const links = [
        'History',
        'Culture',
        'Travel',
        'Government',
    ]

    return(
        <div className="absolute z-10 md:left-[50%] flex flex-row justify-between md:w-1/2 w-full flex-wrap text-white text-start p-10 text-4xl ">
            {links.map((link)=>(
                <a className="text-lg" href={`/${link}`}>{link}</a>
            ))}
        </div>
    )
}