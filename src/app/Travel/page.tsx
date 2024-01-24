'use client'
import VerticalScroll from "@/components/VerticalScroll"
import { useState } from "react"
import Pager from "@/components/Pager"

export default function Travel(){

    let cities = [
        {
          id: 1,
          name: 'Oslo',
          image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT40RosIaOSm9X8MXRiny8U_r7CLMPin7obnxqkeGiGk_jOSsxbXgZqnpyANv6TlA7KwgsfiAqJ__zT0yrnABCDBoDb3-9yBufE1kShpw',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Oslo.svg/1280px-Flag_of_Oslo.svg.png',
          additional_image1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/%D0%9D%D0%BE%D1%87%D0%BD%D0%BE%D0%B9_%D0%9E%D1%81%D0%BB%D0%BE.jpg/1280px-%D0%9D%D0%BE%D1%87%D0%BD%D0%BE%D0%B9_%D0%9E%D1%81%D0%BB%D0%BE.jpg',
          additional_image2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Oslo_Sentralstasjon_18jun2005.jpg/1280px-Oslo_Sentralstasjon_18jun2005.jpg',
          geography: 'Located in southern Norway, at the northern end of the Oslofjord.  Although the city`s population is small compared to most European capitals, it occupies an unusually large land area, of which two-thirds are protected areas of forests, hills and lakes. Its boundaries encompass many parks and open areas, giving it an airy and green appearance.',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128083.6432232609!2d10.785116499999999!3d59.89385494999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2z0J7RgdC70L4sINCd0L7RgNCy0LXQs9C40Y8!5e0!3m2!1sru!2skz!4v1704366320509!5m2!1sru!2skz',
          description: 'The capital and largest city of Norway, known for its rich history and modern architecture.',
          howRich: 'Considered one of the wealthiest cities in the world.',
          population: 1041377,
          gdp: 159.8,
          gdp_per_capita: 87.011,
          area: "130 km2 (50 sq mi)",
          established: "1048",
          history: `Founded around 1048, Oslo has a long history as a trading hub and became the capital of Norway in 1814.In the area known as Kvadraturen, some of the buildings dating from the 17th century have been preserved. At the beginning of the 19th century, the city was the size of a small town, but with the mid-19th century economic surge, Oslos population began to grow rapidly and people migrated to the capital from all over Norway in search of employment.
                    In the period from 1850 to 1900, the population increased from a mere 30 000 to 220 000 inhabitants. Since the separation from Sweden in 1905, national awareness increased, and this sentiment lead to a Parliamentary Decree renaming the city Oslo in 1925. In 1948, the two municipalities of Oslo and Aker merged, increasing the area of Oslo to 454 km2 and the population by approximately 135 000 inhabitants. In the 1950s, in order to accommodate the increasing population, the suburbs were developed through large-scale building projects. 
                    At the same time the public transport system was expanded, facilitating the transfer from the suburbs to the city centre. One of the most recently developed areas of the city is Aker Brygge. The Fjord City is the name of the project where the Oslo City Council will reclaim the land next to the sea and develop it in such a way that it will open the fjord to the city. A large area of land which is used today for shipping and cargo will be developed for other purposes, bringing the fjord closer to the city and opening it up to the benefit of Oslo's inhabitants and visitors. 
                    The project was started in 2003, and the first part of the project, including the new Opera House, is expected to be completed in 2008.`,
          travelExpense: 'Average travel expenses for a day: $150 - $200 USD',
          placesToSee: ['Vigeland Park', 'The Royal Palace', 'Holmenkollen Ski Museum', 'The Viking Ship Museum']
        },
        {
          id: 2,
          name: 'Bergen',
          image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRzmvvVa9OXyvCO_kxhod1NWNf8D4S9a1y6yz1SJNBHv35ynBWolOD9qiKBa1s9_IjZESCFqodWFHhktQGZONJQyNxtdhjaLq1PCmgZEg',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Bergen%2C_Norway.svg/1280px-Flag_of_Bergen%2C_Norway.svg.png',
          additional_image1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Bergen_panorama_at_night_-_panoramio_%281%29.jpg/1280px-Bergen_panorama_at_night_-_panoramio_%281%29.jpg',
          additional_image2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Fjordsteam_2018_%28141836%29.jpg/1280px-Fjordsteam_2018_%28141836%29.jpg',
          geography: `Bergen occupies most of the peninsula of Bergenshalvøyen in the district of Midthordland in mid-western Hordaland. The municipality covers an area of 465 square kilometres (180 square miles). Most of the urban area is on or close to a fjord or bay, although the urban area has several mountains. The city centre is surrounded by the Seven Mountains, although there is disagreement as to which of the nine mountains constitute these.`,
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252524.27288525522!2d5.42917055!3d60.365185499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46390d4966767d77%3A0x9e42a03eb4de0a08!2z0JHQtdGA0LPQtdC9LCDQndC-0YDQstC10LPQuNGP!5e0!3m2!1sru!2skz!4v1704381510275!5m2!1sru!2skz',
          description: 'A charming city known for its colorful houses, historic sites, and outdoor activities.',
          howRich: 'Economically strong, with a focus on trade and tourism.',
          population: 283929,
          gdp: 28.4,
          gdp_per_capita: 43.694,
          area: "464.71 km2 (179.43 sq mi)",
          established: "before 1070",
          history: `The city of Bergen was traditionally thought to have been founded by king Olav Kyrre, son of Harald Hardråde in 1070 AD, four years after the Viking Age in England ended with the Battle of Stamford Bridge. 
                    Modern research has, however, discovered that a trading settlement had already been established in the 1020s or 1030s.
                    Bergen gradually assumed the function of capital of Norway in the early 13th century, as the first city where a rudimentary central administration was established. The city's cathedral was the site of the first royal coronation in Norway in the 1150s, and continued to host royal coronations throughout the 13th century. 
                    Bergenhus fortress dates from the 1240s and guards the entrance to the harbour in Bergen. The functions of the capital city were lost to Oslo during the reign of King Haakon V (1299–1319).`,
          travelExpense: 'Average travel expenses for a day: $120 - $160 USD',
          placesToSee: ['Bryggen Wharf', 'Fløyen Mountain', 'Fish Market', 'Edvard Grieg\'s House']
        },
        {
          id: 3,
          name: 'Tromsø',
          image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQayczFnYLHxE2ZVSKF28KOT8JM7FpQ-KQqTyBncIVpZ5km2XaM-_wjB2fkROKFjZEwpXpbGhsHumTFtaR7Z_9CkSo9L5giwbk6NoIvEw',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Troms%C3%B8_flag.svg/1280px-Troms%C3%B8_flag.svg.png',
          additional_image1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Troms%C3%B8_sentrum_%285835702754%29.jpg/1280px-Troms%C3%B8_sentrum_%285835702754%29.jpg',
          additional_image2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Norway_Counties_Troms_Position.svg/800px-Norway_Counties_Troms_Position.svg.png',
          geography: 'The city centre is located on the east side of the Tromsøya island — over 300 kilometres (190 mi) north of the Arctic Circle at 69°40′33″N 18°55′10″E. Suburban areas include Kroken, Tromsdalen (on the mainland, east of Tromsøya), the rest of the Tromsøya island, and the eastern part of the large Kvaløya, west of the Tromsøya island. The Tromsø Bridge and Tromsøysund Tunnel both cross the Tromsøysundet strait connecting the mainland with Tromsøya by road. On the western side of the city, the Sandnessund Bridge connects Tromsøya island with Kvaløya island.',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88735.01750179492!2d18.82463204700794!3d69.66517112056387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c4526c3b71fd%3A0x23dca858e6ebed3!2z0KLRgNC-0LzRgdGRLCDQndC-0YDQstC10LPQuNGP!5e0!3m2!1sru!2skz!4v1704381576149!5m2!1sru!2skz',
          description: 'A lively city known for its stunning natural beauty, the Northern Lights, and outdoor adventures.',
          howRich: 'Growing economy, with a focus on tourism, research, and education.',
          population: 77668,
          gdp: 7.6,
          gdp_per_capita: '47,498',
          area: "21.25 km2 (8.20 sq mi)",
          established: "1 January 1838",
          history: `The area's rich Norse and Sámi heritage is well documented. The Norse chieftain Ohthere, who lived during the 890s, is assumed to have inhabited the southernmost reaches of today's Tromsø municipality. 
                    He described himself as living "furthest to the North of all Norwegians" with areas north of this being populated by Sámi. An Icelandic source (Rimbegla) from the 12th century also describes the fjord Malangen in the south of today's Tromsø municipality as a border between Norse and Sámi coastal settlements during that part of the Middle Ages.
                    Tromsø was not just a Norwegian outpost in an area mainly populated by the Sámi, but also a frontier city towards Russia; the Novgorod state had the right to tax the Sámi along the coast to Lyngstuva and inland to the Skibotn River or possibly the Målselv River, whereas Norway was allowed to tax areas east to - and including - the Kola Peninsula.`,
          travelExpense: 'Average travel expenses for a day: $130 - $170 USD',
          placesToSee: ['Arctic Cathedral', 'Polar Museum', 'Tromsø Bridge', 'Fjellheisen Cable Car']
        },
        {
          id: 4,
          name: 'Trondhjem',
          image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR6O8xdNvy3vFBg3BP05khFURDhYniuypAhrwJPx0wo6Q4fpyAQr2bq62LUO40a9TP14266iZEYVDhMPB-f6eJcFSF1KKQfe5ezANNREA',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Flag_of_Trondheim.svg/1280px-Flag_of_Trondheim.svg.png',
          additional_image1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/2010-08-04_-_Trondheim_-_Nidarosdom_2_-_panoramio_-_Edgar_El.jpg/1280px-2010-08-04_-_Trondheim_-_Nidarosdom_2_-_panoramio_-_Edgar_El.jpg',
          additional_image2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lykkens_Portal%2C_Gamble_Bybro%2C_Trondheim%2C_West_view_20150605_1.jpg/1280px-Lykkens_Portal%2C_Gamble_Bybro%2C_Trondheim%2C_West_view_20150605_1.jpg',
          geography: 'Trondheim is situated where the River Nidelva meets Trondheim Fjord with an excellent harbour and sheltered condition. In the Middle Ages the river was deep enough to be navigable by most boats. However, in the mid-17th century, an avalanche of mud and stones made it less navigable, and partly ruined the harbour. The municipality`s highest elevation is the Storheia hill, 565 metres (1,854 ft) above sea level. At the summer solstice, the sun rises at 03:00 and sets at 23:40, but stays just below the horizon.',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57099.59869981791!2d10.315432936502829!3d63.433961998933285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d319747037e53%3A0xbf7c8288f3cf3d4!2z0KLRgNC-0L3RhdC10LnQvCwg0J3QvtGA0LLQtdCz0LjRjw!5e0!3m2!1sru!2skz!4v1704381640323!5m2!1sru!2skz',
          description: 'A historic city with a mix of medieval and modern architecture, known for its cultural scene.',
          howRich: 'Economically strong, with a focus on technology, education, and research.',
          population: 205163,
          gdp: 23.4,
          gdp_per_capita: '87,011',
          area: "321.81 km2 (124.25 sq mi)",
          established: "997",
          history: `Trondheim was named Kaupangen (English: market place or trading place) by Viking King Olav Tryggvason in 997 CE. Shortly after that, it came to be called Nidaros. Initially, it was frequently used as a military retainer (Old Norse: "hird"-man) of King Olav I. 
                    It was also frequently used as the king's seat and was Norway's capital until 1217. People have lived in the region for thousands of years, as evidenced by the rock carvings in central Norway, the Nøstvet and Lihult cultures, and the Corded Ware culture. In ancient times, the kings of Norway were hailed in Trondheim at Øretinget, the place for the assembly of all free men by the mouth of the River Nidelva.
                    During the Second World War, Trondheim was occupied by Nazi Germany from 9 April 1940, the first day of the invasion of Norway, until the end of the war in Europe, 8 May 1945.
                    This new metropolis was to be accompanied by a massively expanded version of the already existing naval base, which was intended to become the future primary stronghold of the German Kriegsmarine. A start was made on this enormous construction project, but it was far from completed when the war ended, and today, there are few physical remains of it. `,
          travelExpense: 'Average travel expenses for a day: $110 - $150 USD',
          placesToSee: ['Nidaros Cathedral', 'Ringve Museum', 'Old Town Bridge', 'Bakklandet']
        },
        {
          id: 5,
          name: 'Stavanger',
          image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSEBt6rz8I88qv2exljBu8Y6pDp2-pctCD1XFUY86vJlEf-EC6m5p-fFdGTNFT1zFvqBuHhx3pn85CfdQ2TcxcXzY3bGcTtIVRSpa-FxQ',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Stavanger.gif',
          additional_image1: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSEBt6rz8I88qv2exljBu8Y6pDp2-pctCD1XFUY86vJlEf-EC6m5p-fFdGTNFT1zFvqBuHhx3pn85CfdQ2TcxcXzY3bGcTtIVRSpa-FxQ',
          additional_image2: 'https://lh5.googleusercontent.com/p/AF1QipMZdL1iXyMwB7uvDsixPttfBi2amdyLgHG1zOBR=w675-h390-n-k-no',
          geography: 'Situated on the west coast of Norway, surrounded by mountains and fjords. The city has developed on both sides of a hollow that runs right through the terrain, with steep slopes up from the bottom. An extension of Boknafjorden and Byfjorden intersects the harbour into the hollow from the northwest, while Hillevåg lake intrudes from Gandsfjorden in the southeast. Breiavatnet is located between the two fjord arms.',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d131710.63119835252!2d5.515532497968361!3d58.948548612211376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a3549dd29f795%3A0xad7aeb21b80a9259!2z0KHRgtCw0LLQsNC90LPQtdGALCDQndC-0YDQstC10LPQuNGP!5e0!3m2!1sru!2skz!4v1704381679889!5m2!1sru!2skz',
          description: 'An energetic city known for its oil industry, cultural events, and outdoor activities.',
          howRich: 'Prosperous due to the oil industry, making it one of the wealthiest cities in Norway.',
          population: 143574,
          gdp: 20.8,
          gdp_per_capita: '51,109',
          area: "71.35 km2 (27.55 sq mi)",
          established: "1125",
          history: `The first traces of settlement in the Stavanger region come from the days when the ice retreated after the last ice age c. 10,000 years ago. 
                    A number of historians have argued convincingly that North-Jæren was an economic and military center as far back as the 9th and 10th centuries with the consolidation of the nation at the Battle of Hafrsfjord around 872. Stavanger grew into a center of church administration and an important south-west coast market town around 1100–1300.
                    The city's history is a continuous alternation between economic booms and recessions.[26] For long periods of time its most important industries have been shipping, shipbuilding, the fish canning industry and associated subcontractors.
                    In 1969, a new boom started as oil was first discovered in the North Sea.[27] After much discussion, Stavanger was chosen to be the on-shore center for the oil industry on the Norwegian sector of the North Sea, and a period of hectic growth followed.`,
          travelExpense: 'Average travel expenses for a day: $120 - $160 USD',
          placesToSee: ['Stavanger Cathedral', 'Petroleum Museum', 'Old Stavanger', 'Pulpit Rock']
        },
        {
          id: 6,
          name: 'Ålesund',
          image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSvYrR6_BqA6Q23F0pIE9Rc3gui_zT94AWzX-jfX5oGBuLpXk-gzD3SZfeO86e2k7fEWHo9LNcrHCJVm_aCU18Yoa48kBQLRW2q42r0YA',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/%C3%85lesund_komm.svg/800px-%C3%85lesund_komm.svg.png',
          additional_image1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Vista_de_%C3%85lesund_desde_Aksla%2C_Noruega%2C_2019-09-01%2C_DD_16.jpg/1920px-Vista_de_%C3%85lesund_desde_Aksla%2C_Noruega%2C_2019-09-01%2C_DD_16.jpg',
          additional_image2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Alesund_harbour.jpg/800px-Alesund_harbour.jpg',
          geography: 'Situated 236 kilometres (147 mi) north northeast of the city of Bergen, Ålesund is adjacent to the Hjørund and Geiranger fjords, the latter being on UNESCO`s list of World Heritage Sites. ',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118034.3723462652!2d5.9296543567421915!3d62.46771300671922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4616da471047fb4b%3A0xe82562ee3bc08fea!2z0J7Qu9C10YHRg9C90L0sINCd0L7RgNCy0LXQs9C40Y8!5e0!3m2!1sru!2skz!4v1704381708701!5m2!1sru!2skz',
          description: 'A picturesque city known for its art nouveau architecture and maritime heritage.',
          howRich: 'Economically stable, with a focus on fisheries, shipping, and tourism.',
          population: 47412,
          gdp: 5.1,
          gdp_per_capita: '47,106',
          area: "28.22 km2 (10.90 sq mi)",
          established: "1824",
          history: `Legend has it that Gangerolf (outside of Norway better known as Rollo), the 10th-century founder of the dynasty of the dukes of Normandy, hailed from the community of Giske, north-west of the present-day town of Ålesund. 
                    At least three statues of Rolle exist: in the town park in Ålesund, in the city of Rouen, France, and in Fargo, North Dakota, United States. The old prestegjeld of Borgund included all of what is now Ålesund. 
                    In the night of 23 January 1904, the town was the scene of the Ålesund Fire, one of the most terrible of the many conflagrations to which Norwegian towns, once built largely of wood, have been subjected. 
                    Practically the entire town was destroyed during the night, a gale aiding the flames, and the population had to leave the town in the middle of the night with only a few minutes' notice. Only one person died in the fire, the 76-year-old Ane Heen, but more than 10,000 people were left without shelter.`,
          travelExpense: 'Average travel expenses for a day: $110 - $150 USD',
          placesToSee: ['Ålesund Aquarium', 'Aksla Viewpoint', 'Jugendstilsenteret', 'Atlantic Sea Park']
        },
        {
          id: 7,
          name: 'Flåm',
          image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRrKqe50DdHejb3tLXL7eTHmwqViCHF4Irzg2WTXK56r3prG5sK7ydOMhdiCNhnwGJhlLMFU0zbDc8lQYrxxTtxkF-HaBPz47wVmFPKHg',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Aurlandsfjorden_fr%C3%A5_Sn%C3%B8vegen.jpg/1280px-Aurlandsfjorden_fr%C3%A5_Sn%C3%B8vegen.jpg',
          additional_image1: 'https://res.cloudinary.com/gofjords-com/images/c_scale,w_448,h_280,dpr_2/f_webp,q_auto:eco/v1607338606/Blog%20Content/Bergen/Get%20the%20most%20out%20of%20Flam%20in%20a%20short%20time/Stegastein-viewpoint-Aurlandsfjord-Flam-1/Stegastein-viewpoint-Aurlandsfjord-Flam-1.jpg?_i=AA',
          additional_image2: 'https://www.10wallpaper.com/wallpaper/1920x1440/1604/Flam_Sogn_og_Fjordane_Norway-National_Geographic_Photo_Wallpaper_1920x1440.jpg',
          geography: 'Flåm is a village in the Flåmsdalen valley which is located at the inner end of the Aurlandsfjorden, a branch of Sognefjorden. The village is located in Aurland Municipality in Vestland county, Norway. In 2014 its inhabitants numbered 350',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15543.357278402238!2d7.092246992952245!3d60.85841337498249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463e13cfcfc357c3%3A0x33286ff6aad510c5!2zNTc0MyDQk9C-0YDQvtC0INCk0LvQvtC8LCDQndC-0YDQstC10LPQuNGP!5e0!3m2!1sru!2skz!4v1704381737718!5m2!1sru!2skz',
          description: 'A charming village surrounded by mountains and fjords, known for its scenic railway.',
          howRich: 'Economically dependent on tourism and agriculture.',
          population: 350,
          gdp: 0.05,
          gdp_per_capita: '38,750',
          area: "13 km2 (5 sq mi)",
          established: "1670",
          history: `In 1670 Flåm Church was built, replacing an older stave church.
                    In 1908, the Norwegian Parliament approved the construction of the Flåm Line railway, though the funds to construct the railway were not allocated until 1923. In 1942, regular operation of (steam-powered) trains started on the Flåm Line.
                    "In the 1960s, cruise ships stayed on the fjord" without reaching the port], according to Dagens Næringsliv.
                    In 2000, the "new pier" was referred to in a government document. ("The pier was built at the entrance to the new millennium", according to Dagens Næringsliv.)`,
          travelExpense: 'Average travel expenses for a day: $100 - $130 USD',
          placesToSee: ['Flåm Railway', 'Flåm Church', 'Stegastein Viewpoint', 'Nærøyfjord']
        },
        {
          id: 8,
          name: 'Geiranger',
          image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRD9khlsI9eZH1tId0Ufjr_KcPoeuhNssegtpEjMMGr_sFFtSxAmG0lL1gf17CNiYBx1SrxiAITYlXx6tCB2M6ONVe-ZHEL-bPgbyL1fQ',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/View_to_Geiranger_from_Flydalsjuvet%2C_2013_June.jpg/1920px-View_to_Geiranger_from_Flydalsjuvet%2C_2013_June.jpg',
          additional_image: '',
          additional_image1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/%D0%9D%D0%BE%D1%87%D0%BD%D0%BE%D0%B9_%D0%9E%D1%81%D0%BB%D0%BE.jpg/1280px-%D0%9D%D0%BE%D1%87%D0%BD%D0%BE%D0%B9_%D0%9E%D1%81%D0%BB%D0%BE.jpg',
          additional_image2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Oslo_Sentralstasjon_18jun2005.jpg/1280px-Oslo_Sentralstasjon_18jun2005.jpg',
          geography: `Geiranger is a small tourist village in Sunnmøre region of Møre og Romsdal county in the western part of Norway. It is in the municipality of Stranda at the head of the Geirangerfjorden, which is a branch of the large Storfjorden. The nearest city is Ålesund. Geiranger is home to spectacular scenery, and has been named the best travel destination in Scandinavia by Lonely Planet. Since 2005, the Geirangerfjord area has been listed as a UNESCO World Heritage Site. The Seven Sisters waterfall is located just west of Geiranger, directly across another waterfall called "The Suitor." Norwegian County Road 63 passes through the village. Geiranger Church is the main church for the village and surrounding area.
                      Geiranger is under constant threat from landslides from the mountain Åkerneset into the fjord. A collapse would cause a tsunami that could destroy downtown Geiranger. For this reason, sirens have been installed to warn residents if a landslide should occur.`,
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7468.113944483868!2d7.19905163325169!3d62.09880501715047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4614266d0e317cc9%3A0xee5b40919d3f7313!2zNjIxNiDQk9C10LnRgNCw0L3Qs9C10YAsINCd0L7RgNCy0LXQs9C40Y8!5e0!3m2!1sru!2skz!4v1704381766314!5m2!1sru!2skz',
          description: 'A tranquil village known for its scenic beauty, waterfalls, and outdoor activities.',
          howRich: 'Economically dependent on tourism and local businesses.',
          population: 260,
          gdp: 0.03,
          gdp_per_capita: '39,803',
          area: "8.9 km2 (3.4 sq mi)",
          established: "1048",
          history: 'The Old Norse form of the name was Geirangr. The suffix -angr (`fjord`) is a common element in Norwegian place names (see for instance Hardanger and Varanger).The first element could be the plural genitive of the Norse word geiri (`piece of land; field in a mountain side`) which is related to English gore (`spear-shaped piece of land`). This would then refer to the several small farms and fields lying in the steep mountain sides around the fjord. (See Knivsflå and Skageflå.)',
          travelExpense: 'Average travel expenses for a day: $90 - $120 USD',
          placesToSee: ['The Geirangerfjord', 'Dalsnibba Skywalk', 'The Seven Sisters Waterfall', `Eagle's Bend`]
        }
      ];
      

    let [city, setCity] = useState(0)

    return(
        <div>
            <VerticalScroll sources={cities} sign={"Learn More"} SetState={setCity} />
            <Pager id={city} sources={cities}>

            </Pager>
        </div>
    )
}