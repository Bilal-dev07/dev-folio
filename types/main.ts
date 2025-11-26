type skill = {
  name: string;
  image: string;
  category: string;
};

type project = {
  name: string;
  image: string;
  subtitle?: string;
  description?: string;
  achievements?: string[];
  technologies?: string[];
  category: string;
  techstack?: string;
  links: {
    visit: string;
    code: string;
    video: string;
  };
};

type experience = {
  duration: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  desc: string[];
};

type education = {
  institute: string;
  degree: string;
  startDate: string;
  endDate: string;
  desc: string[];
};

type main = {
  name: string;
  gmail: string;
  linkedIn: string;
  github: string;
  phone: string;
  titles: string[];
  shortDesc: string;
  opportunity: string;
  location: string;
  coffeeLabel: string;
  heroImage: string;
  techStackImages: string[];
  tags: string[];
};

type social = {
  name: string;
  icon: string;
  link: string;
};

type about = {
  title: string;
  summary: string;
  currentFocus: string[];
  achievements: string[];
};

type achievements = {
  icon: string;
  title: string;
  desc: string;
  metrics: string[];
  accent: string;
  bullet: string;
};

type data = {
  main: main;
  about: about;
  skills: skill[];
  projects: project[];
  experiences: experience[];
  educations: education[];
  contact: contact;
  achievements: achievements[];
};

type contact = {
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
};

export type {
  data,
  main,
  about,
  skill,
  project,
  experience,
  education,
  social,
  contact,
  achievements,
};
