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
      inner_content: `
      is a North Germanic language spoken mainly in Norway, where it is an official language. Along with Swedish and Danish, Norwegian forms a dialect continuum of more or less mutually intelligible local and regional varieties; some Norwegian and Swedish dialects, in particular, are very close. These Scandinavian languages, together with Faroese and Icelandic as well as some extinct languages, constitute the North Germanic languages. Faroese and Icelandic are not mutually intelligible with Norwegian in their spoken form because continental Scandinavian has diverged from them. While the two Germanic languages with the greatest numbers of speakers, English and German, have close similarities with Norwegian, neither is mutually intelligible with it. Norwegian is a descendant of Old Norse, the common language of the Germanic peoples living in Scandinavia during the Viking Age.

Today there are two official forms of written Norwegian, Bokmål (Riksmål) and Nynorsk (Landsmål), each with its own variants. Bokmål developed from the Dano-Norwegian language that replaced Middle Norwegian as the elite language after the union of Denmark–Norway in the 16th and 17th centuries and then evolved in Norway, while Nynorsk was developed based upon a collective of spoken Norwegian dialects. Norwegian is one of the two official languages in Norway, along with Sámi, a Finno-Ugric language spoken by less than one percent of the population. Norwegian is one of the working languages of the Nordic Council. Under the Nordic Language Convention, citizens of the Nordic countries who speak Norwegian have the opportunity to use it when interacting with official bodies in other Nordic countries without being liable for any interpretation or translation costs.
      `, 
      image: 'https://www.worldatlas.com/r/w1200/upload/95/cf/7d/shutterstock-376573807.jpg',
      arr : [
        {
          title: 'Language history',
          main_image: 'https://i.ytimg.com/vi/sHmUo3bD9CU/maxresdefault.jpg',
          content: `
          During the medieval times Norway was an independent kingdom. The spoken language was Old Norse, which also was used by the Vikings who settled in Iceland and the Faroe Islands where the Old Norse was maintained to a much larger degree than in mainland Scandinavia.

          In 1349 the Black Death wiped out almost one half of the Norwegian population. As there were only a few literate persons left, no one was present to preserve the written Norwegian language in years to come. In 1397 Norway entered a union with Denmark that lasted until 1814.  Denmark came to be the dominating part, and Danish came to be the primary language among the Norwegian elite. In churches the Danish Bible was used along with Danish religious books after the reformation in 1536, and Danish clergymen held services in Norwegian churches. The law was written in Danish, and all literature, prose and poetry in Norway was written in Danish. This had a crucial effect on the written language. 
          
          Early in the 19th century educated Norwegians wrote Danish. The elite in towns spoke Danish with a Norwegian accent. Norwegian dialects were spoken by 95% of the population. Dialects had developed during the four hundred years under Danish rule. Due to the Norwegian topography, differences had developed and distinct local dialects had emerged.
          
          In 1814, as a part of the Treaty of Kiel, Norway was transferred from Denmark to Sweden. Before the treaty came into effect, however, a constitutional assembly was called, and on May 17th 1814 Norway declared independence. During the ensuing negotiations, a so-called personal union was declared. Sweden and Norway became two independent countries under the Swedish king.
          
          ` 
        },
        {
          title: 'Written Norwegian',
          main_image: 'https://www.lifeinnorway.net/wp-content/uploads/2014/04/dn.jpg',
          content: `
          As Norway was re-established as an independent nation, questions related to language were soon raised. Nationalistic and romantic ideas were voiced and support given to the idea of developing a proper written Norwegian language. One question was which spoken variety should be reflected in the written form. Arguments were based on three different positions.

          Keep the Danish.
          Develop a new written language based on the Norwegian dialects.
          Norwegianize the Danish
          The first alternative was rejected. The two others were both set into practice. Ivar Aasen (1813-1896), a linguist and poet with rural background, developed Landsmål, as it was called, based on extensive research on rural dialects in western and central parts of southern Norway. In 1929 it was labelled Nynorsk – "New Norwegian" which still is used. Landsmål became an official norm in 1885. It later broadened its basis by including forms represented in East Norwegian speech. During the next 50 years the language was widely accepted, but did never obtain a position as the language for the majority.
          
          Knud Knudsen (1812-1895), a grammarian and headmaster, had the goal of altering Danish orthography until it reflected the informal speech of the educated classes in Norway. Riksmål was established as a norm by a spelling reform in 1907. In 1929 this variant was labelled "Bokmål" – "Book language". During the 20th century a succession of spelling reforms led to the inclusion of forms related to lower urban class and rural speech in Bokmål.
          
          A selection of words was within both Nynorsk and Bokmål were presented with "main" and "alternative" forms. In this way the user was given the opportunity to choose forms that corresponded more with the speaker's dialect. The latitude of these options has been narrowed in recent years, but alternative forms still exist.
          
          It became a political goal to fuse Nynorsk and Bokmål into one form, Samnorsk (Common Norwegian). This idea was abandoned in the 1960s, Nynorsk and Bokmål have developed as two parallel written forms of Norwegian.
          
          Today Bokmål is dominating in all sectors of the Norwegian society as 85–90 % of the population are writing in Bokmål. The users are living in all parts of the country. To some degree Bokmål is used as a spoken language. Some dialects are more similar to Bokmål than others. These dialects are found in the south Eastern parts of Norway with Oslo as a centre.
          
          Nynorsk expanded until World War II when it was used by about 1/3 of the population. Later it has declined, and today about 10-15% of the population are using Nynorsk. Its stronghold today is the central and western parts of southern Norway where the dialectal forms more or less overlap with the written forms.
          
          The difference between Nynorsk and Bokmål is sociolinguistically important. At present Bokmål "is often associated with urban culture and an urban way of life. It is also in most cases the language of advertising, pop music, fashion, entertainment and young people's culture. It is the language of weekly magazines and the big newspapers, and also of the commercial world and the world of technology. [...]  Nynorsk is often associated with traditional and national values and with regional or local culture. Writing Nynorsk might be a signal that your identity is more related to local values than to urban style, and that your local roots are of great importance to you." (Maagerø and Simonsen 2005). Nynorsk has a rather weak position in technology, economy and popular culture. On the other hand, these are the areas where Bokmål is most challenged by English.
          
          In primary education students choose either Bokmål or Nynorsk as their primary language form. In secondary education they also study the other language form.
          ` 
        },
        {
          title: 'Spoken Norwegian',
          main_image: 'https://m.media-amazon.com/images/I/71faxMBNg6L._AC_UF1000,1000_QL80_.jpg',
          content: `
          Today dialects find significant support at all levels of Norwegian society from casual speech to teaching, broadcasting and parliament. Students freely speak their local dialects in school. Even the Education Act states that they have the right to do so. It states that the teacher "should pay due attention to the vernacular used by pupils, and that he or she should not attempt to make them abandon their home dialect" (Jahr 2007).

          "While the actual pronunciation of Norwegian has played a fundamental role on the development of both norms, the existence of two competing written norm has on the other hand prevented the formation of an uncontroversial spoken norm" (Kristoffersen 2000). In other words, there is no standard spoken Norwegian. This is reflected by Maagerø (2005) who quotes the rhetorical question "Why should the Oslo way of speaking be better than any other dialect?" 
          
          If a student of Norwegian as a second language wants to check the pronunciation of a certain word, such information is in general absent in the major dictionaries. They only provide spelling, definitions and grammatical information. The main dictionary of Bokmål, Bokmålsordboka (Wangensteen 2005), which indicate stress patterns, states that the information given only indicates a general Bokmål reading of words, but  "[i]t has not been the editorial board's intention to make users avoid pronunciation which is different from the one given in the dictionary, but an inherent part of their dialect, nor in any way to state that such variants are inferior." The careful wording of this statement indicates the strong position of Norwegian dialects.
          
          However, this does not preclude the existence of a spoken basis for Bokmål. The central eastern part of Norway is considered the centre of Norway as this is the location of the capital, Oslo. In general the formal middle-class urban speech in eastern parts of southern Norway is quite close to Bokmål, and as such it can be labeled as an unofficial norm of Norwegian. It is used in news readings on the radio and TV, when reading Bokmål aloud and in the teaching of Norwegian as a second language to adults. 
          
          The spoken basis of Nynorsk is the rural dialects of western Norway. These dialects by themselves form a heterogeneous picture, and one cannot identify one dialect as the common denominator of Nynorsk. It is not correct to say that people speak Nynorsk even though they write Nynorsk. One may hear spoken Nynorsk in news readings and in stage performances. 
          
          As Norwegians are exposed to the different forms of Norwegian from childhood on, they generally face minor problems in understanding different dialects. In school students are not taught how to speak Bokmål and Nynorsk. In reading, dialectal prosody is used and the Bokmål or Nynorsk wording is not necessarily respected. The speech sounds can be an approximation to Central East Norwegian or the reader may use the sounds of his/her dialect.
          
          Adults usually speak the dialect of the place where they grew up, but of course, there are people who have changed the dialect of their childhood to another dialect or to a speech based on Bokmål. Consequently, when a Norwegian is approached by a newly arrived foreigner (who will speak the Bokmål learnt in class), the Norwegian most likely will answer using dialectal forms. As phonology, inflections etc. may differ radically from the Bokmål form, there is a great chance that the student of Norwegian as a second language will not be able to transfer the word spoken to its corresponding Bokmål form and thus will not understand what is said. This might happen due to different speech sounds,  historical processes reflected in the dialect, different stress placement, various fast speech phenomena, different vocabulary etc.

          ` 
        },
        {
          title: 'Norwegian as a second language',
          main_image: 'https://www.uib.no/sites/w3.uib.no/files/styles/area_main/public/media/aeae.png?itok=TPV7M-1M',
          content: `
          Adult students in introductory courses of Norwegian as a second language will most likely be taught spoken Bokmål in class, at times even in areas where Nynorsk is used. As most textbooks are written in Bokmål, teachers, irrespective of their dialectal background, adapt their way of speaking to Bokmål. Normally they maintain the prosodic features of their dialect. Thus spoken Bokmål will be found in several forms. Many of them will be different from Central East Norwegian. Students may experience several forms of spoken Bokmål, but since the ability to change from dialect to spoken Bokmål is a skill used by second language teachers, and not by dialect speaking Norwegians in general, the students of Norwegian as a second language will need some time and have to spend some effort in order to develop an understanding of the local varieties of the Norwegian language.

          ` 
        },
        {
          title: 'National minorities',
          main_image: 'https://www.ntnu.edu/documents/1630143/1983891/map_dialectsNY_now/0eba461d-d6c5-4ef6-aa82-0c04ce153bc0?t=1296479735936',
          content: `
          Today about 20 000 individuals in Norway have the Sámi language as their mother tongue. Sámi is a member of the Finno-Ugric branch of languages, and its roots in Norway may extend as far back as Norwegian. North Sámi is an official language on a par with Norwegian in the some districts of in the two northern counties. 

          Groups with long-term attachment to Norway are defined as national minorities, that is the Kvens, who speak Kven; Jews (Jiddisch and modern Hebrew), the so called Forest finns (Norwegian has replaced Finnish); Rom or Gypsies (Rom), and the Romani people (Romani). Approximately 4 000 hearing impaired persons utilize Norwegian Sign Language.

          ` 
        },
        {
          title: 'Foreign languages',
          main_image: 'https://study.com/cimages/multimages/16/680px-location_norway.svg7767827485114046529.png',
          content: `
          Most Norwegians aged 60 or younger studied English in school. Some of the elderly Norwegians will have problems communicating with foreigners in English, but not so for younger people. Today, English is Norway's most important foreign language for international use, followed by German and French.

          There is a large number of immigrants whose first language is not Norwegian as 10 percent of the Norwegian population are immigrants. Currently more than 120 different mother tongues are represented in Norwegian primary schools. The major immigrant languages besides Swedish and Danish are Urdu, Vietnamese, Somali, Persian and Turkish.

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
          title: 'Anon Egeland',
          main_image: 'https://i0.wp.com/worldmusiccentral.org/wp-content/uploads/anon-egeland-2000.jpg?w=500&ssl=1',
          content: `
          Ånon Egeland was born in Oslo in 1954. He is one of the few musicians who plays traditional music from the county of Agder. He is first and foremost a Hardanger fiddler (the Norwegian fiddle with drone strings, as heard on Devil’s Tune) but he also plays jew’s harp and two kinds of Norwegian flute.

          After many years of collaboration on other musicians’ projects, this multi-instrumentalist finally released his first solo CD “Ånon” in 1999. The music on the CD is based on the Agder tradition, and Ånon Egeland conveys this message through his own unique “Ånon sound”.
          
          Accompanying Ånon on his tours is Leiv Solberg on mandola and guitar. Leiv has been playing with Ånon for over 20 years, so their work together is nearly telepathic.

          ` 
        },
        {
          title: 'Edvard Grieg',
          main_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Edvard_Grieg_portrait_%28cropped%29.jpg/330px-Edvard_Grieg_portrait_%28cropped%29.jpg',
          content: `
          Norwegian composer and pianist. He is widely considered one of the leading Romantic era composers, and his music is part of the standard classical repertoire worldwide. His use of Norwegian folk music in his own compositions brought the music of Norway to fame, as well as helping to develop a national identity, much as Jean Sibelius did in Finland and Bedřich Smetana in Bohemia.
          Grieg is the most celebrated person from the city of Bergen, with numerous statues which depict his image, and many cultural entities named after him: the city's largest concert building (Grieg Hall), its most advanced music school (Grieg Academy) and its professional choir (Edvard Grieg Kor). The Edvard Grieg Museum at Grieg's former home Troldhaugen is dedicated to his legacy
          ` 
        },
        {
          title: 'Åse Teigland',
          main_image: 'https://i0.wp.com/worldmusiccentral.org/wp-content/uploads/Ase_Teigland.jpg?fit=500%2C500&ssl=1',
          content: `
          Åse Teigland was born in 1975. She comes from Utne in Hardanger. She is one of Norway’s talented ardanger fiddle players, and plays with authentic feeling and elegance.

          Åse Teigland studied with several well-known fiddlers, including Knut Hamre, Stein Versto and Leif Rygg. She studied at the Folkemusikakademiet in Rauland (1994-96), Bergen University College and the Ole Bull Academy at Voss (1998-2000).
          
          She has collaborated with Knut Hamre, Frank Rolland, Synnøve S. Bjørset, Anne Hytta, and Alexander Aga Røynstrand.
          
          Åse Teigland’s repertoire consists primarily of traditional songs and tunes from Hardanger and Voss.
          ` 
        },
        {
          title: 'Frode Haltli',
          main_image: 'https://i0.wp.com/worldmusiccentral.org/wp-content/uploads/Frode_Halti_RolfSchoellkopf.jpg?w=500&ssl=1',
          content: `
          Accordion virtuoso Frode Haltli has received several awards, including a Norwegian Spellemann Prize in 2002, and was named Young Soloist of the Year by the Norwegian Concert Institute in 2001.

          Haltli was was a member of Rusk and contributed to a long line of productions, including recordings for the prestigious German label ECM.
          
          Since 1999 he has performed and recorded regularly with Scandinavian trio POING.
          ` 
        },
        {
          title: 'Alan Walker',
          main_image: 'https://i.scdn.co/image/ab6761610000e5ebbf753c009fd9c2d53351dd3c',
          content: `
          Norwegian DJ and music producer, primarily known for his single "Faded" (2015), which was certified platinum in 14 countries. He has also released several known songs including "Force" (2015), "Sing Me to Sleep" (2016), "All Falls Down" featuring Noah Cyrus and Digital Farm Animals (2017), "Darkside" (2018), "Diamond Heart" (2018), "On My Way" featuring Sabrina Carpenter and Farruko (2019), and "Alone, Pt. II" featuring Ava Max (2019), all of which attracted hundreds of millions of views on YouTube. Three of his songs—"Faded", "Alone" (2016) and "The Spectre" (2017)—have garnered over a billion views on YouTube.

          In early 2017, Walker's channel emerged as the most subscribed YouTube channel registered in Norway, with six million subscribers. His channel is still the most subscribed in Norway, and has 44.9 million subscribers as of 14 January 2024. He also has the most views of any Norwegian creator, with approximately 13.5 billion views as of 14 January 2024.
          ` 
        },
        {
          title: 'Agnes Buen Garnas',
          main_image: 'https://i0.wp.com/worldmusiccentral.org/wp-content/uploads/agnes_buen_garnas-500.jpg?w=500&ssl=1',
          content: `
          Agnes Buen Garnås, born in 1946, is one of Norway’s leading traditional singers. She is a member of the famous Buen family (of Jondalen in Telemark), and has been a pioneer in the efforts to revitalize Norwegian vocal traditions. Her achievements in this area have had a great influence on young traditional vocalists throughout the country.

          Garnås has inspired them to seek out their own local traditions, and has brought many young singers onto the stage. Her collaboration with Jan Garbarek on Rosensfole has become a classic in its genre. Her warm, lovely voice finds its mate in Garbarek’s soundscape.

          ` 
        },
        {
          title: 'Kirsten Bråten Berg',
          main_image: 'https://i0.wp.com/worldmusiccentral.org/wp-content/uploads/Kirsten_Braten_Berg.jpg?w=500&ssl=1',
          content: `
          Kirsten Bråten Berg (born 1950) has her own silversmith workshop, but is known primarily for unique, richly resonant kveding.

          She has lived in Setesdal since 1973, and been one of the leading figures efforts to preserve folk music heritage area. She also instrumental presenting new contexts, for instance through her collaboration with jazz bassist Arild Andersen.
          
          Kirsten Bråten Berg won the first prize at National Contest for Traditional Music in 1987, has released a number of recordings, Spellemannpris award several times, and toured often Norway abroad.
          
          In 1996 two musicians from western Africa and two from Setesdal combined forces to produce a recording, “Frå Senegal til Setesdal”, featuring stev, traditional songs and lullabies. The music is unmistakably Norwegian, but the African music weaves its way effortlessly into its fabric and reminds us that folk music is created by something deep inside the human soul, beyond language and culture.

          ` 
        },
        {
          title: 'Adjagas',
          main_image: 'https://i0.wp.com/worldmusiccentral.org/wp-content/uploads/adjagas.jpg?w=350&ssl=1',
          content: `
          Norwegian act Adjagas is a yoik group formed in 2004 by Sara Marielle Gaup and Lawra Somby, both from a long line of Sami ancestry. A yoiker is a singer or a chanter with a Sami origin, and it represents a very historically important part of the musical history of Northern Europe.

          Sara Marielle Gaup, born in 1984, is from Guovdageaidnu/Kautokeino, whose musical heritage was passed down to her from her parents and generations before that. She began singing at a very early age, and it was through continued musical education at SMG she developed her unique sense of performance and perfected her singing voice.
          
          Lawra Somby, born in 1981, was taught the great gift of yoiking from his father, Ande Somby. Lawra started performing on a variety of stages in 1997, and he has performed his music both solo as well as with his father Ande, making him a an experienced singer with a strong stage presence.
          
          Yoik is not about making stories about people, animals, situations or landscapes. Yoik is the young woman, the eagle, the grass field by the river they are recreations of a moment, a sense, a memory how the wings of a bird slowly touches your chin, the smell of a fireplace and how it evokes memories. The yoik is about bringing memories into the light of day, making them available and inviting new people into this special world
          
          Samiland, also known as Lapland, is the territory at the very northernmost parts of Norway, Sweden and Finland, spreading into Russia.
          ` 
        },

        {
          title: 'Olav Torget',
          main_image: 'https://i0.wp.com/worldmusiccentral.org/wp-content/uploads/Olav_Torget.jpg?w=500&ssl=1',
          content: `
          Olav Torget has been an independent musician since the early nineties. He plays electric and acoustic guitars and the West African konting (ngoni).

          He learned music at the University of Oslo with guitarists Knut
          Værnes, Bjørn Klakegg and Staffan William-Olsson. Olav also studied konting in Senegal and Gambia with Amadou A. Gueye.
          
          He has performed with Kristin Asbjørnsen, Karl Seglem, Geir Lysne,
          Solo Cissokho, Diom de Kossa, Anita Skorgan, Sjur Miljeteig, Eli
          Storbekken, Steinar Ofsdal, and Ali Farka Toure among others.
          ` 
        },
        {
          title: 'Trygve Seim',
          main_image: 'https://i0.wp.com/worldmusiccentral.org/wp-content/uploads/tryvge_seim_4-500.jpg?w=500&ssl=1',
          content: `
          Inspired early in his creative life by Jan Garbarek and by Edward Vesala, Trygve Seim has worked in many modern jazz contexts, and continues to tour with Manu Katché’s group.

          In his own music, however, distance from conventional definitions of jazz becomes ever more marked. Investigation of Asian, Middle Eastern and East European music – and especially the sounds of the Armenian duduk, the Japanese shakuhachi, and the Indian bansuri flute – have had their effect on Seim’s music and brought about a redefining of the nature of dynamics. Subtle shadings and textures are part of his diversity, and microtonal phrasing characteristic of his melodic approach.
          
          In additional to his discography as a leader and as a member of The Source, Trygve Seim appears on ECM recordings by Iro Haarla (Northbound), Sinikka Langeland (Starflowers), Christian Wallumrød (Sofienberg Variations), and Manu Katché (Playground). Other recent activities have included extended stays in Cairo, where Seim studied Arabian modes and played concerts with pianist Fathy Salama.

          ` 
        },
    ]
    },
  ];

export default sections