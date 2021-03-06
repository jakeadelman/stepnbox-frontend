import React, { useState } from "react";

import "../styles.scss";
import Display from "./display.js";
import { ReactComponent as Copy } from "../assets/images/copy-svgrepo-com.svg";
import { CreateMb1, CreateMb2, CreateMb3 } from "./createMb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown, faCopy } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
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

  const clickedFooter2 = () => {
    navigator.clipboard.writeText("0x19a81cbc1390ea24de7a53d34c8b054287ab532b");
    setClicked2(true);
    setTimeout(function () {
      setClicked2(false);
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
            {/* <img src={require("../assets/images/stepnbox.png")} /> */}
            <div>STEPNBOX</div>
            <ul className="menu">
              <li className="item item1">DATA</li>
              <li className="item item2" onClick={() => createSwitch()}>
                SUBMIT
              </li>
            </ul>
          </header>

          <Display />
        </div>
        <footer>
          <div className="inside-footer">
            <div className="donate" onClick={clickedFooter}>
              Donate: (SOL){" "}
              <FontAwesomeIcon className="copyicon" icon={faCopy} />
              {clicked == true ? (
                <div className="hide-me">Copied!</div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="donate2" onClick={clickedFooter2}>
              Donate: (BSC)
              <FontAwesomeIcon className="copyicon" icon={faCopy} />{" "}
              {clicked2 == true ? (
                <div className="hide-me2">Copied!</div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </footer>
      </div>
    );
  } else if (create == true) {
    return (
      <div className="vh">
        <div className="outer">
          <header>
            {/* <img src={require("../assets/images/stepnbox.png")} /> */}
            <div>STEPNBOX</div>
          </header>
          <ul className="menu">
            <li className="item item1" onClick={() => createSwitch()}>
              DATA
            </li>
            <li className="item item2">SUBMIT</li>
          </ul>

          <Create />
        </div>
        <footer>
          <div className="inside-footer">
            <div className="donate" onClick={clickedFooter}>
              Donate: (SOL){" "}
              <FontAwesomeIcon className="copyicon" icon={faCopy} />
              {clicked == true ? (
                <div className="hide-me">Copied!</div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="donate2" onClick={clickedFooter2}>
              Donate: (BSC)
              <FontAwesomeIcon className="copyicon" icon={faCopy} />{" "}
              {clicked2 == true ? (
                <div className="hide-me2">Copied!</div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </footer>
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
            <h2>Enter Mystery Box</h2>
            <div class="divider div-transparent"></div>
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
              <p>lvl 1</p>
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
            <h2>Enter Mystery Box</h2>
            <div class="divider div-transparent"></div>
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
              <p>lvl 2</p>
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
            <div class="divider div-transparent"></div>
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
              <p>lvl 3</p>
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
            <div class="divider div-transparent"></div>
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
              <p>lvl 4</p>
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
            <div class="divider div-transparent"></div>
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
              <p>lvl 5</p>
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
            <div class="divider div-transparent"></div>
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
              <p>lvl 6</p>
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
            <div class="divider div-transparent"></div>
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
              <p>lvl 7</p>
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
            <div class="divider div-transparent"></div>
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
              <p>lvl 8</p>
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
            <div class="divider div-transparent"></div>
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
              <p>lvl 9</p>
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
            <div class="divider div-transparent"></div>
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
              <p>lvl 10</p>
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
