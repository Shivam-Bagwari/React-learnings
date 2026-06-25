import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <a href="/">ALLEN</a>
      <br />
      <a href="/neet/online-coaching-class-11">Class 11</a>
      <br />
      <a href="/neet/online-coaching-class-12">Class 12</a> */}


      <BrowserRouter>
        <Link to="/">ALLEN</Link>
        <br />
        <Link to="/neet/online-coaching-class-11">Class 11</Link>
        <br />
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
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
  return <div>Welcome to ALLEN</div>;
}

function Class11Program() {
  return <div>NEET Programs for class 11th</div>;
}

function Class12Program() {
  return <div>NEET Programs for class 12th</div>;
}

export default App;