/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import { designs } from "./designs";

export { designs };

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Judy Zhu",
  title: "Hi！ I'm Judy",
  subTitle: emoji(
    "Content marketing specialist who creates viral content that converts - including TikTok content with 500K+ views. Experienced across healthcare and fashion industries, with expertise in marketingng campaign, SEO content creation, social media strategy, and performance analytics. 📊💡",
  ),
  resumeLink:
    "https://drive.google.com/file/d/12SsoAdr7N8iGI2f5cWnAzqo5xYI34Ar2/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/ziyue-zhu/",
  gmail: "judyzhu640@gmail.com",
  github: "https://github.com/judyzhu640/judyzhu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Marketing strategies built on insight, creativity, and data 📈",
  skills: [
    emoji("⚡ Content strategy development and editorial calendar planning"),
    emoji(
      "⚡ SEO-optimized blog writing, video scripts, and long-form content creation",
    ),
    emoji("⚡ Social media content creation and cross-platform storytelling"),
    emoji(
      "⚡ Email marketing campaigns, newsletter design & A/B testing (Mailchimp)",
    ),
    emoji("⚡ Video content planning and TikTok viral content creation"),
    emoji(
      "⚡ Performance tracking and content optimization using data insights",
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Google Analytics",
      fontAwesomeClassname: "fas fa-chart-line",
    },
    {
      skillName: "Google Ads",
      fontAwesomeClassname: "fas fa-table",
    },
    {
      skillName: "HubSpot",
      fontAwesomeClassname: "fas fa-pencil-ruler",
    },
    {
      skillName: "Salesforce",
      fontAwesomeClassname: "fas fa-cloud",
    },
    {
      skillName: "Mailchimp",
      fontAwesomeClassname: "fas fa-envelope",
    },
    {
      skillName: "PhotoShop",
      fontAwesomeClassname: "fab fa-instagram",
    },
    {
      skillName: "Illustrator",
      fontAwesomeClassname: "fas fa-paint-brush",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Boston University",
      logo: require("./assets/images/BUlogo.png"),
      subHeader: "Master of Science in Journalism",
      duration: "September 2023 - May 2025",
      desc:
        "Ranked top 10% in the Program. Took course about email marketing and graphic design. Founded a weekly newsletter focused on women-centered content and digital trends.",
      descBullets: [
        "Designed logos and visuals in Photoshop. Wrote trending but brand-aligned content.",
        "Optimized campaigns through A/B testing and audience engagement",
      ],
    },
    {
      schoolName: "University of Nottingham",
      logo: require("./assets/images/UNNClogo.png"),
      subHeader: "Bachelor of Arts with Honours in International Studies",
      duration: "September 2019 - April 2023",
      desc:
        "Organized over 10 alumi events as Alumi Association President. Founded Gen-Z modeling cultural brand",
      descBullets: [
        "Led digital marketing at Modex, executing multi-channel campaigns that reached 20M+ users and drove 640K+ engagements",
        "Secured corporate sponsorships and partnered with local businesses to launch exclusive alumni discount programs",
        "Designed event materials and communication assets to align with brand identity and drive engagement",
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Viral Content", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "SEO/Social Media Management",
      progressPercentage: "70%",
    },
    {
      Stack: "Graphic Design",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Marketing Coordinator",
      company: "Modex",
      companylogo: require("./assets/images/Modexlogo.png"),
      date: "Sep 2020 – June 2023",
      descBullets: [
        "Collaborated with model and operation teams to develop and execute multi-channel marketing strategies, managing project lifecycles from initial planning through performance optimization",
        "Coordinated partnership initiatives with major brands (Peacebird, Boy London), managing relationship development, contract negotiations, and collaborative promotional activities to increase market visibility",
        "Supervised creation of 30+ marketing materials and brand communications, ensuring consistency with brand standards while achieving 20M+ cumulative reach and 640K+ engagements",
      ],
    },
    {
      role: "Event Coordinator",
      company: "Nottingham Alumni Association",
      companylogo: require("./assets/images/NAAN.png"),
      date: "Sep 2020 – June 2022",
      descBullets: [
        "Coordinated large-scale events including Alumni Homecoming and Alumni Wedding from concept to completion, managing logistics, vendor coordination, and attendee experience for 1000+ participants",
        "Secured corporate sponsorships generating 4000+ RMB in event funding, negotiated vendor contracts, and established partnerships with local businesses for exclusive alumni discount programs",
        "Facilitated cross-department communication and collaboration with university administration, students, alumni network, and PR teams to ensure seamless event execution",
      ],
    },
    {
      role: "Digital Marketing Intern",
      company: "Ruder Finn",
      companylogo: require("./assets/images/rflogo.png"),
      date: "June 2021 – Sep 2021",
      descBullets: [
        "Coordinated marketing proposal development for high-profile client engagements including China International Import Expo, supporting account teams with research and presentation preparation",
        "Conducted comprehensive competitive analysis and market research projects, collaborating with senior strategists to develop client positioning strategies and campaign recommendations",
        "Assisted with project management tasks including content calendar coordination and campaign execution support, maintaining client communication records and preparing presentation materials",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Project",
  subtitle: "A weekly newsletter by myself",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Pink World",
      projectDesc:
        "A self-initiated weekly newsletter spotlighting women-centered stories, trends, and voices in digital media. I conceptualized, wrote, designed, and distributed each edition independently, applying end-to-end email marketing strategies using Mailchimp",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mailchi.mp/752dcc397dbe/pink-world",
        },
        //  you can add extra buttons here.
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Digital Marketing & E-commerce",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
      ],
    },
    {
      title: "Google Ads",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "Google Analytics",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let’s Connect 📩"),
  subtitle:
    "I’m currently open to full-time opportunities in marketing, especially in digital strategy, content creation, and email campaigns. Feel free to reach out if you think we’d be a good fit.",
  number: "+1 572-528-0711",
  email_address: "judyzhu640@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// Marketing Cases Section - 在export之前添加这段代码
const marketingCases = {
  title: "Marketing Cases",
  subtitle: "Real-world marketing campaigns delivering measurable results",
  cases: [
    {
      id: 1,
      title: "Pink World Newsletter",
      subtitle: "Gen Z-Focused Email Marketing Strategy",
      description:
        "Developed and executed a comprehensive email marketing strategy for a Gen Z-targeted newsletter. Focused on cultural trends and engaging content to build a loyal subscriber base while optimizing campaign performance through data-driven insights and A/B testing methodologies.",
      tags: [
        "Email Marketing",
        "Gen Z Engagement",
        "Content Strategy",
        "A/B Testing",
      ],
      results: [
        { metric: "Click-through Rate Increase", value: "20%" },
        { metric: "Subscriber Growth (3 weeks)", value: "100+" },
        { metric: "Weekly Content Consistency", value: "100%" },
      ],
      images: [
        require("./assets/images/case1-img1.png"),
        require("./assets/images/case1-img2.png"),
        require("./assets/images/case1-img3.png"),
        require("./assets/images/case1-img4.png"),
        require("./assets/images/case1-img5.png"),
      ],
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 2,
      title: "Modex Social Media Campaign",
      subtitle: "Viral Content & Brand Partnership Strategy",
      description:
        "Led comprehensive social media marketing strategy for fashion startup, managing full content pipeline from ideation to post-production. Focused on short-form video content for TikTok and Xiaohongshu (RED), while developing strategic partnerships with major fashion brands to amplify reach and engagement.",
      tags: [
        "Social Media",
        "Video Production",
        "Brand Partnerships",
        "Viral Marketing",
      ],
      results: [
        { metric: "Total Video Views", value: "20M+" },
        { metric: "Engagement Interactions", value: "640K+" },
        { metric: "Single Campaign Reach", value: "500K+" },
      ],
      images: [
        require("./assets/images/case2-img1.png"),
        require("./assets/images/case2-img2.png"),
        require("./assets/images/case2-img3.png"),
      ],
      color: "from-pink-500 to-orange-500",
    },
    {
      id: 3,
      title: "Milford Daily News SEO Strategy",
      subtitle: "Local Journalism with High Search Impact",
      description:
        "As a content intern, I created and optimized SEO-friendly local news stories that boosted the publication’s digital performance. My work directly contributed to higher search visibility and greater community engagement on town-specific articles.",
      tags: [
        "SEO Optimization",
        "Content Writing",
        "Analytics",
      ],
      results: [
        { metric: "SEO Articles Published", value: "10+" },
        { metric: "Google First-Page Ranking", value: "10+" },
        { metric: "Avg. Session Duration Growth", value: "15%" },
      ],
      images: [
        require("./assets/images/case3-img1.png"),
        require("./assets/images/case3-img2.png"),
        require("./assets/images/case3-img3.png"),
      ],
      color: "from-blue-500 to-teal-600",
    },
  ],
  display: true,
};

export {
  achievementSection,
  bigProjects,
  blogSection,
  contactInfo,
  educationInfo,
  greeting,
  illustration,
  isHireable,
  marketingCases,
  openSource,
  podcastSection,
  resumeSection,
  skillsSection,
  socialMediaLinks,
  splashScreen,
  talkSection,
  techStack,
  twitterDetails,
  workExperiences,
};
