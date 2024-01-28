import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';



export default function ScrollCards(){


    const arr = [
        {
            title: 'Norwegians Eat Pickled Herring for Breakfast',
            main_image: 'https://www.celebritycruises.com/blog/content/uploads/2021/01/norwegian-culture-pickled-herring-1024x684.jpg',
            content: `
            On a map, it’s Norway’s extraordinary wrinkled coastline, like a fan of old kelp, that makes the country instantly identifiable. Its relationship with the sea—from Viking longships to modern trawlers and the tiny seaside communities dotting its coastline—ensures that fish often takes center stage in Norwegian cuisine. At breakfast, that spotlight is shone upon the pickled herring.
            <br /><br />
            If you had visited Norway in the 1800s, breakfast might have consisted of a bowl of porridge topped with a scattering of salted herring in place of raisins. The Norwegians have had such a long relationship with this particular fish that it’s even mentioned in the 13th-century Kings’ Saga manuscript. The export of herring in the 19th century was a major contributing factor in helping Norway evolve into a leading capitalist economy.
            <br /><br />
            Viewed as an “everyday fish” in Norway, herring is often salted and pickled at home. With long, hard winters a way of life in a country that nudges into the Arctic Circle, pickling and other preservation methods are a tangy and delicious component of Norwegian culture. The pickling mix is typically sweet and sour, and the resultant strips of herring juicy and zesty in flavor.
            <br /><br />
            At the sit-down breakfasts typical of Norwegian homes, the mason jar of herring will often be flanked by smoked salmon, caviar in a tube, and the block of beloved Brunost (brown cheese).
            ` 
        },
        {
            title: 'Norway is Home to One of Europe’s Oldest Musical Traditions',
            main_image: 'https://www.celebritycruises.com/blog/content/uploads/2021/01/norwegian-culture-sami-yoiks-traditional-lappish-yurts-1024x683.jpg',
            content:    `
            Today, the Sami are both citizens of Norway and a separate people, with self-administration in Finnmark county and a parliament in their capital of Karasjok. Of the 50,000-strong population, only around 4% still actively pursue the herding way of life. Traditional yoiks, however, are a flourishing part of modern Sami and Norwegian culture.
            Often compared to Native American chanting, the Sami yoik (or joik) is a vocal ululation and believed to be one of the continent’s oldest continuous musical traditions. The compositions are deeply personal to the joiker and are considered less about something and more the actual embodiment of whatever the yoik is concerned with. According to Sami lore, the skill was bestowed upon their people by Arctic fairy folk.
            As the new generation of Sami joikers continues to develop the style from its original mumbling form, its fusion with other modern forms of music—such as trance—is becoming more widespread. With cultural tourism so important for the Sami, the modern form of the yoik is a high-profile calling card for their fascinating way of life.
            `
        },
        {
            title: 'The Country is One Big Campsite',
            main_image: 'https://www.celebritycruises.com/blog/content/uploads/2021/01/norwegian-culture-cross-country-skiing-1024x722.jpg',
            content: `
            The Norwegians love the outdoors; no surprise considering the stunning beauty of their homeland. They’re particularly addicted to cross-country skiing, and in the summer you’ll see enthusiasts switch to roller skis to maintain their fitness. As such, with a population of around five million outdoorsy types, it’s understandable how Norway has developed its law of allemannsretten or “freedom of movement”.
            An ancient custom that was signed into law in 1957, allemannsretten permits those tramping through their great wilderness to essentially travel wherever they choose—even across private property. The law specifies that you may cross undeveloped private land without the consent of the owner. You can also camp there as well, provided that:

            your tent is pitched 150 meters from buildings
            you’re polite
            it’s for one night only

            Of course, there are a few extra strictures. For example, no campfires are allowed in forests between mid-April and mid-September, and farmland should only be crossed when under snow. That this law is successful is a testament to the respect that Norwegians hold for the land and each other.
            `
        },
        {
            title: 'Parts of Norway See No Night During Summer',
            main_image: 'https://www.celebritycruises.com/blog/content/uploads/2021/01/norwegian-culture-midnight-sun-tromso-1024x683.jpg',
            content: `
            The midnight sun—that unique time of year near the poles when the sun doesn’t set—is a reality for the higher latitudes of Norway in the summertime. Tromsø, northern Norway’s largest city, sees no night between 20 May and 22 July each year.
            Norwegian and Nobel Laureate Knut Hamsun described the experience poetically in his 1984 novel, Pan: “Night was coming on again; the sun just dipped into the sea and rose again, red, refreshed, as if it had been down to drink.”
            At the point that Hamsum describes, the light offers photographers an extended golden hour, the clouds in the sky edged with purple. While living beneath the midnight sun takes some getting used to—and heavy-duty blinds in your home—Norwegians adapt by generally getting up late and turning in late as well. They use the extra light to socialize and get outdoors later in the evening.
            ` 
        },
        {
            title: 'Aquavit is the Country’s National Drink',
            main_image: 'https://www.celebritycruises.com/blog/content/uploads/2021/01/norwegian-culture-aquavit-1024x683.jpg',
            content: `
            Aquavit, Norway’s national drink, is a key ingredient of the Norwegian interpretation of a Christmas meal (as well as any festive gathering). Armed with a 40% ABV, it makes sense that such a toe-warming tipple is so popular in a snowbound destination such as Norway. Traditionally served in an elegant fluted glass, aquavit has been embedded in Norwegian culture as far back as the 15th century.
            While, today, little stock is put in the medicinal properties that earned it its name, the drink—essentially an oak-aged vodka flavored with an infusion of caraway or dill—is generally considered helpful for digestion. A glass of room temperature aquavit is typically sipped slowly at either end of a rich meal.
            Of course, as with so many things Norwegian, innumerable regional variations of aquavit are available. A unifying element is its oak-barrel aging that supplies a distinctive light golden color to the spirit. One Norwegian variety of aquavit takes the aging process further by loading barrels onto ships headed for Australia. Apparently, the crossing of the equator, with the movement and temperature changes involved over the course of the long journey, helps the aquavit extract more flavor from their containers.
            `
        },
        {
            title: 'Trolls Still Stalk the Land',
            main_image: 'https://www.celebritycruises.com/blog/content/uploads/2021/01/norwegian-culture-trollstigen-troll-statues-1024x683.jpg',
            content: `
            As with elves in Iceland, trolls have a special place in Norwegian culture. Typically they have been portrayed as unhelpful supernatural recluses, a description born from Norse mythology in which they are often locked in fights with characters such as Thor, the god of thunder. This portrayal served as the template for the sunlight-fearing grotesques featured in movies.
            Interest in these particular beings remains front and center in modern western culture. They’ve been reworked into cuddly, benign creatures, as essential to a portrayal of Norway as reindeer and ice. This version isn’t likely to catch on in Norway, however, where trolls remain thought of as a malign natural force with the ability to conjure up a blizzard or cause a rock slide.
            Perhaps the reason you’ll find them everywhere, as a gurning statue overlooking a playground or in the names on a map (see Trollstigen near the stunning Geiranger), is a way of calling the dark fears of Norwegian culture out into the light.
            `
        },

    ]

    return (
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[ Pagination, Navigation ]}
        className="mySwiper"
      >
        {arr.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-card relative rounded-xl h-[30vw] w-[20vw] overflow-hidden">
              <img src={item.main_image} className="object-cover h-full w-full" alt={item.title} />
              <div className="absolute text-white font-light bottom-4 left-4 text-lg z-10">
                {item.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
}