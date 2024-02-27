export default function ImageCard({s, sign, position, func}:any){
    return(
        <div key={s.image} className={`border-b-2 pb-5 w-full border-white group cursor-pointer md:h-auto h-full flex ${position === 'col' ? 'flex-col' : 'flex-row'}`} onClick={()=>func()}>
            <div className={`p-0 relative group overflow-hidden ${position === 'col' ? 'w-[28vw]' : 'w-1/2'}`}>
                <img src={s.image} alt={s.sign} className="group-hover:scale-110 duration-300 ease-in-out transition-transform w-full" />
                    {sign && <button className="absolute bottom-0  right-0 p-3 bg-white text-sm font-medium text-[#212427] transition-all duration-300 ease-in-out transform group-hover:bg-[#212427] group-hover:text-white">
                        {sign}
                    </button>}
            </div>




            <div className={`flex flex-col p-5 text-start items-start text-white justify-around  ${position === 'col' ? 'w-full p-10' : 'w-1/2'}`}>
                <h1 className='text-lg font-semibold'>{s?.name?.length > 30 ? s?.name?.substring(0,30)+ '...' : s?.name}</h1>
                <h3 className='text-xs font-normal'>
                    {s?.description?.length > 110 ? s?.description?.substring(0,110)+ '...' : s?.description}
                </h3>
            </div>
        </div>
    )
}