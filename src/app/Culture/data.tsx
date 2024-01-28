interface Section {
    title: string;
    outer_content: string;
    inner_content: string;
    desc: string;
    image: string;
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
      image: 'https://images.squarespace-cdn.com/content/v1/65119961b030be2b974e5d94/e859ec0b-9e79-418a-a7a0-bac1bfe2a786/28701577_1646558615420212_5495869544549930426_o.jpg' 
    },

    { 
      title: 'Food', 
      outer_content: `
        Norwegian cuisine is known for its seafood, game meats, and traditional dishes like rakfisk and lutefisk. 
        Norwegian cuisine is heavily influenced by the country's geography and climate. Seafood, including salmon and cod, is a staple. 
        `,  
        desc: '',
      inner_content: '', 
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1200,h_800/https://workingwithnorwegians.com/wp-content/uploads/DSC05015-1200x800.jpeg' 
    },
      
    { 
      title: 'Language', 
      outer_content: ` 
        The official language is Norwegian. Norwegians are fluent in English, and learning a few phrases in Norwegian is appreciated
        The Norwegian language has two written forms, Bokmål and Nynorsk, both recognized as official. 
        `, 
        desc: '',
      inner_content: '', 
      image: 'https://www.worldatlas.com/r/w1200/upload/95/cf/7d/shutterstock-376573807.jpg' 
    },

    { 
      title: 'Music', 
      outer_content: `
        Traditional Norwegian music includes folk songs, dances, and the distinctive Hardanger fiddle. Modern genres are also popular.
        Traditional Norwegian music often features the Hardanger fiddle, a distinctive and rich-sounding instrument. 
        `, 
        desc: '',
      inner_content: '', 
      image: 'https://www.fjordtours.com/media/4199/fn238dhm-foto_terje_rakke.jpg'
    },
  ];

export default sections