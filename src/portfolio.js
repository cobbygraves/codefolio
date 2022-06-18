/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ernest Amoah",
  title: "Hi, I'm Cobby",
  subTitle: emoji(
    "An experienced MERN stack developer who develops web, mobile and desktop applications using JavaScript, ReactJS, NextJS, ElectronJS, React-Native, Node, ExpressJS & other UI libraries"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1l4zEYOW2VF6MUGAMCcgfWwDZ7scky5US/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/cobbygraves",
  gmail: "rmeocnis@gmail.com",
  twitter: "https://twitter.com/C0DESCRIPT",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
}

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "A SELF TAUGHT FULL STACK WEB, MOBILE & DESKTOP APPLICATION DEVELOPER WHO IS OPEN TO NEW IDEAS OF TECHNOLOGY",
  skills: [
    emoji(
      "⚡ Create highly interactive Front End / User Interfaces for your web, mobile and desktop applications"
    ),
    emoji(
      "⚡ Develop highly responsive backend server with Node, Express and MongoDB "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fab fa-envira"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Ghana, Legon",
      logo: require("./assets/images/UGLOGO.jpg"),
      subHeader: "Bachelor of Science in Computer Science and Physics",
      duration: "September 2008 - May 2012",
      desc: "Took courses in Computer Programming and Physics",
      descBullets: [
        "Java Programming",
        "C++ Programming",
        "SQL Database Administration",
        "Electromagnetism I & II",
        "Computer Hardware",
        "Data Structures"
      ]
    },
    {
      schoolName: "Ghana Secondary Technical School",
      logo: require("./assets/images/gsts.jpg"),
      subHeader: "Technical Engineering",
      duration: "September 2004 - April 2007",
      desc: "Wrote the West Africa Secondary School Certificate Exam and passed all eight subject",
      descBullets: [
        "English",
        "Core Mathematics",
        "Integrated Science",
        "Social Studies",
        "Elective Mathematics",
        "Physics",
        "Chemistry",
        "Technical Drawing"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "98%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "ICT Teacher",
      company: "Ghana Education Service",
      companylogo: require("./assets/images/ges.png"),
      date: "September 2015 – Present",
      desc: "Teaches ICT at all levels in Benso Senior High School, with over 200 students and also manages the IT laboratory and its infrastructure"
    },
    {
      role: "Regional Facilitator",
      company: "Ghana Statistical Service",
      companylogo: require("./assets/images/gss.jpg"),
      date: "June 2021 – July 2021",
      desc: "Trained 45 field officers on the usage of technological gadgets and also enumerated a population of about 2000 during the 2021 population and housing census in Ghana"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects and Certificates",
  subtitle:
    "Major projects built for companies and coding certificate obtained",
  projects: [
    {
      image: require("./assets/images/expressmed.jpg"),
      projectName: "ExpressMed",
      projectDesc:
        "Website for a preventive healthcare organization powered by technology and actively providing healthcare services to over 1700 clients in Ghana",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://expressmedgh.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/rudiachemicals.png"),
      projectName: "Rudia Chemicals",
      projectDesc:
        "An electron desktop database application for a pharmaceutical company to manage sales and stocks of pharmaceutical products",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/cobbygraves/pharmacy.git"
        }
      ]
    },
    {
      image: require("./assets/images/MERN.PNG"),
      projectName: "MERN Certificate",
      projectDesc:
        "Certificate of completion of Full Stack MERN developer course on Udemy with instructor Maximillian Schwarzmuller & Manuel Lorenz",
      footerLink: [
        {
          name: "View Course",
          url: "https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/REACT.PNG"),
      projectName: "REACT Certificate",
      projectDesc:
        "Certificate of completion of React FrontEnd developer course on Udemy with instructor Maximillian Schwarzmuller",
      footerLink: [
        {
          name: "View Course",
          url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blog Posts",
  subtitle:
    "I love to write and teach others what I have learnt since I'm also a teacher",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://dev.to/codescript/class-component-vs-functional-componentlifecycle-methods-1kcl",
      title: "Class Component Vs Functional Component Lifecyle Methods",
      description:
        "This is to differentiate between how to implement react lifecyle methods in both functional and class based component"
    },
    {
      url: "https://dev.to/codescript/demystifying-props-in-react-components-17ei",
      title: "Demystifying Props In React Component",
      description: "The purpose and usage of props in a react component"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+233 206 881 133",
  email_address: "rmeocnis@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "C0DESCRIPT", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
