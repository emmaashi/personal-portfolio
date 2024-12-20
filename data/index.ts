export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const articles = [
  {
    id: 1,
    title: "University of Waterloo",
    description: "Read about the experiences that led me to the University of Waterloo's Computer Science program.",
    img: "/uw.webp",
    link: "https://uwaterloo.ca/news/meet-waterloos-2024-schulich-leaders",
  },
  {
    id: 2,
    title: "Schulich Leader",
    description: "Selected as 1 of 100 recipients of Canada's largest undergraduate STEM scholarship.",
    img: "/schulich.png",
    link: "https://schulichleaders.com/scholars/emmashi/",
  },
  {
    id: 3,
    title: "Shad Canada",
    description: "The crossover of STEAM and Entrepreneurship: how I used my passion to empower underrepresented communities and inspire others to harness their potential.",
    img: "/shad-schulich.png",
    link: "https://www.shad.ca/celebrating-the-shad-alum-named-2024-schulich-leaders-emma-shi/",
  },
];

export const projects = [
  {
    id: 1,
    title: "compile.",
    des: "Predictive model trained to analyze historical data and forecast cancer progression. Built using Python, Flask, React, SEER API, Pandas, Plotly, and Javascript.",
    img: "/compile.png",
    iconLists: ["/py.svg", "/re.svg", "/js.svg"],
    date: "November 2024"
  },
  {
    id: 2,
    title: "DAG",
    des: "Using Next.js, MongoDB, Cohere, Tailwind CSS, Flow, React, Syro, and Solana, my team and I created DAG, a one-of-a-kind platform that allows for decentralized data aggregation across all of machine learning. This project won 'Best use of Solana' and 'Best use of Flow' at Hack the North 2023, North America's largest hackathon.",
    img: "/dag.png",
    iconLists: ["/re.svg", "/mongo.svg", "/solana.svg", "/next.svg", "/figma.svg"],
    link: "https://devpost.com/software/dag.com",
    date: "Hack the North 2023"
  },
  {
    id: 3,
    title: "Optimed",
    des: "Aimed at mitigating patient wait times and extending healthcare support to marginalized communities in remote areas.",
    img: "/optimed.png",
    iconLists: ["/html.svg", "/tail.svg", "/js.svg"],
    link: "https://optimed.falsebrb.repl.co/",
    date: "Shad Canada 2022"
  },
  {
    id: 4,
    title: "Nightlight",
    des: "Addressing and ensuring the safety of women+ when taking public transport at night. The inspiration behind ‘nightlight’ stemmed from the fear of taking public transportation systems, like the TTC, alone.",
    img: "/nightlight.png",
    iconLists: ["/html.svg", "/tail.svg", "/js.svg", "/figma.svg"],
    link: "https://devpost.com/software/nightlight-64g8wc",
    date: "Technova 2022"
  },
  {
    id: 5,
    title: "FireCAST",
    des: "FIREcast leverages AI to forecast fire risks in geographical regions. The purpose of the tool is to empower communities with actionable insights to allocate resources and implement proactive strategies for wildfire prevention.",
    img: "/firecast.png",
    iconLists: ["/html.svg", "/tail.svg", "/js.svg", "figma.svg"],
    link: "https://devpost.com/software/firecast",
    date: "Hack the 6ix 2023"
  },

  {
    id: 6,
    title: "Amazing Labyrinth",
    des: "Strategic maze game where players navigate through shifting pathways to find treasures. This version includes features like shortest path and animations to enhance the gaming experience.",
    img: "/labyrinth.png",
    iconLists: ["/java.svg", "/figma.svg"],
    link: "https://github.com/emmaashi/amazing-labyrinth",
    date: "March 2024"
  },

  {
    id: 7,
    title: "Settlemize",
    des: "Settlemize remains steadfast to optimizing the settlement process for immigrants coming to Canada through the abundance of user-friendly tools that our application has to offer!",
    img: "/settlemize.png",
    iconLists: ["/figma.svg"],
    link: "https://devpost.com/software/settlemize-byg3pn",
    date: "Hack the 6ix 2022"
  },

  {
    id: 8,
    title: "Divvy",
    des: "Divvy is a project management tool designed to streamline the process of distributing tasks within a group or team, particularly catering to school group projects. The tool provides features for task management, user performance tracking, and project planning.",
    img: "/divvy.png",
    iconLists: ["/java.svg", "/sql.svg", "/figma.svg"],
    link: "https://github.com/emmaashi/divvy",
    date: "June 2024"
  },
  {
    id: 9,
    title: "Newsflix",
    des: "Removing the bias from media, ensuring that young readers have access to holistic, reliable information regarding current world issues.",
    img: "/Newsflix.png",
    iconLists: ["/re.svg", "/py.svg", "/tail.svg", "/postman.svg", "/figma.svg"],
    link: "https://devpost.com/software/newsflix",
    date: "Hack the 6ix 2024"
  },

  {
    id: 10,
    title: "Crime Map Canada",
    des: "Crime Map leverages data mining from the Ontario provincial website to evaluate crime severity across various cities and provinces in Canada.",
    img: "/crime.png",
    iconLists: ["/java.svg", "/figma.svg"],
    link: "https://github.com/emmaashi/crime-map-canada",
    date: "April 2024"
  },
  {
    id: 11,
    title: "Traura.Ai",
    des: "Combining speech recognition with semantic similarity models, Traura.ai gamifies your everyday conversations to produce your 'aura' score.",
    img: "/traura.png",
    iconLists: ["re.svg", "py.svg", "tail.svg", "/figma.svg"],
    link: "https://devpost.com/software/traura",
    date: "Hack the North 2024"
  },
];

export const workExperience = [ 
  {  
    id: 1,
    title: "ML/Backend Engineer \n @ Wat Street",
    desc: "Developing infrastructure to support the scaling of ML models in quantitative finance applications.",
    className: "md:col-span-2", 
    thumbnail: "/watstreet.jpeg",
  },
  {
    id: 2,
    title: "Software Engineer Intern \n @ Ply Health (YC S24)",
    desc: "Helping practices get in network with payers. Worked with TypeScript, Supabase, React, Next.js, Vercel, and Git during the development process.",
    className: "md:col-span-2",
    thumbnail: "/ply.jpeg",
  },
  {
    id: 3,
    title: "Program Assistant \n @ Shad Canada",
    desc: "Coordinated activities, supported program operations, and mentored 120 students at the Ontario Tech University campus.",
    className: "md:col-span-2", 
    thumbnail: "/shad.png",
  },
  {
    id: 4,
    title: "Assistant Teacher \n @ Spirit of Math",
    desc: "Enhanced the learning experience of students in grade 1, 2, 5, 6, 9, and 10 by aiding in the delivery of advanced math curriculum.",
    className: "md:col-span-2",
    thumbnail: "/som.png",
  },
];

export const contact = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://linkedin.com/in/emma-shi",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/eemmashi",
  },
  {
    id: 3,
    img: "/git.svg",
    link: "https://github.com/emmaashi",
  },
];
