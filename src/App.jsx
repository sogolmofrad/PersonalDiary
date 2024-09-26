import Form from "./components/Form";
import SingleDiary from "./components/SingleDiary";
import Home from "./pages/Home";


const diaries = [
  {
    title: "A Sunny Day at the Beach",
    mood: "Happy",
    weather: "Sunny",
    picture: "images/diary1.jpg",
    description:
      "Spent the whole day relaxing by the shore, soaking up the sun and enjoying the waves. A perfect summer day.",
  },
  {
    title: "Behtash's Magical Wedding Night",
    mood: "Happy",
    weather: "Clear Sky",
    picture: "images/diary2.jpg",
    description:
      "What a beautiful evening! The wedding was held under the stars with fairy lights twinkling above us. The bride and groom looked stunning, and their happiness was infectious. The night was filled with laughter, music, and dancing, and we all joined in to celebrate their love. The weather was perfect, with a clear sky and a gentle breeze. As the night came to a close, we watched the couple share their first dance, and it was a moment none of us will forget. An unforgettable night with dear friends.",
  },
  {
    title: "Bike Ride Day",
    mood: "excited",
    weather: "Cloudy",
    picture: "images/diary3.jpg",
    description:
      "The clouds hung low in the sky, but that didn’t stop me from hopping on my bike for an afternoon ride. The cool breeze was refreshing as I pedaled through winding roads and quiet paths. The overcast sky added a certain calmness to the surroundings, and the absence of the sun made it easier to ride longer. I explored new routes, taking in the subtle beauty of nature on a cloudy day. By the end of the ride, I felt energized, as if the clouds were a perfect companion for an adventurous outing.",
  },
  {
    title: "A Somber Farewell",
    mood: "Very Sad",
    weather: "Overcast",
    picture: "images/diary4.jpg",
    description:
      "Today was a heavy day. We gathered to say goodbye to a dear friend, and the weight of the loss was felt by everyone. The sky was overcast, mirroring the somber mood of the gathering. The service was simple but heartfelt, filled with memories and tears. As we stood by the graveside, the silence was punctuated only by the rustling of leaves in the wind. Despite the sadness, there was a sense of comfort in being together, honoring their life. It was a hard day, but also a reminder of how precious our time with each other truly is.",
  },

  {
    title: "A Fun Day Painting the Walls",
    mood: "Funny",
    weather: "Sunny",
    picture: "images/diary5.jpg",
    description:
      "Today was all about creativity! We spent hours painting vibrant colors and playful designs on the walls. With brushes in hand, we let our imaginations run wild, turning blank spaces into works of art. Laughter echoed through the room as we experimented with new ideas, sometimes making a mess, but enjoying every second of it. The sun poured through the windows, lighting up our masterpieces and filling the room with warmth. By the end of the day, we were covered in paint, but the walls looked incredible and we felt proud of what we created together.",
  },

  {
    title: "A Night Out with the Guys",
    mood: "Happy",
    weather: "Cloudy",
    picture: "images/diary6.jpg",
    description:
      "Tonight was all about good food and great company! We decided to try that new restaurant downtown, and it did not disappoint. The ambiance was warm and inviting, and we were seated at a cozy table under twinkling lights. We shared a variety of dishes, from savory appetizers to delicious desserts, each bite better than the last. Laughter filled the air as we reminisced about old times and made new memories. The cool night air added to the perfect evening, making it feel special. It’s moments like these that remind me how much I cherish my friends.",
  },
  {
    title: "A Day of Sightseeing Adventures",
    mood: "Excited",
    weather: "Partly Cloudy",
    picture: "images/diary7.jpg",
    description:
      "Today was a whirlwind of exploration! I set out early to visit some of the city's most iconic landmarks. The weather was partly cloudy, which kept the temperature comfortable for wandering around. I marveled at stunning architecture, took countless photos, and even stumbled upon a charming little café where I enjoyed a delicious pastry. Each stop was filled with new discoveries and a sense of wonder. I loved chatting with locals and learning about the history behind each site. As the day came to a close, I felt a sense of fulfillment and gratitude for the experiences and memories made.",
  },

  {
    title: "My Birthday Celebration",
    mood: "Very Happy",
    weather: "Sunny",
    picture: "images/diary8.jpg",
    description:
      "Today was my birthday, and it couldn't have been more perfect! The sun was shining, making everything feel vibrant and alive. I spent the day surrounded by family and friends, who showered me with love and surprises. We started with a brunch filled with my favorite dishes, followed by fun games and laughter. In the evening, we gathered for cake, and everyone sang 'Happy Birthday' as I blew out the candles. I felt so grateful for the wonderful people in my life and all the heartfelt wishes. It was a day full of joy, making memories that I'll cherish forever!",
  },

{
    title: "A Sunny Day at the Beach",
    mood: "Happy",
    weather: "Sunny",
    picture: "images/diary1.jpg",
    description:
      "Spent the whole day relaxing by the shore, soaking up the sun and enjoying the waves. A perfect summer day.",
  }
]

function App() {
  return (
    <>
      <Home />
      <Form />
      {/* <SingleDiary title={demoDiary.title} mood={demoDiary.mood} weather={demoDiary.weather} picture={demoDiary.picture} description={demoDiary.description}  /> */}
        <div className="flex flex-wrap">
          {diaries.map(entry =>  <SingleDiary key={entry.title} {...entry} />)}
        </div>
    </>
  );
}

export default App;
