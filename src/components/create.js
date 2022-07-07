import React, { useState } from "react";

import "../styles.scss";
import Display from "./display.js";
import { ReactComponent as Copy } from "../assets/images/copy-svgrepo-com.svg";
import { CreateMb1, CreateMb2, CreateMb3 } from "./createMb";

export default function Page() {
  const [clicked, setClicked] = useState(false);

  const clickedFooter = () => {
    navigator.clipboard.writeText(
      "DmWyd72zUah3zbHEbkrDsya16YBkjGbmRzDpwyZ6p3Qe"
    );
    setClicked(true);
    setTimeout(function () {
      setClicked(false);
    }, 2000);
  };

  return (
    <div className="vh">
      <header>
        <img src={require("../assets/images/stepnbox.png")} />
      </header>
      <div class="row grey-blue">
        <div>
          <svg
            id=""
            preserveAspectRatio="xMidYMax meet"
            class="svg-separator sep6"
            viewBox="0 0 1600 200"
            data-height="200"
          >
            <polygon
              class="firstpolygon"
              points="-4,188.586 174,76 292,124 402,60 536,108 752,8 882,66 990,32 1210,116 1380,64 1536,150 1604,115.09 1604,204 -4,204 "
            ></polygon>
            <polygon
              class="thisone"
              points="174,76 174,78 -4,198 -4,188.586 "
            ></polygon>
            <polygon
              class="thisone"
              points="292,124 302,138 402,64 402,60 "
            ></polygon>
            <polygon
              class="thisone"
              points="536,108 544,120 752,12 752,8 "
            ></polygon>
            <polygon
              class="thisone"
              points="882,66 890,78 990,36 990,32 "
            ></polygon>
            <polygon
              class="thisone"
              points="1210,116 1222,130 1380,68 1380,64 "
            ></polygon>
            <polygon
              class="thisone"
              points="1536,150 1546,164 1604,124 1604,115.09 "
            ></polygon>
            <polygon
              class="thisone"
              points="174,76 292,124 282,140 174,78 "
            ></polygon>
            <polygon
              class="thisone"
              points="402,60 536,108 528,120 402,64 "
            ></polygon>
            <polygon
              class="thisone"
              points="752,8 882,66 874,80 752,12 "
            ></polygon>
            <polygon
              class="thisone"
              points="990,32 990,36 1192,130 1210,116 "
            ></polygon>
            <polygon
              class="thisone"
              points="1380,64 1536,150 1526,168 1380,68 "
            ></polygon>
          </svg>
        </div>
      </div>
      <Display />

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
  );
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
            <h2>Enter New Mystery Box Details</h2>
            <p>
              Enter a new mystery box you just recieved. We use community data
              gathered here to display box level data above.
            </p>
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
            <h2>Enter New Mystery Box Details</h2>
            <p>
              Enter a new mystery box you just recieved. We use community data
              gathered here to display box level data above.
            </p>
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
            <h2>Enter New Mystery Box Details</h2>
            <p>
              Enter a new mystery box you just recieved. We use community data
              gathered here to display box level data above.
            </p>
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
            <h2>Enter New Mystery Box Details</h2>
            <p>
              Enter a new mystery box you just recieved. We use community data
              gathered here to display box level data above.
            </p>
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
            <h2>Enter New Mystery Box Details</h2>
            <p>
              Enter a new mystery box you just recieved. We use community data
              gathered here to display box level data above.
            </p>
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
            <h2>Enter New Mystery Box Details</h2>
            <p>
              Enter a new mystery box you just recieved. We use community data
              gathered here to display box level data above.
            </p>
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
            <h2>Enter New Mystery Box Details</h2>
            <p>
              Enter a new mystery box you just recieved. We use community data
              gathered here to display box level data above.
            </p>
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
            <h2>Enter New Mystery Box Details</h2>
            <p>
              Enter a new mystery box you just recieved. We use community data
              gathered here to display box level data above.
            </p>
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
            <h2>Enter New Mystery Box Details</h2>
            <p>
              Enter a new mystery box you just recieved. We use community data
              gathered here to display box level data above.
            </p>
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
            <h2>Enter New Mystery Box Details</h2>
            <p>
              Enter a new mystery box you just recieved. We use community data
              gathered here to display box level data above.
            </p>
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
