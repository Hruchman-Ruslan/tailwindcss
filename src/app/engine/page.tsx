import Background from '@/components/background';
import Header from '@/components/header';
import MainContent from '@/components/main-content';
import NavBar from '@/components/nav-bar';

import engine from '/public/engine.jpg';

import content from '@/data/content.json';

export interface EngineProps {}

export default function Engine({}: EngineProps) {
  return (
    <>
      <Background src={engine} alt='Engine background' />
      <Header />
      <main>
        <MainContent text={content.text} title={content.title[2]} />
        <NavBar />
      </main>
    </>
  );
}
