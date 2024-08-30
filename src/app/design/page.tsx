import Background from '@/components/background';
import Header from '@/components/header';
import MainContent from '@/components/main-content';
import NavBar from '@/components/nav-bar';

import design from '/public/design.jpg';

import content from '@/data/content.json';

export interface DesignProps {}

export default function Design({}: DesignProps) {
  return (
    <>
      <Background src={design} alt='Design background' />
      <Header />
      <main>
        <MainContent text={content.text} title={content.title[0]} />
        <NavBar />
      </main>
    </>
  );
}
