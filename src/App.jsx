import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgLoadbarDoc } from "react-icons/cg";
import { MdWorkOutline } from "react-icons/md";
import { TiContacts } from "react-icons/ti";

function App() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <div className="wrapper">
      <header className="primary-header">
        <div className="container-one">
          <h1 className="header-tittle">
            Chetan <span className="linear-color">Kumar</span>
          </h1>
        </div>
        <div className="container-two">
          <div className="header-nav">
            <nav>
              <ul role="list">
                <li>
                  <button
                    id="home-btn"
                    className={activeButton === "home-btn" ? "active" : ""}
                    onClick={() => handleButtonClick("home-btn")}
                  >
                    <a href="#">
                      <AiOutlineHome size={24} />
                      <p>Home</p>
                    </a>
                  </button>
                </li>
                <li>
                  <button
                    id="resume-btn"
                    className={activeButton === "resume-btn" ? "active" : ""}
                    onClick={() => handleButtonClick("resume-btn")}
                  >
                    <a href="#">
                      <CgLoadbarDoc size={24} />
                      <p>Resume</p>
                    </a>
                  </button>
                </li>
                <li>
                  <button
                    id="work-btn"
                    className={activeButton === "work-btn" ? "active" : ""}
                    onClick={() => handleButtonClick("work-btn")}
                  >
                    <a href="#">
                      <MdWorkOutline size={24} />
                      <p>Work</p>
                    </a>
                  </button>
                </li>
                <li>
                  <button
                    id="contact-btn"
                    className={activeButton === "contact-btn" ? "active" : ""}
                    onClick={() => handleButtonClick("contact-btn")}
                  >
                    <a href="#">
                      <TiContacts size={24} />
                      <p>Contact</p>
                    </a>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
