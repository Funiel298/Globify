export default function Footer(){
    return(
        <footer className="border-t-2 border-black w-[90%] flex justify-center">
            <ul className="flex flex-row justify-around items-center w-[90%] p-3 text-[1rem] font-medium">
                <a href="">
                    <li>
                        About
                    </li>
                </a>
                <a href="">
                    <li>
                        Countries
                    </li>
                </a>
                <a href="">
                    <li>
                        Languages
                    </li>
                </a>
            </ul>
        </footer>
    )
}