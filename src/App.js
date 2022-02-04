import React, { useState } from "react";
import Details from "./components/Details";
import Header from "./components/Header";
import ImgSlider from "./components/Slider";
import LightBox from "./components/LigntBox";
import "./styles.css";
import Menu from "./components/Menu";

export const Context = React.createContext();
function App() {
  const [cart, setCart] = useState([]);
  const [openLight, setOpenLight] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Context.Provider
      value={{ cart, setCart, openLight, setOpenLight, openMenu, setOpenMenu }}
    >
      <main className='main'>
        <LightBox />
        <Menu />
        <Header />
        <div className='body'>
          <div className='container'>
            <div className='slider_container'>
              <ImgSlider />
            </div>
            <div className='main_details_container'>
              <Details />
            </div>
          </div>
          <div className='attribution'>
            Challenge by{" "}
            <a
              href='https://www.frontendmentor.io?ref=challenge'
              rel='noreferrer'
              target='_blank'
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href='https://www.frontendmentor.io?ref=challenge'
              rel='noreferrer'
            >
              Your Name Here
            </a>
            .
          </div>
        </div>
      </main>
    </Context.Provider>
  );
}

export default App;
