import { FaGithub, FaLinkedinIn, FaWhatsapp, FaMeta } from "react-icons/fa6";
import { BiLogoNetlify, BiLogoTypescript } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaSass,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNextui,
  SiPlaycanvas,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiUdemy,
  SiVercel,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";

import {
  meta,
  udemy,
  casecobra,
  lexaz,
  littleLemon,
  canvex,
  meetu,
  appleIphone,
  brainWave,
  appleTV,
  nike,
  hiLink,
} from "../assets";

import { About } from "@/exports";
import Home from "@/components/content/home/Home";
import Certificates from "@/components/content/Certificates";
import Skills from "@/components/content/Skills";
import Projects from "@/components/content/projects/Projects";

export const navbar = [
  { id: "home", element: Home },
  { id: "about", element: About },
  { id: "certificates", element: Certificates },
  { id: "skills", element: Skills },
  { id: "projects", element: Projects },
] as const;

export const contacts = [
  {
    icon: FaGithub,
    url: "https://github.com/BR-BelalRezk",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/belalrezk/",
  },
  {
    icon: MdEmail,
    url: "mailto:belalrezk.developer@gmail.com",
  },
  {
    icon: FaWhatsapp,
    url: "https://wa.me/+201064467975",
  },
] as const;

export const certificates = [
  {
    label: "Meta Front-End Developer Specialization",
    icon: FaMeta,
    link: "https://www.credly.com/badges/e057636e-0b9c-4554-9480-80ba90937751/public_url",
    img: meta,
  },
  {
    label: "The Ultimate React Course: Jonas Schmedtmann",
    icon: SiUdemy,
    link: "https://ude.my/UC-cfa9b3b2-7683-49a0-b685-70cb2d43b1f0/",
    img: udemy,
  },
] as const;

export const skills = [
  {
    label: "HTML",
    icon: FaHtml5,
  },
  {
    label: "CSS",
    icon: FaCss3Alt,
  },
  {
    label: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    label: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    label: "Styled Components",
    icon: SiStyledcomponents,
  },
  {
    label: "Sass",
    icon: FaSass,
  },
  {
    label: "Javascript",
    icon: IoLogoJavascript,
  },
  {
    label: "Typescript",
    icon: BiLogoTypescript,
  },
  {
    label: "React.js",
    icon: FaReact,
  },
  {
    label: "React Router",
    icon: SiReactrouter,
  },
  {
    label: "Redux / RTK",
    icon: SiRedux,
  },
  {
    label: "React Query",
    icon: SiReactquery,
  },
  {
    label: "React Hook Form",
    icon: SiReacthookform,
  },
  {
    label: "Next.js",
    icon: SiNextdotjs,
  },
  {
    label: "Next / UI",
    icon: SiNextui,
  },
  {
    label: "Framer Motion",
    icon: TbBrandFramerMotion,
  },
  {
    label: "PlayCanvas",
    icon: SiPlaycanvas,
  },
  {
    label: "Git",
    icon: FaGitAlt,
  },
  {
    label: "Github",
    icon: FaGithub,
  },
  {
    label: "Netlify",
    icon: BiLogoNetlify,
  },
  {
    label: "Vercel",
    icon: SiVercel,
  },
] as const;

export const projects = [
  {
    label: "CaseCobra",
    desc: "Developed an E-commerce site for custom phone cases. User-friendly interface & stylish designs.",
    demo: "https://casecobra-br.vercel.app",
    img: casecobra,
  },
  {
    label: "Lexaz",
    desc: "Internal hotel management web app for desktop, serving a small boutique hotel with 8 cabins.",
    demo: "https://lexaz.vercel.app",
    img: lexaz,
  },
  {
    label: "Little Lemon",
    desc: "A Mediterranean restaurant, focusing on traditional recipes presented with a modern twist.",
    demo: "https://meta-littlelemon.vercel.app",
    img: littleLemon,
  },
  {
    label: "Canvex",
    desc: "A dynamic real-time collaboration platform like Figma, fostering teamwork and creativity.",
    demo: "https://canvex-figma.vercel.app",
    img: canvex,
  },
  {
    label: "MeetU",
    desc: "Streamlined Video Conferencing with Secure, Seamless Collaboration for Individuals & Businesses.",
    demo: "https://meetu-br.vercel.app",
    img: meetu,
  },
  {
    label: "iPhone 15",
    desc: "An animated landing page showcasing iPhone 15 in an elegant, modern 3D model.",
    demo: "https://appleiphone.vercel.app",
    img: appleIphone,
  },
  {
    label: "BrainWave",
    desc: "A modern landing page with stylish UI design, sleek parallax effects, and bento box layouts.",
    demo: "https://brainwave-br.vercel.app",

    img: brainWave,
  },
  {
    label: "Apple TV+",
    desc: "An animated landing page simulating scrolling for the Apple TV+ home page, utilizing framer motion.",
    demo: "https://appletv-br.vercel.app",
    img: appleTV,
  },
  {
    label: "Nike",
    desc: "A landing page for Nike with elegant, modern UI/UX design, capturing the essence of the brand.",
    demo: "https://nike-br.vercel.app",
    img: nike,
  },
  {
    label: "HiLink",
    desc: "A landing page for a travel mobile app with sleek, modern design and intuitive user experience.",
    demo: "https://hilink-br.vercel.app",
    img: hiLink,
  },
] as const;
