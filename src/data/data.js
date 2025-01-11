import {
  FaLaptopCode
} from "react-icons/fa";
import {
  GrVmMaintenance
} from "react-icons/gr";
import {
  RiRobot2Line
} from "react-icons/ri";
import {
  TbDeviceMobileCog
} from "react-icons/tb";

export const DATA = {
  header: {
    companyName: "ArchiSoft",
    navigation: {
      home: {
        label: "Home",
        href: "#home"
      },
      about: {
        label: "About",
        href: "#about"
      },
      services: {
        label: "Services",
        href: "#services"
      },
      methodology: {
        label: "Development Methodology",
        href: "#development-methodology"
      },
      projects: {
        label: "Case Studies",
        href: "#projects"
      },
      testimonials: {
        label: "Testimonials",
        href: "#testimonials"
      },
      contactUs: {
        label: "Contact Us",
        href: "#contact-us"
      }
    },
  },
  mainSection: {
    title: "Custom software solutions for your business",
    description: "We develop customized software and automation for companies, combining technical expertise with a genuine care for your success."
  },
  servicesSection: {
    subtitle: "Our Services",
    title: "Custom Software Development",
    description: "Turn your business requirements into an evolving product that attracts customers and generates new revenue streams. Our team can help you design, develop, test and maintain solutions across all digital channels.",
    services: [{
        icon: FaLaptopCode,
        colorIconContainer: "#E2E2E2",
        title: "Custom Software Development",
        description: "Turn your business requirements into an evolving product that attracts customers and generates new sources of income. Our team can help you design, develop, test, and maintain solutions across all digital channels."
      },
      {
        icon: TbDeviceMobileCog,
        colorIconContainer: "#FF4646",
        title: "Mobile Applications",
        description: "We develop mobile applications tailored to your business needs, offering intuitive interfaces and seamless user experiences."
      },
      {
        icon: GrVmMaintenance,
        colorIconContainer: "#8EEA77",
        title: "Maintenance and Support",
        description: "We provide ongoing support and maintenance to ensure your software continues to operate smoothly and efficiently."
      },
      {
        icon: RiRobot2Line,
        colorIconContainer: "#FFB21A",
        title: "Artificial Intelligence",
        description: "We integrate AI solutions to automate processes, improve decision-making, and drive innovation within your business."
      }
    ]
  },
  developmentStages: {
    title: "The Stages of Our Software Development",
    stages: [{
        number: "01",
        title: "Discovery",
        description: "Every project starts with workshops to explain the context, set objectives, and create a feature backlog. This allows our team to gather, validate, and prioritize your requirements and product ideas."
      },
      {
        number: "02",
        title: "Ideation and Wireframing",
        description: "We generate ideas and create wireframes to visualize the user experience and ensure alignment with your goals."
      },
      {
        number: "03",
        title: "Product Development",
        description: "In this phase, our team creates a prototype and tests it with end users using Design Sprints, Event Storming, Game Storming, and other proven methodologies. We use agile methods to develop a Minimum Viable Product, ensuring high quality, reliable stability, and easy maintenance."
      },
      {
        number: "04",
        title: "Delivery and Support",
        description: "We launch your solution, ensuring its proper functionality with final tests, personalized training, and ongoing support to guarantee long-term success."
      }
    ]
  },
  portfolioSection: {
    subtitle: "Our Portfolio",
    title: "Case Studies",
    description: "We have worked with leading companies in various sectors to create innovative solutions.",
    projects: [
      {
        name: "LinkFeat",
        imageUrl: "/partners/linkfeat.jpg",
        description: "Empowering artists with AI-driven voice cloning for seamless musical collaborations and revenue sharing."
      },
      {
        name: "Natigup",
        imageUrl: "/partners/natigu.jpg",
        description: "Elevating special moments with exclusive dress rental and sales services in Cuenca."
      },
      {
        name: "BeXR Technology",
        imageUrl: "/partners/bexr.jpg",
        description: "Revolutionizing entertainment with cutting-edge VR, AR, and XR experiences for games and fan engagement."
      },
      {
        name: "PortalConsulta",
        imageUrl: "/partners/portalconsulta.jpg",
        description: "Transforming customer feedback management with smart QR solutions to boost your online reputation."
      }
    ]
  },
  testimonialSection: {
    subtitle: "Testimonial",
    title: "People Talk About Us",
    testimonials: [
      {
        name: "Eugenio",
        position: "Co-owner of PortalConsulta",
        imageUrl: "/logos/logo-portalconsulta.webp",
        text: "Working with this team has transformed how we manage customer feedback. Their innovative solutions have boosted our online reputation and streamlined internal processes."
      },
      {
        name: "Raymundo Alvarado",
        position: "Development Coordinator at BeXR",
        imageUrl: "/logos/logo-bexr.jfif",
        text: "We've worked closely with this team on various projects, and their support has been crucial for the success of our VR and AR initiatives. Their expertise and collaboration have exceeded our expectations every time."
      },
      {
        name: "Edgardo González",
        position: "CEO of LinkFeat",
        imageUrl: "/logos/logo-linkfeat.png",
        text: "Their work has been invaluable in advancing our AI-driven solutions. Their dedication and deep understanding of our needs have played a key role in bringing our vision to life, making them an essential part of our team."
      },
      // {
      //   name: "Raymundo Alvarado",
      //   position: "Development Coordinator at BeXR",
      //   imageUrl: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      //   text: "The team's expertise in VR and AR has been a game-changer for our projects. Their dedication and innovation consistently exceed our expectations."
      // },
      // {
      //   name: "Edgardo González",
      //   position: "CEO of LinkFeat",
      //   imageUrl: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      //   text: "Their cutting-edge AI solutions have revolutionized the way we approach musical collaborations. The results have been phenomenal."
      // },
    ]
  },
  contactSection: {
    title: "Interesting Collaboration With Us?",
    description: "Let's talk about your project and building a team that scales to your growth, speeds up your software delivery and matches your culture.",
    contactButtonText: "Contact Us"
  },
  footer: {
    text: "© ArchiSoft 2025"
  }
};