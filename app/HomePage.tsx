'use client';
import { data } from '@/types/main';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/projects/Projects';
import Experiences from '@/components/experiences/Experiences';
import Contact from '@/components/Contact';
import Header from './Header';
import Footer from './Footer';
import KeyAchievements from '@/components/KeyAchievements';
import EducationList from '@/components/education/EducationList';

interface Props {
  data: data;
}

const HomePage = ({ data }: Props) => {
  return (
    <>
      <Header logo={data.main.name} />
      <Hero mainData={data?.main} />
      <About aboutData={data.about} />
      <Skills skillData={data.skills} />
      <Experiences experienceData={data.experiences} />
      <Projects projectsData={data.projects} />
      <EducationList educationData={data.educations} />
      <KeyAchievements />
      <Contact contactData={data.contact} />
      <Footer name={data.main.name} />
    </>
  );
};

export default HomePage;
