import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <main className="main w-[90%] flex mx-auto relative h-[85vh]">
        <img
          src="images/border-image-vertical.png"
          alt="border-right"
          className="absolute left-0 h-[95%]"
        />
        <img
          src="images/border-image-vertical.png"
          alt="border-right"
          className="absolute right-0 h-[95%]"
        />
      </main>
    </div>
  );
}

export default Home;
