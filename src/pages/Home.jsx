import Diaries from "../components/Diaries";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <main className="main w-[90%] flex mx-auto relative h-[75vh] gap-[3rem] justify-center items-center">
        <img
          src="images/border-image-vertical.png"
          alt="border-right"
          className="absolute left-0 h-[95%]"
        />
        <Diaries />
        <img
          src="images/border-image-vertical.png"
          alt="border-right"
          className="absolute right-0 h-[95%]"
        />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
