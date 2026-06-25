import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/neet/online-coaching-class-11" element={<Class11Program />}
          />
          <Route
            path="/neet/online-coaching-class-12" element={<Class12Program />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Landing() {
  return <div>Welcome to NEET</div>;
}

function Class11Program() {
  return <div>NEET Programs for class 11th</div>;
}

function Class12Program() {
  return <div>NEET Programs for class 12th</div>;
}

export default App;