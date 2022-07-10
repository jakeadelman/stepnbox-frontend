import React, { useState } from "react";

import "../styles.scss";
import Display from "./display.js";
import { ReactComponent as Copy } from "../assets/images/copy-svgrepo-com.svg";
import { CreateMb1, CreateMb2, CreateMb3 } from "./createMb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const [clicked, setClicked] = useState(false);
  const [create, setCreate] = useState(false);

  const clickedFooter = () => {
    navigator.clipboard.writeText(
      "DmWyd72zUah3zbHEbkrDsya16YBkjGbmRzDpwyZ6p3Qe"
    );
    setClicked(true);
    setTimeout(function () {
      setClicked(false);
    }, 2000);
  };
  const createSwitch = () => {
    console.log("called");
    if (create == false) {
      setCreate(true);
    } else {
      setCreate(false);
    }
  };

  if (create == false) {
    return (
      <div className="vh">
        <div className="back-img" src="../assets/images/white.jpg" />
        <div className="outer">
          <header>
            <img src={require("../assets/images/stepnbox.png")} />
            <ul className="menu">
              <li className="item item1">Box Data</li>
              <li className="item item2" onClick={() => createSwitch()}>
                Enter Box
              </li>
            </ul>
          </header>

          <Display />

          <footer>
            <div className="inside-footer">
              <div className="donate" onClick={clickedFooter}>
                Donate: (SOL) <Copy className="copyicon" />
              </div>
              <div className="donate2" onClick={clickedFooter}>
                Donate: (BSC) <Copy className="copyicon" />{" "}
                {clicked == true ? (
                  <div className="hide-me">Copied!</div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  } else if (create == true) {
    return (
      <div className="vh">
        <div className="outer">
          <header>
            <img src={require("../assets/images/stepnbox.png")} />
          </header>
          <ul className="menu">
            <li className="item item1" onClick={() => createSwitch()}>
              Box Data
            </li>
            <li className="item item2">Enter Box</li>
          </ul>

          <Create />

          <footer>
            <div className="inside-footer">
              <div className="donate" onClick={clickedFooter}>
                Donate: (SOL) <Copy className="copyicon" />
              </div>
              <div className="donate2" onClick={clickedFooter}>
                Donate: (BSC) <Copy className="copyicon" />{" "}
                {clicked == true ? (
                  <div className="hide-me">Copied!</div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
function Create() {
  const [mblvl, Setmblvl] = useState(1);

  const changeBoxes = (e) => {
    console.log(e);
    Setmblvl(parseInt(e));
    console.log("now", e);
  };

  if (mblvl == 1) {
    return (
      <div class="enter">
        <section class="entersection">
          <div class="title-section">
            <h2>
              Submit Your Box
              <FontAwesomeIcon
                icon={faArrowTurnDown}
                className="fa-arrow"
                size="1x"
                color="black"
              />
            </h2>
          </div>
        </section>
        <div class="containing-all">
          <div class="containing-boxes col1form">
            <div className="small-boxes">
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl2box.png")}
                id="2"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl3box.png")}
                id="3"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl4box.png")}
                id="4"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl5box.png")}
                id="5"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl6box.png")}
                id="6"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl7box.png")}
                id="7"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl8box.png")}
                id="8"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl9box.png")}
                id="9"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl10box.png")}
                id="10"
                onClick={(e) => changeBoxes(e.target.id)}
              />
            </div>
            <div className="boximg-container">
              <div class="boximg">
                <img
                  class="box"
                  src={require("../assets/images/lvl1box.png")}
                  id="1"
                  onClick={(e) => changeBoxes(e.target.id)}
                />
              </div>
              <p>lvl 1 box</p>
            </div>
          </div>
          <SubCreate mblvl={mblvl} />
        </div>
      </div>
    );
  }

  if (mblvl == 2) {
    return (
      <div class="enter">
        <section class="entersection">
          <div class="title-section">
            <h2>Enter Myster Box</h2>
            <p>Enter a new mystery box to help us gather data.</p>
          </div>
        </section>
        <div class="containing-all">
          <div class="containing-boxes col1form">
            <div className="small-boxes">
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl1box.png")}
                id="1"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl3box.png")}
                id="3"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl4box.png")}
                id="4"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl5box.png")}
                id="5"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl6box.png")}
                id="6"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl7box.png")}
                id="7"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl8box.png")}
                id="8"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl9box.png")}
                id="9"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl10box.png")}
                id="10"
                onClick={(e) => changeBoxes(e.target.id)}
              />
            </div>
            <div className="boximg-container">
              <div class="boximg">
                <img
                  class="box"
                  src={require("../assets/images/lvl2box.png")}
                  id="2"
                  onClick={(e) => changeBoxes(e.target.id)}
                />
              </div>
              <p>lvl 2 box</p>
            </div>
          </div>
          <SubCreate mblvl={mblvl} />
        </div>
      </div>
    );
  }

  if (mblvl == 3) {
    return (
      <div class="enter">
        <section class="entersection">
          <div class="title-section">
            <h2>Enter Mystery Box</h2>
            <p>Enter a new mystery box to help us gather data.</p>
          </div>
        </section>
        <div class="containing-all">
          <div class="containing-boxes col1form">
            <div className="small-boxes">
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl1box.png")}
                id="1"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl2box.png")}
                id="2"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl4box.png")}
                id="4"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl5box.png")}
                id="5"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl6box.png")}
                id="6"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl7box.png")}
                id="7"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl8box.png")}
                id="8"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl9box.png")}
                id="9"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl10box.png")}
                id="10"
                onClick={(e) => changeBoxes(e.target.id)}
              />
            </div>
            <div className="boximg-container">
              <div class="boximg">
                <img
                  class="box"
                  src={require("../assets/images/lvl3box.png")}
                  id="3"
                  onClick={(e) => changeBoxes(e.target.id)}
                />
              </div>
              <p>lvl 3 box</p>
            </div>
          </div>
          <SubCreate mblvl={mblvl} />
        </div>
      </div>
    );
  }

  if (mblvl == 4) {
    return (
      <div class="enter">
        <section class="entersection">
          <div class="title-section">
            <h2>Enter Mystery Box</h2>
            <p>Enter a new mystery box to help us gather data.</p>
          </div>
        </section>
        <div class="containing-all">
          <div class="containing-boxes col1form">
            <div className="small-boxes">
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl1box.png")}
                id="1"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl2box.png")}
                id="2"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl3box.png")}
                id="3"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl5box.png")}
                id="5"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl6box.png")}
                id="6"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl7box.png")}
                id="7"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl8box.png")}
                id="8"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl9box.png")}
                id="9"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl10box.png")}
                id="10"
                onClick={(e) => changeBoxes(e.target.id)}
              />
            </div>
            <div className="boximg-container">
              <div class="boximg">
                <img
                  class="box"
                  src={require("../assets/images/lvl4box.png")}
                  id="4"
                  onClick={(e) => changeBoxes(e.target.id)}
                />
              </div>
              <p>lvl 4 box</p>
            </div>
          </div>
          <SubCreate mblvl={mblvl} />
        </div>
      </div>
    );
  }

  if (mblvl == 5) {
    return (
      <div class="enter">
        <section class="entersection">
          <div class="title-section">
            <h2>Enter Mystery Box</h2>
            <p>Enter a new mystery box to help us gather data.</p>
          </div>
        </section>
        <div class="containing-all">
          <div class="containing-boxes col1form">
            <div className="small-boxes">
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl1box.png")}
                id="1"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl2box.png")}
                id="2"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl3box.png")}
                id="3"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl4box.png")}
                id="4"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl6box.png")}
                id="6"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl7box.png")}
                id="7"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl8box.png")}
                id="8"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl9box.png")}
                id="9"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl10box.png")}
                id="10"
                onClick={(e) => changeBoxes(e.target.id)}
              />
            </div>
            <div className="boximg-container">
              <div class="boximg">
                <img
                  class="box"
                  src={require("../assets/images/lvl5box.png")}
                  id="5"
                  onClick={(e) => changeBoxes(e.target.id)}
                />
              </div>
              <p>lvl 5 box</p>
            </div>
          </div>
          <SubCreate mblvl={mblvl} />
        </div>
      </div>
    );
  }

  if (mblvl == 6) {
    return (
      <div class="enter">
        <section class="entersection">
          <div class="title-section">
            <h2>Enter Mystery Box</h2>
            <p>Enter a new mystery box to help us gather data.</p>
          </div>
        </section>
        <div class="containing-all">
          <div class="containing-boxes col1form">
            <div className="small-boxes">
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl1box.png")}
                id="1"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl2box.png")}
                id="2"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl3box.png")}
                id="3"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl4box.png")}
                id="4"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl5box.png")}
                id="5"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl7box.png")}
                id="7"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl8box.png")}
                id="8"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl9box.png")}
                id="9"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl10box.png")}
                id="10"
                onClick={(e) => changeBoxes(e.target.id)}
              />
            </div>
            <div className="boximg-container">
              <div class="boximg">
                <img
                  class="box"
                  src={require("../assets/images/lvl6box.png")}
                  id="6"
                  onClick={(e) => changeBoxes(e.target.id)}
                />
              </div>
              <p>lvl 6 box</p>
            </div>
          </div>
          <SubCreate mblvl={mblvl} />
        </div>
      </div>
    );
  }

  if (mblvl == 7) {
    return (
      <div class="enter">
        <section class="entersection">
          <div class="title-section">
            <h2>Enter Mystery Box</h2>
            <p>Enter a new mystery box to help us gather data.</p>
          </div>
        </section>
        <div class="containing-all">
          <div class="containing-boxes col1form">
            <div className="small-boxes">
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl1box.png")}
                id="1"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl2box.png")}
                id="2"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl3box.png")}
                id="3"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl4box.png")}
                id="4"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl5box.png")}
                id="5"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl6box.png")}
                id="6"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl8box.png")}
                id="8"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl9box.png")}
                id="9"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl10box.png")}
                id="10"
                onClick={(e) => changeBoxes(e.target.id)}
              />
            </div>
            <div className="boximg-container">
              <div class="boximg">
                <img
                  class="box"
                  src={require("../assets/images/lvl7box.png")}
                  id="7"
                  onClick={(e) => changeBoxes(e.target.id)}
                />
              </div>
              <p>lvl 7 box</p>
            </div>
          </div>
          <SubCreate mblvl={mblvl} />
        </div>
      </div>
    );
  }

  if (mblvl == 8) {
    return (
      <div class="enter">
        <section class="entersection">
          <div class="title-section">
            <h2>Enter Mystery Box</h2>
            <p>Enter a new mystery box to help us gather data.</p>
          </div>
        </section>
        <div class="containing-all">
          <div class="containing-boxes col1form">
            <div className="small-boxes">
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl1box.png")}
                id="1"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl2box.png")}
                id="2"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl3box.png")}
                id="3"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl4box.png")}
                id="4"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl5box.png")}
                id="5"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl6box.png")}
                id="6"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl7box.png")}
                id="7"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl9box.png")}
                id="9"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl10box.png")}
                id="10"
                onClick={(e) => changeBoxes(e.target.id)}
              />
            </div>
            <div className="boximg-container">
              <div class="boximg">
                <img
                  class="box"
                  src={require("../assets/images/lvl8box.png")}
                  id="8"
                  onClick={(e) => changeBoxes(e.target.id)}
                />
              </div>
              <p>lvl 8 box</p>
            </div>
          </div>
          <SubCreate mblvl={mblvl} />
        </div>
      </div>
    );
  }

  if (mblvl == 9) {
    return (
      <div class="enter">
        <section class="entersection">
          <div class="title-section">
            <h2>Enter Mystery Box</h2>
            <p>Enter a new mystery box to help us gather data.</p>
          </div>
        </section>
        <div class="containing-all">
          <div class="containing-boxes col1form">
            <div className="small-boxes">
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl1box.png")}
                id="1"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl2box.png")}
                id="2"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl3box.png")}
                id="3"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl4box.png")}
                id="4"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl5box.png")}
                id="5"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl6box.png")}
                id="6"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl7box.png")}
                id="7"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl8box.png")}
                id="8"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl10box.png")}
                id="10"
                onClick={(e) => changeBoxes(e.target.id)}
              />
            </div>
            <div className="boximg-container">
              <div class="boximg">
                <img
                  class="box"
                  src={require("../assets/images/lvl9box.png")}
                  id="9"
                  onClick={(e) => changeBoxes(e.target.id)}
                />
              </div>
              <p>lvl 9 box</p>
            </div>
          </div>
          <SubCreate mblvl={mblvl} />
        </div>
      </div>
    );
  }

  if (mblvl == 10) {
    return (
      <div class="enter">
        <section class="entersection">
          <div class="title-section">
            <h2>Enter Mystery Box</h2>
            <p>Enter a new mystery box to help us gather data.</p>
          </div>
        </section>
        <div class="containing-all">
          <div class="containing-boxes col1form">
            <div className="small-boxes">
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl1box.png")}
                id="1"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl2box.png")}
                id="2"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl3box.png")}
                id="3"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl4box.png")}
                id="4"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl5box.png")}
                id="5"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl6box.png")}
                id="6"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl7box.png")}
                id="7"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl8box.png")}
                id="8"
                onClick={(e) => changeBoxes(e.target.id)}
              />
              <img
                class="boximgsmall"
                src={require("../assets/images/lvl9box.png")}
                id="9"
                onClick={(e) => changeBoxes(e.target.id)}
              />
            </div>
            <div className="boximg-container">
              <div class="boximg">
                <img
                  class="box"
                  src={require("../assets/images/lvl10box.png")}
                  id="10"
                  onClick={(e) => changeBoxes(e.target.id)}
                />
              </div>
              <p>lvl 10 box</p>
            </div>
          </div>
          <SubCreate mblvl={mblvl} />
        </div>
      </div>
    );
  }
}

function SubCreate(props) {
  if (props.mblvl == 1) {
    return <CreateMb1 mblvl={props.mblvl} />;
  }
  if (props.mblvl == 2) {
    return <CreateMb1 mblvl={props.mblvl} />;
  }

  if (props.mblvl == 3) {
    return <CreateMb2 mblvl={props.mblvl} />;
  }

  if (props.mblvl == 4) {
    return <CreateMb2 mblvl={props.mblvl} />;
  }

  if (props.mblvl == 5) {
    return <CreateMb2 mblvl={props.mblvl} />;
  }

  if (props.mblvl == 6) {
    return <CreateMb3 mblvl={props.mblvl} />;
  }
  if (props.mblvl == 7) {
    return <CreateMb3 mblvl={props.mblvl} />;
  }
  if (props.mblvl == 8) {
    return <CreateMb3 mblvl={props.mblvl} />;
  }
  if (props.mblvl == 9) {
    return <CreateMb3 mblvl={props.mblvl} />;
  }
  if (props.mblvl == 10) {
    return <CreateMb3 mblvl={props.mblvl} />;
  }
}
