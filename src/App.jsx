import { useState } from "react";
import Form from "./components/Form";
import Home from "./pages/Home";

function App() {
  const [diaryUpdate, setDiaryUpdate] = useState(0);
  return (
    <>
      <Home diaryUpdate={diaryUpdate} />
      <Form onFormSubmit={() => setDiaryUpdate(diaryUpdate + 1)} />
    </>
  );
}

export default App;
