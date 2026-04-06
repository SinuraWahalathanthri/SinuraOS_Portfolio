const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Oct 5, 2025",
        title:
            "Ceylon Xzora make it to the Global Top 40 of the NASA Space Apps Challenge 2025. 🚀",
        image: "/images/blog1.png",
        link: "https://www.linkedin.com/posts/sinuraw_ceylon-xzora-to-the-global-top-40-finalists-activity-7402186097767878656-ZoLp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOznloBFWzts0ZydiDMHLqnfSIuiFiswys",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "Excited to share that our team Xzora emerged Champions at our very first hackathon — Hacktivate '25, hosted by NSBM Green University 🎉",
        image: "/images/blog2.png",
        link: "https://www.linkedin.com/posts/sinuraw_excited-to-share-that-our-team-xzora-emerged-activity-7381007496267718656-w72J?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOznloBFWzts0ZydiDMHLqnfSIuiFiswys",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS", "ShadeCN"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Java", "Python"],
    },
    {
        category: "Database",
        items: ["MongoDB", "MySQL", "Firebase", "Supabase"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker", "Cloudinary", "AWS"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/SinuraWahalathanthri",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://sinurawahalathanthri.com/",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/Sinura_SW",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/sinuraw/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.jpeg",
    },
    {
        id: 2,
        img: "/images/gal2.jpeg",
    },
    {
        id: 3,
        img: "/images/gal3.jpeg",
    },
    {
        id: 4,
        img: "/images/gal4.jpeg",
    },
    {
        id: 5,
        img: "/images/gal5.jpeg",
    },
    {
        id: 6,
        img: "/images/gal6.jpeg",
    }, {
        id: 7,
        img: "/images/gal7.jpeg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Weatherly - NASA Global Finalist App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Weatherly Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Weatherly is a modern weather prediction application built with React that uses NASA climate and atmospheric data to forecast weather patterns.",
                        "Instead of only showing current weather, Weatherly analyzes historical climate data and trends to predict weather conditions years into the future.",
                        "Users can explore long-term temperature, rainfall, and climate forecasts through a clean and interactive interface.",
                        "The project focuses on data visualization, predictive analytics, and building a user-friendly dashboard for climate insights.",
                    ],
                },
                {
                    id: 2,
                    name: "github.com/weatherly",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/SinuraWahalathanthri/weatherly",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "weatherly.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.jpeg",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "UniLink - Hacktivate 1st Place",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "UniLink.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "UniLink is a university social media platform built using React Native (Expo) and React Web to connect students and lecturers in one digital space.",
                        "Students can share updates, ask academic questions, communicate with lecturers, and stay updated with university events and announcements.",
                        "Instead of using multiple platforms like WhatsApp or email, UniLink centralizes communication into one dedicated university network.",
                        "The system includes mobile and web applications, real-time updates, and a clean social media style interface designed specifically for university communities.",
                    ],
                },
                {
                    id: 2,
                    name: "github.com/unilink",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/SinuraWahalathanthri/uni-link",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "unilink.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.jpg",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "VentureLink - Crowfunding App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "VentureLink.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "VentureLink is a crowdfunding and investment platform designed to connect Sri Lankan SMEs with potential investors.",
                        "Small and medium businesses can publish their business ideas, funding needs, and growth plans on the platform for investors to review.",
                        "Investors can browse businesses, analyze opportunities, and commit investments to help SMEs grow while earning returns.",
                        "The platform aims to solve the funding gap problem faced by SMEs by creating a digital bridge between entrepreneurs and investors.",
                    ],
                },
                {
                    id: 2,
                    name: "VentureLink.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/SinuraWahalathanthri/VentureLink",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "VentureLink.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.jpg",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/sinura.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/sinura-2.png",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/gal4.jpeg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/sinura.jpg",
            description: [
                "Hey! I’m Sinura 👋, a 14-year-old aspiring software engineer passionate about building cool and useful tech.",
                "I’m currently pursuing my higher studies in software engineering and love working with modern technologies like JavaScript, React, and mobile app development.",
                "I enjoy creating clean, interactive UIs and learning how real-world apps are built—from design to deployment.",
                "When I’m not coding, I’m usually experimenting with new ideas, improving my projects, or diving deeper into the world of tech 🚀",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        // {
        //     id: 1,
        //     name: "trash1.png",
        //     icon: "/images/image.png",
        //     kind: "file",
        //     fileType: "img",
        //     position: "top-10 left-10",
        //     imageUrl: "/images/trash-1.png",
        // },
        // {
        //     id: 2,
        //     name: "trash2.png",
        //     icon: "/images/image.png",
        //     kind: "file",
        //     fileType: "img",
        //     position: "top-40 left-80",
        //     imageUrl: "/images/trash-2.png",
        // },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };