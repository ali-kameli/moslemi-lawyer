import React from "react";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Landing/Body/Body";
import Landing from "./Components/Landing/Landing";

const App = () => {
  return (
    <div>
      <Landing />
      <Body />
      <Footer />
      <div className="call-to-vakil">
        <a href="tel:+989124082208">
          <p> تماس با وکیل</p>
        </a>
      </div>
      <div className="chat-to-vakil">
        <a href="tel:+989124082208">
          <p> چـــت با وکیــل</p>
        </a>
      </div>
    </div>
  );
};

export default App;
