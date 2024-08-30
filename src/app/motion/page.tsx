import Background from '@/components/background';
import Header from '@/components/header';
import MainContent from '@/components/main-content';
import NavBar from '@/components/nav-bar';

import motion from '/public/motion.jpg';

import content from '@/data/content.json';

export interface MotionProps {}

export default function Motion({}: MotionProps) {
  return (
    <>
      <Background src={motion} alt='Motion background' />
      <Header />
      <main>
        <MainContent text={content.text} title={content.title[1]} />
        <NavBar />
      </main>
    </>
  );
}
