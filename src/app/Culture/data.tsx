interface Section {
    title: string;
    outer_content: string;
    inner_content: string;
    desc: string;
    image: string;
    arr: InfoArr[]
  }
  
interface InfoArr {
    title: string;
    main_image: string;
    content: string;
}  

const sections: Section[] = [
    { 
      title: 'Traditions', 
      outer_content: `
        Norway's natural wonders include the iconic fjords, such as the Geirangerfjord and Nærøyfjord, 
        which are UNESCO World Heritage Sites. 
        `, 
      desc: 'From the old to the modern traditions',
      inner_content: 'Norwegian families tend to be small, but relatives often live in the same town. For most Norwegian parents, it’s important that their children grow independent, and take responsibility for their own activities and actions. One key principle in Norwegian culture is egalitarianism (that we are all equal). This is reflected in gender relations, age relations and how people address others. Norwegians always address people by their first names, even teachers and elders. Norwegians dress and act informally, and treat each other with the sense of equality, no matter differences in economic class, gender or status. Men and women are considered equal. That means it is expected that they do the same kind of jobs, work just as much, earn the same amount of money, have a shared responsibility in the house and have a shared responsibility for the upbringing of their children.', 
      image: 'https://images.squarespace-cdn.com/content/v1/65119961b030be2b974e5d94/e859ec0b-9e79-418a-a7a0-bac1bfe2a786/28701577_1646558615420212_5495869544549930426_o.jpg', 
      arr : [
        {
            title: 'Norwegians Eat Pickled Herring for Breakfast',
            main_image: 'https://www.celebritycruises.com/blog/content/uploads/2021/01/norwegian-culture-pickled-herring-1024x684.jpg',
            content: `
            On a map, it’s Norway’s extraordinary wrinkled coastline, like a fan of old kelp, that makes the country instantly identifiable. Its relationship with the sea—from Viking longships to modern trawlers and the tiny seaside communities dotting its coastline—ensures that fish often takes center stage in Norwegian cuisine. At breakfast, that spotlight is shone upon the pickled herring.
            If you had visited Norway in the 1800s, breakfast might have consisted of a bowl of porridge topped with a scattering of salted herring in place of raisins. The Norwegians have had such a long relationship with this particular fish that it’s even mentioned in the 13th-century Kings’ Saga manuscript. The export of herring in the 19th century was a major contributing factor in helping Norway evolve into a leading capitalist economy.
            Viewed as an “everyday fish” in Norway, herring is often salted and pickled at home. With long, hard winters a way of life in a country that nudges into the Arctic Circle, pickling and other preservation methods are a tangy and delicious component of Norwegian culture. The pickling mix is typically sweet and sour, and the resultant strips of herring juicy and zesty in flavor.
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
    },

    { 
      title: 'Food', 
      outer_content: `
        Norwegian cuisine is known for its seafood, game meats, and traditional dishes like rakfisk and lutefisk. 
        Norwegian cuisine is heavily influenced by the country's geography and climate. Seafood, including salmon and cod, is a staple. 
        `,  
        desc: '',
      inner_content: `
      One of the things we love most about Norway, aside from the beautiful Fjords and abundance of Reindeer, is the food. 
      Norwegian food is highly underrated, and there are a lot of really unique dishes we think you have to try! 
      Take a look at our pick of the best Norwegian dishes in this guide.
      One thing we can say about Norwegian food is that it is definitely unique. 
      With traditions handed down from the Vikings utilizing fresh fish, foraged berries farmed lamb, and Norwegian cheese, 
      there is a wide variety of Norwegian dishes to sample when you visit the country.
      `, 
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1200,h_800/https://workingwithnorwegians.com/wp-content/uploads/DSC05015-1200x800.jpeg', 
      arr : [
        {
          title: 'Farikal – Mutton And Cabbage',
          main_image: 'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-88a144f/theplanetd.com/images/Norwegian-Food-Farikal.jpg',
          content: `
          Known as the Norwegian national dish, Farikal is really a simple dish of mutton and cabbage. Like most traditional Norwegian food is hearty and tasty.
          This meal is quite easy to prepare but can take a little time. It is made by putting bone-in lamb or mutton, cabbage, water and salt, and pepper together in a casserole dish. 
          You slow cook it for a few hours until the cabbage and lamb are tender. When it is ready t eat, serve it with a side of potatoes and you have the perfect traditional Norwegian dish.
          If you are in Norway you will typically find Farikal served during the autumn and winter months. It is s perfect dish to warm the bones.
          ` 
        },
        {
          title: 'Brunost – Brown Cheese',
          main_image: 'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-88a144f/theplanetd.com/images/Norwegian-Food-Brunost.jpg',
          content: `
          Brunost is a love it or hate it sort of food. 
          It’s really unique, which is the main reason we’ve added it to this late, and a staple in the Norwegian fridge. 
          Brunost is a type of creamy cheese, usually made with cow’s milk but can also be made with cream or goat’s milk. 
          There are two reasons why brunost splits opinion: the taste and the texture. First of all, it’s a sweet, caramelized cheese that’s not savory at all. 
          It’s a little tangy and unusual, but if you like it then you’ll be a fan for life. The texture is very creamy, which we think is brilliant. 
          But, it can get stuck a little in your teeth, which isn’t always ideal.
          If you’re trying brunost, make sure to buy a traditional Norwegian cheese slicer to go with it! 
          You’ll find these in every Norwegian’s kitchen drawer, and it’s a great way to slice these creamier cheeses without fuss.

          ` 
        },
        {
          title: 'Vafler – Waffles',
          main_image: 'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-88a144f/theplanetd.com/images/Norwegian-Food-Waffles.jpg',
          content: `
          You can’t go to Norway without having a waffle. These sweet treats are a highlight of the country’s cuisine, 
          though of course not as unusual as brunost. But, Norway does seem to love them more than anywhere else (at least in our opinion).
          It’s traditional to receive your waffles in the shape of a heart, and they’ve been served this way for over 150 years. 
          Usually, you’ll have one large waffle made out of many hearts which can be torn off and enjoyed, typically with jam. 
          You might be thinking but I’ve tried a waffle, this is nothing new! but no one does waffles like the Norwegians. 
          Thin, fluffy, and slightly crisp, they’re different from the waffles in the US and enjoyed by many people around the country every day.
          ` 
        },
        {
          title: 'Smalahove – Sheep’s Head',
          main_image: 'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-88a144f/theplanetd.com/images/Traditional-Norwegian-Food-Smalahove.jpg',
          content: `
          Okay, here’s a traditional Norwegian food that isn’t going to be to everyone’s taste. 
          Even in Norway, its popularity is dying out, but it’s still a traditional dish in this Scandinavian country. 
          Sheep’s head is exactly what it says on the tin. Half of the head of a sheep is cooked at low heat for a long time before being served up with vegetables and potatoes. If you’re squeamish, you might want to skip: but the most delicious parts of the head are apparently the tongue and the eye!

          Smalahove has been eaten for centuries and originated in a time when the wasting of part of an animal wasn’t even considered. If you want to try it in Norway now, your best bet is to head to a small village around Christmas time where you’ll probably find it still on the menu!

          ` 
        },
        {
          title: 'Lapskaus – Stew',
          main_image: 'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-88a144f/theplanetd.com/images/Norwegian-Dishes-Lapskaus.jpg',
          content: `
          Norway has been enjoying Lapskaus since the 1800s (though it actually came from Germany) and, as 
          Norwegian foods go, it’s a bit more mainstream than a sheep’s head. You’ll find lapskaus being served 
          up in homes across the country throughout the year, and it’s a hearty meal that’ll certainly keep away the cold.
          The traditional stew is made with beef, along with vegetables like leeks, potatoes, swede, and carrots. 
          These are all added to one pot to create a hot, delicious stew. We recommend the dark variety of lapskaus which 
          is made with a brun saus (brown sauce, a type of gravy) base for added flavor.

          ` 
        },
        {
          title: 'Kjøttkaker – Meatballs',
          main_image: 'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-88a144f/theplanetd.com/images/Norwegian-Food-Kjottkaker.jpg',
          content: `
          How could we talk about the foods of Norway without mentioning meatballs? Scandinavia as a whole is world-famous for its tasty meatballs, as any trip to Ikea will prove!
          However, kjøttkaker is Norway’s own take on the meatball. It’s made with minced beef and spices, like ginger, pepper, and nutmeg, giving it a similar flavor to Medisterkaker. It’s a classic that every Norwegian longs for when abroad, and they’re just as delicious as they sound!
          ` 
        },
        {
          title: 'Pinnekjøtt – Dried Lamb Ribs',
          main_image: 'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-88a144f/theplanetd.com/images/Norwegian-Food-Pinnekjott.jpg',
          content: `
          Pinnekjøtt, like Medisterkaker, is a dish usually served around Christmas time. In fact, it’s most common on Christmas Eve (24th) which is Norway’s main event over Christmas. The family gathers around for a large meal in the evening to celebrate the festive period, and you can almost guarantee that pinnekjøtt will be on the table!
          These are basically dried lamb ribs. They’re time-consuming to prepare, hence why they’re not eaten too often. Traditional pinnekjøtt is salted, smoked, and dried for thirty days before it’s ready to eat, leaving the meat incredibly flavorsome.
          To get your lamb ribs just right, soak them for around thirty hours before eating, and steam them for three hours. This will bring all the juice and tenderness right back for meat that melts in the mouth. Give them a go if you’re in Norway around the holidays and see what you think!
          ` 
        },
        {
          title: 'Raspeball – Potato Dumpling',
          main_image: 'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-88a144f/theplanetd.com/images/Norwegian-Food-Raspeball.jpg',
          content: `
          Norway loves potatoes. With every traditional meat dish on this list, you’ll most commonly find it served with some type of potato. They love them almost as much as they love brunost! 
          That’s just a taste of the many names it goes by! The recipe can also vary slightly from town to town, but in general, it’s made with flour and well-boiled potatoes that are mashed together to create a ball of starchy goodness. It’s actually traditional to serve Raspeball only on Thursday in Norway, though nowadays you’ll see it served up many nights of the week.
          ` 
        },
        {
          title: 'Rømmegrøt – Sour Cream Porridge',
          main_image: 'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-88a144f/theplanetd.com/images/Traditional-Norwegian-Food-Rommegrot.jpg',
          content: `
          The basic recipe for rømmegrøt consists of sour cream, milk, salt, and flour. These are boiled together until super thick and creamy. As with so many traditional staple dishes, each family has its own secrets and special ingredients they add to make their rømmegrøt even tastier, so if you can try a homemade version then definitely do!
          Because the name is translated to sour cream porridge, you might think this is served with jam or honey. But it’s actually completely savory and usually accompanies cured meats or boiled trout, making it more like a mashed potato alternative. 
          ` 
        },
      ]
    },
      
    { 
      title: 'Language', 
      outer_content: ` 
        The official language is Norwegian. Norwegians are fluent in English, and learning a few phrases in Norwegian is appreciated
        The Norwegian language has two written forms, Bokmål and Nynorsk, both recognized as official. 
        `, 
        desc: '',
      inner_content: '', 
      image: 'https://www.worldatlas.com/r/w1200/upload/95/cf/7d/shutterstock-376573807.jpg',
      arr : [
        {
        title: '',
        main_image: '',
        content: `
    
        ` 
      },
    ]
    },

    { 
      title: 'Music', 
      outer_content: `
        Traditional Norwegian music includes folk songs, dances, and the distinctive Hardanger fiddle. Modern genres are also popular.
        Traditional Norwegian music often features the Hardanger fiddle, a distinctive and rich-sounding instrument. 
        `, 
        desc: '',
      inner_content: `Norway is a small country where individual artists can have an decisive effect on the development of folk music. The fact that musicians from different musical spheres are interested in the Norwegian folk music heritage, and use it in their compositions, gives evidence of a renewed appreciation of this music and the existence of a vigorous milieu that emphasizes preserving the folk music tradition. The energy generated by the convergence of various fora for presenting folk music, including CDs, concerts and competitions, provides an ideal breeding ground for this type of music. Tradition and innovation are no longer regarded as diametrically opposed, but as necessary elements of development. (source: Folknett Norway)

      There are two types of Norwegian folk music: instrumental and vocal. Most of the time, instrumental folk music is dance music (slåttar). Norwegian folk dances are communal dances and regularly performed by couples, even though there are also solo dances, like the halling. Norway has very little of the ceremonial dances of other traditions. Dance tunes include two-beat (halling, gangar or rull ) and three-beat dances (springar or springleik). (source: Music Information Centre Norway – MIC)`, 
      image: 'https://www.fjordtours.com/media/4199/fn238dhm-foto_terje_rakke.jpg',
      arr : [
        {
          title: '',
          main_image: '',
          content: `
      
          ` 
        },
        {
          title: '',
          main_image: '',
          content: `
      
          ` 
        },
        {
          title: '',
          main_image: '',
          content: `
      
          ` 
        },
        {
          title: '',
          main_image: '',
          content: `
      
          ` 
        },
    ]
    },
  ];

export default sections