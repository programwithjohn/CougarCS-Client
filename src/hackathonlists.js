import default_img from './assets/default_logo.jpg' //can be changed if desired. used if hackathon does not have a logo
let hackathons = [
    {
        id: 0,
        title: "Def Hacks Global 2.0",
        description: "DefHacks | Global 2.0 hackathon is a free, online-hosted 36-hour event for high school and college students.",
        link: "https://defhacks.co/hackathons/global_2.0/",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/064/842/thumb/square.png?1603139861",
        startDate: "11-11",
        endDate: "11-13",
        year: "2020-",
        deadline: "None",
        show: true
    },
    {
        id: 1,
        title: "BostonHacks",
        description: "BostonHacks is a 36-hour event where students from different backgrounds gather together to use technology to create cool projects.",
        link: "https://bostonhacks.io/",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/031/394/thumb/mlh_background.png?1602169922",
        startDate: "11-14",
        endDate: "11-15",
        year: "2020-",
        deadline: "11/2",
        show: true
    },
    {
        id: 2,
        title: "Give Back Hacks",
        description: "It's the time of the year to be thankful again and give back to the wonderful community of hackers that helped you learn and grow throughout.",
        link: "https://organize.mlh.io/participants/events/5726-give-back-hacks/",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/049/040/thumb/give-back-hacks_mlh-event-hero_%281%29.png?1602695457",
        startDate: "11-20",
        endDate: "11-22",
        year: "2020-",
        deadline: "None",
        show: true
    },
    {
        id: 3,
        title: "Oxford Hack 2020",
        description: "Oxford Hack is the official Oxford student Hackathon, where over 300 people gather every year to collaborate, innovate, learn and experiment while creating a project from scratch in 36 hours.",
        link: "https://oxfordhack.co.uk/",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/031/395/thumb/OxfordHack2020background.jpg?1602169990",
        startDate: "11-14",
        endDate: "11-15",
        year: "2020-",
        deadline: "11/9",
        show: true
    },
    {
        id: 4,
        title: "UniHack",
        description: "UniHack - an international hackathon for university and high school students. This year, we're going digital!",
        link: "https://unihack.eu/",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/031/397/thumb/unihack_mlh.png?1602170169",
        startDate: "11-20",
        endDate: "11-22",
        year: "2020-",
        deadline: "None",
        show: true
    },
    {
        id: 5,
        title: "BrickHack 7",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat non ex at pellentesque. Integer dolor erat, egestas eget viverra at.",
        link: "https://brickhack.io/",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/003/324/thumb/MLH-Cover-05_%281%29.png?1595444507",
        startDate: "02-20",
        endDate: "02-21",
        year: "2021-",
        deadline: "TBA",
        show: true
    },
    {
        id: 6,
        title: "Hack Western",
        description: "Hack Western is one of Canada's largest annual student-run hackathons. Our mission is to inspire the next generation of problem-solvers.",
        link: "https://hackwestern.com/",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/031/396/thumb/Hack_Western_Background_-_MLH.png?1602170081",
        startDate: "11-20",
        endDate: "11-22",
        year: "2020-",
        deadline: "10-16",
        show: true
    },
    {
        id: 7,
        title: "SharkHacks",
        description: "We will be running a fun, activity-filled, digital hackathon. These events are open to all skill levels, from beginners to the most veteran developers.",
        link: "https://organize.mlh.io/participants/events/6046-sharkhacks",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/106/856/thumb/shark-hacks_mlh-event-hero.png?1604658730",
        startDate: "12-04",
        endDate: "12-06",
        year: "2020-",
        deadline: "None",
        show: true
    },
    {
        id: 8,
        title: "WWPHacks",
        description: "WWPHacks is a hackathon - a collaborative programming competition where teams of up to four work against the clock to build innovative technological solutions to real world problems.",
        link: "https://wwphacks.com/",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/099/174/thumb/background_%281%29.png?1604337108",
        startDate: "11-21",
        endDate: "11-22",
        year: "2020-",
        deadline: "None",
        show: true
    },
    {
        id: 9,
        title: "Hacklytics",
        description: "Hacklytics is Georgia Tech’s 36 hour datathon brought to you by Data Science at Georgia Tech, whose goal is to give you hands-on experience!",
        link: "https://hacklytics.io/",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/101/006/thumb/mlh_cover.png?1604421129",
        startDate: "02-05",
        endDate: "02-07",
        year: "2021-",
        deadline: "TBA",
        show: true
    },
    {
        id: 10,
        title: "Who Done It Hacks",
        description: "Get your Sherlock on and follow the clues to solve mysteries this weekend. Whether you build something on the theme or not, this weekend is all about having fun, detectives.",
        link: "https://organize.mlh.io/participants/events/6047-who-done-it-hacks",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/106/857/thumb/Who-done-it-Hacks_mlh-event-hero.png?1604658810",
        startDate: "12-11",
        endDate: "12-13",
        year: "2020-",
        deadline: "None",
        show: true
    },
    {
        id: 11,
        title: "Hoya Hacks",
        description: "We will be running a fun, activity-filled, digital hackathon. These events are open to all skill levels, from beginners to the most veteran developers.",
        link: "http://hoyahacks.georgetown.domains/",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/004/601/thumb/bg.png?1599674109",
        startDate: "01-29",
        endDate: "01-31",
        year: "2021-",
        deadline: "TBA",
        show: true
    },
    {
        id: 12,
        title: "Hack Off v3.0",
        description: "We present to you, Hack Off, a one of a kind hack, where your innovation defines you. It shows how you wish your world to be today and where you see it in the future.",
        link: "https://www.hackoff.tech/",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/003/462/thumb/1.png?1596581719",
        startDate: "12-12",
        endDate: "12-13",
        year: "2020-",
        deadline: "12/10",
        show: true
    },
    {
        id: 13,
        title: "New Year New Hack",
        description: "Happy New Year Hackers!! What better way to start 2021 than to join us for a fun weekend of New Year Celebrations, Hacking, mini-events, workshops, and more!",
        link: "https://organize.mlh.io/participants/events/6052-new-year-new-hack",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/107/757/thumb/New-Year-New-Hack_mlh-event-hero.png?1604731165",
        startDate: "01-01",
        endDate: "01-03",
        year: "2021-",
        deadline: "TBA",
        show: true
    },
    {
        id: 14,
        title: "Holiday Hacks",
        description: "Holiday Season is here and it's time for hacking! Participate in Holiday Hacks from the comfort of your homes and build something incredible.",
        link: "https://organize.mlh.io/participants/events/6051-holiday-hacks",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/107/756/thumb/Holiday-Hacks_mlh-event-hero.png?1604730965",
        startDate: "12-25",
        endDate: "12-27",
        year: "2020-",
        deadline: "None",
        show: true
    },
    {
        id: 15,
        title: "Winter Hacklympics",
        description: "We will be running a fun, activity-filled, digital hackathon. These events are open to all skill levels, from beginners to the most veteran developers.",
        link: "https://organize.mlh.io/participants/events/6048-winter-hacklympics",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/106/858/thumb/Winter-Hacklympics_mlh-event-hero.png?1604658849",
        startDate: "12-18",
        endDate: "12-20",
        year: "2020-",
        deadline: "None",
        show: true
    },
    {
        id: 16,
        title: "Who Wants to Be A Hackionaire",
        description: "Are you ready to take the hot seat and Challenge yourself to create something awesome this weekend? Get those creative juices flowing and join us for an incredible journey to being a hackionaire!",
        link: "https://organize.mlh.io/participants/events/6033-who-wants-to-be-a-hackionaire",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/102/534/thumb/Who-wants-to-be-hackionaire_mlh-event-hero.jpg?1604486446",
        startDate: "11-27",
        endDate: "11-29",
        year: "2020-",
        deadline: "None",
        show: true
    },
    {
        id: 17,
        title: "TechTogether New York",
        description: "It’s important now more than ever to come together (virtually, of course) and support one another as we face the challenges of this year, as a community. The theme for TechTogether New York 2020, Embracing Uncertainty. ",
        link: "https://organize.mlh.io/participants/events/6046-sharkhacks",
        img: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/113/178/thumb/Screen_Shot_2020-10-23_at_9.32.55_PM.png?1605209149",
        startDate: "12-04",
        endDate: "12-06",
        year: "2020-",
        deadline: "None",
        show: true
    },

];

export default hackathons;