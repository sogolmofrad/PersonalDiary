import Diaries from "../components/Diaries";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home({ diaryUpdate }) {
  return (
    <div>
      <Header />
      <main className="main w-[90%] flex mx-auto relative h-[75vh] gap-[3rem] justify-center items-center">
        <img
          src="images/border-image-vertical.png"
          alt="border-right"
          className="absolute left-0 h-full"
        />
        <Diaries diaryUpdate={diaryUpdate} />
        <img
          src="images/border-image-vertical.png"
          alt="border-right"
          className="absolute right-0 h-full"
        />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
