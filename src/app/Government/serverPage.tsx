
import CenterParagraphs from "@/components/CenterParagraphs"
import { useState } from "react";

export default function Government(){


    const links = [
        [
            {
                name: 'Parliamentary Democracy',
                link: 'https://en.wikipedia.org/wiki/Parliamentary_system',
            },
            {
                name: 'Representative Democratic',
                link: 'https://en.wikipedia.org/wiki/Representative_democracy',
            },
            {
                name: 'Constitutional Monarchy',
                link: 'https://en.wikipedia.org/wiki/Constitutional_monarchy',
            },
        ],
        [
            {
                name: 'Members of the Government',
                link: 'https://www.regjeringen.no/en/the-government/stores-government/members-of-the-government-2/id543170/',
            },
            {
                name: 'Norwegian ministries',
                link: 'https://en.wikipedia.org/wiki/List_of_Norwegian_ministries',
            },
        ],
        [
            {
                name: 'Political parties in Norway',
                link: 'https://en.wikipedia.org/wiki/List_of_political_parties_in_Norway',
            },
            {
                name: 'Elections in Norway',
                link: 'https://en.wikipedia.org/wiki/Elections_in_Norway',
            },
        ]

    ]

    const parties = [
        {
            image_link: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Norwegian_Labour_Party_Logo.svg/270px-Norwegian_Labour_Party_Logo.svg.png',
            color: '#e01220',
            name: 'Labour Party',
            info: "A social-democratic political party in Norway. It is positioned on the centre-left of the political spectrum, and is led by Jonas Gahr Støre."
        },
        {
            image_link: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Logo_of_the_Conservative_Party_of_Norway.svg/300px-Logo_of_the_Conservative_Party_of_Norway.svg.png',
            color: '#0065f1',
            name: 'Conservative Party',
            info: "A liberal-conservative political party in Norway. It is the major party of the Norwegian centre-right, and was the leading party in government as part of the Solberg cabinet from 2013 to 2021."
        },
        {
            image_link: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Logo_of_the_Centre_Party_%28Norway%29.svg/270px-Logo_of_the_Centre_Party_%28Norway%29.svg.png',
            color: '#008542',
            name: 'Centre Party',
            info: "Ideologically, the Centre Party is positioned in the centre on the political spectrum, it advocates for economic nationalist and protectionist policy to protect Norwegian farmers with toll tariffs, and it supports decentralisation."
        },
        {
            image_link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Fremskrittspartiet_logo.svg/375px-Fremskrittspartiet_logo.svg.png',
            color: '#024c93',
            name: 'Progress Party',
            info: "Commonly abbreviated as FrP, is a right-wing political party in Norway. The FrP has traditionally self-identified as classical-liberal and as a libertarian party but is generally positioned to the right of the Conservative Party, and is considered the most right-wing party to be represented in parliament."
        },
        {
            image_link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sosialistisk_Venstreparti_logo.svg/270px-Sosialistisk_Venstreparti_logo.svg.png',
            color: '#bc2149',
            name: 'Socialist Left Party',
            info: "A democratic socialist political party in Norway. Positioned on the left-wing of the political spectrum, it is opposed to European Union and the European Economic Area membership."
        },
        {
            image_link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Venstre_logo_2023.svg/270px-Venstre_logo_2023.svg.png',
            color: '#006666',
            name: 'Liberal Party',
            info: "The oldest political party in Norway. It is positioned in the centre on the political spectrum, and it is a liberal party which has over the time enacted reforms such as parliamentarism, freedom of religion, universal suffrage, and state schooling."
        },
        {
            image_link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/R%C3%B8dt_logo_%28bokm%C3%A5l%29.svg/150px-R%C3%B8dt_logo_%28bokm%C3%A5l%29.svg.png',
            color: '#e73445',
            name: 'Red Party',
            info: "A Marxist party, it has been described as left-wing and far-left on the political spectrum. In its political programme, the Red Party sets the creation of a classless society to be its ultimate goal, which the party says is `what Karl Marx called communism`."
        },
    ] 

    const [showModal, setShowModal] = useState(false);
    const [selectedParty, setSelectedParty] = useState<null | typeof parties[number]>(null);

    

    const handlePartyHover = (party: typeof parties[number]) => {
        setSelectedParty(party);
        setShowModal(true);
      };
      
      const handleModalClose = () => {
        setSelectedParty(null);
        setShowModal(false);
      };
      

    return(
        <div >
            <section className="flex justify-center flex-col items-center h-screen ">
                <a href="https://www.regjeringen.no/en/id4/"><img className="w-[15vw] mt-5 h-auto rounded-xl duration-300 hover:scale-105" alt="Norway Governemnt Icon" src={'https://www.africa-newsroom.com/files/large/be9bb20d039eef4'} /></a>
                <h1 className="font-semibold text-2xl my-3">Political Directions</h1>
                <div className="flex flex-row w-1/2 justify-between">
                    {links[0].map((di)=>(
                        <a className="hover:text-blue-800 duration-300" href={di.link}><button>{di.name}</button></a>
                    ))}    
                </div> 

                <CenterParagraphs>
                    <h1>
                        Executive power is exercised by the Council of State, the cabinet, led by the prime minister of Norway. 
                        Legislative power is vested in both the government and the legislature, the Storting, elected within a multi-party system. The judiciary is independent of the executive branch and the legislature.
                        <br /><br />
                        The Economist Intelligence Unit rated Norway a "full democracy" in 2022. According to the V-Dem Democracy indices Norway was 2023 the second most electoral democratic country in the world. Reporters Without Borders ranked Norway 1st in the world in the 2019 Press Freedom Index. 
                        Freedom House's 2020 Freedom in the World report classified Norway as "free", scoring maximum points in the categories of "political rights" and "civil liberties".
                    </h1>
                </CenterParagraphs>

            </section>

            <section className="flex justify-center flex-col items-center h-screen">
                <div className="flex flex-row justify-around items-center w-1/2">
                    <a href="https://en.wikipedia.org/wiki/Jonas_Gahr_St%C3%B8re">
                        <img className="w-[15vw] mt-5 h-auto rounded-xl duration-300 hover:scale-105" alt="Norway Governemnt Icon" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Nordic_prime_ministers%E2%80%99_meeting_in_Helsinki_1.11.2022_-_52469398971_%28cropped%29.jpg/330px-Nordic_prime_ministers%E2%80%99_meeting_in_Helsinki_1.11.2022_-_52469398971_%28cropped%29.jpg'} />
                        <span className="text-sm">Jonas Gahr Støre <br /> Prime Minister of Norway</span>
                    </a>
                    <span className="text-5xl">🤝🏻</span>
                    <a className="oveflow-hidden" href="https://en.wikipedia.org/wiki/Harald_V">
                        <img className="w-[15vw] mt-5 h-auto transform rounded-xl duration-300 hover:scale-105 " alt="Norway Governemnt Icon" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/King_Harald_V_2021.jpg/330px-King_Harald_V_2021.jpg'} />
                        <span className="text-sm">Harald V <br /> King of Norway</span>
                    </a>
                </div>
                <h1 className="font-semibold text-2xl my-3">Executive branch</h1>
                <div className="flex flex-row w-1/2 justify-between">
                    {links[1].map((gov)=>(
                        <a className="hover:text-blue-800 duration-300" href={gov.link}><button>{gov.name}</button></a>
                    ))}    
                </div> 

                <CenterParagraphs>
                    <h1>
                        Norway is a constitutional monarchy, where the king has a mainly symbolic power. 
                        The royal house is a branch of the princely family of Schleswig-Holstein-Sonderburg-Glücksburg, and the House of Saxe-Coburg and Gotha in Germany. 
                        The functions of the king, Harald V, are mainly ceremonial, but he has influence as the symbol of national unity. 
                        <br /><br />
                        Although the constitution of 1814 grants important executive powers to the king, these are always exercised by the 
                        Council of State in the name of the king (King's Council, or cabinet). The king is also High Protector of the Church of 
                        Norway (the state church), Grand Master of the Royal Norwegian Order of St. Olav, and symbolically Supreme Commander of the Norwegian armed forces.
                    </h1>
                </CenterParagraphs>

            </section>
            

            <section className="flex justify-center flex-col items-center h-screen">
        <h1 className="font-semibold text-2xl my-3">Political parties and elections</h1>
        <div className="flex flex-row w-1/2 justify-between">
          {links[2].map((gov) => (
            <a className="hover:text-blue-800 duration-300" href={gov.link} key={gov.name}>
              <button>{gov.name}</button>
            </a>
          ))}
        </div>

        <div className="flex flex-row w-full flex-wrap justify-center items-center">
          {parties.map((so) => (
            <div className="flex flex-col m-4" key={so.name}>
              <div
                className="party-container"
                onMouseEnter={() => handlePartyHover(so)}
                onMouseLeave={handleModalClose}
              >
                <img src={so.image_link} alt="" className="w-1/3 object-cover" />
                <h1 className={`text-[${so.color}]`}>{so.name}</h1>
              </div>
              {showModal && selectedParty === so && (
                <div className="modal">
                  <p>{so.info}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

            
        </div>
    )
}