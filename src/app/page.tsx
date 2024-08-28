import Header from '@/components/header';
import MainContent from '@/components/main-content';
import NavBar from '@/components/nav-bar';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainContent
          text='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
          title='DESIGN'
        />
        <NavBar />
      </main>
    </>
  );
}
