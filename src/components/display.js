import React, { useEffect, useState } from "react";
import { ReactComponent as Gst } from "../assets/images/gst.svg";

export default function Display() {
  const [lvl, setLvl] = useState(1);
  const [values, setValues] = useState([]);

  useEffect(() => {
    console.log(lvl);
    console.log("sending");

    fetch(
      process.env.REACT_APP_API_ENDPOINT + "/record/find/" + lvl.toString(),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setValues(data);
        // console.log(data)
      });
  }, [lvl]);

  useEffect(() => {
    console.log(values);
  }, [values]);

  const addValue = () => {
    if (lvl < 10) {
      setLvl(lvl + 1);
      // send()
    }
    // console.log(lvl)
  };
  const subtractValue = () => {
    if (lvl > 1) {
      // send()
      setLvl(lvl - 1);
    }
  };

  const updateLvl = (e) => {
    if (e >= 1 && e <= 10) {
      // console.log("sending")
      setLvl(e);
      //    send()
    } else {
      return;
    }
  };

  async function send(e) {
    // e.preventDefault();
    // const boxLvl = {
    //     boxLvl:lvl
    // }
  }

  return (
    <div>
      <div className="containdisplay">
        <section className="display-first">
          <div className="display-first-wrap">
            <div className="inner-display-first">
              <p>Box Level</p>
              <div>
                <div className="slidercontainer">
                  <i
                    className="arrow up"
                    id="1"
                    onClick={(e) => addValue(e.target.id)}
                  ></i>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    className="slider"
                    id="slider"
                    value={lvl}
                    onChange={(e) => updateLvl(e.target.value)}
                  />
                  <i
                    className="arrow down"
                    id="1"
                    onClick={(e) => subtractValue(e.target.id)}
                  ></i>
                </div>
              </div>
            </div>
          </div>

          <div className="inner-display-second">
            <DisplayData values={values} />
          </div>
        </section>

        <section className="display-second"></section>
      </div>
    </div>
  );
}

const DisplayData = ({ values }) => {
  const getNewString = (entry) => {
    if (entry.includes("gem1luck") == true) {
      entry = entry.replace("gem1luck", "lvl 1 luck gem");
    }
    if (entry.includes("gem1resillience") == true) {
      entry = entry.replace("gem1resillience", "lvl 1 resillience gem");
    }
    if (entry.includes("gem1comfort") == true) {
      entry = entry.replace("gem1comfort", "lvl 1 comfort gem");
    }
    if (entry.includes("gem1efficiency") == true) {
      entry = entry.replace("gem1efficiency", "lvl 1 efficiency gem");
    }
    if (entry.includes("commonScroll") == true) {
      entry = entry.replace("commonScroll", "common scroll");
    }
    if (entry.includes("uncommon+scroll") == true) {
      entry = entry.replace("uncommon+scroll", "uncommon scroll");
    }
    if (entry.includes("gem2efficiency") == true) {
      entry = entry.replace("gem2efficiency", "lvl 2 efficiency gem");
    }
    if (entry.includes("gem2resillience") == true) {
      entry = entry.replace("gem2resillience", "lvl 2 resillience gem");
    }
    if (entry.includes("gem2luck") == true) {
      entry = entry.replace("gem2luck", "lvl 2 luck gem");
    }
    if (entry.includes("gem2comfort") == true) {
      entry = entry.replace("gem2comfort", "lvl 2 comfort gem");
    }
    if (entry.includes("epicScroll") == true) {
      entry = entry.replace("epicScroll", "epic scroll");
    }
    if (entry.includes("gem3efficiency") == true) {
      entry = entry.replace("gem3efficiency", "lvl 3 efficiency gem");
    }
    if (entry.includes("gem3luck") == true) {
      entry = entry.replace("gem3luck", "lvl 3 luck gem");
    }
    if (entry.includes("gem3resillience") == true) {
      entry = entry.replace("gem3resillience", "lvl 3 resillience gem");
    }
    if (entry.includes("gem3comfort") == true) {
      entry = entry.replace("gem3comfort", "lvl 3 comfort gem");
    }
    return entry;
  };

  const [strings, setStrings] = useState([]);
  const [newstrings, setNewStrings] = useState([]);
  useEffect(() => {
    setNewStrings(strings);
    setStrings([]);
  }, [values]);

  useEffect(() => {
    if (values[0]) {
      console.log("in here");
      console.log(values);
      for (let i = 0; i < values.length; i++) {
        let newEntry = "";
        for (const [key, value] of Object.entries(values[i])) {
          if (
            value != 0 &&
            key != "_id" &&
            key != "times" &&
            key != "percent"
          ) {
            newEntry = newEntry + " " + value.toString() + " " + key + "+";
            if (newEntry.includes("uncommonScroll")) {
              newEntry.replace("uncommonScroll", "uncommon+scroll");
            }
            console.log(newEntry);
            newEntry = getNewString(newEntry);
            // console.log(key,value)
          }
          // strings.indexOf(newEntry)==-1
          if (key == "percent") {
            strings.push(newEntry);
          }
        }
        console.log(strings);
      }
    }
    // return(strings)
  }, [values]);

  if (values[0]) {
    console.log(values);
    return (
      // <div></div>
      <div className="string-row">
        <div className="string-col string-col-1">
          {values.map((val) => (
            <div className="string string1">
              {parseInt(val.percent * 100)}%{" "}
            </div>
          ))}
        </div>
        <div className="string-col string-col-2">
          {newstrings.map((string) => (
            <GetIcon string={string} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="string-row no-data">
        <div className="no-data-inner">no data yet</div>
      </div>
    );
  }
};

// const IndividualData = ({values}) =>{
//     if (values[1].gst !=0 && values[1].gem1luck!=0)
// }
const GetIcon = ({ string }) => {
  let content1 = "";
  let content2 = "";
  let content3 = "";
  let content4 = "";
  let content5 = "";
  let content6 = "";
  let content7 = "";
  let content8 = "";
  let content9 = "";
  let content10 = "";
  let content11 = "";
  let content12 = "";
  let content13 = "";
  let content14 = "";
  let content15 = "";
  let content16 = "";
  let content17 = "";
  let strings = string.split("+");

  strings.map((str) => {
    if (str.includes("lvl 1 efficiency")) {
      content1 = (
        <div className="with-icon">
          {str}{" "}
          <img
            className="gem-icon"
            src={require("../assets/images/lvl1efficiency.png")}
          />
        </div>
      );
    }
    if (str.includes("lvl 1 resillience")) {
      content2 = (
        <div className="with-icon">
          {str}{" "}
          <img
            className="gem-icon"
            src={require("../assets/images/lvl1resillience.png")}
          />
        </div>
      );
    }

    if (str.includes("lvl 1 luck")) {
      content3 = (
        <div className="with-icon">
          {str}{" "}
          <img
            className="gem-icon"
            src={require("../assets/images/lvl1luck.png")}
          />
        </div>
      );
    }

    if (str.includes("lvl 1 comfort")) {
      content4 = (
        <div className="with-icon">
          {str}{" "}
          <img
            className="gem-icon"
            src={require("../assets/images/lvl1comfort.png")}
          />
        </div>
      );
    }
    if (str.includes("lvl 2 efficiency")) {
      content9 = (
        <div className="with-icon">
          {str}{" "}
          <img
            className="gem-icon"
            src={require("../assets/images/lvl2efficiency.png")}
          />
        </div>
      );
    }
    if (str.includes("lvl 2 luck")) {
      content10 = (
        <div className="with-icon">
          {str}{" "}
          <img
            className="gem-icon"
            src={require("../assets/images/lvl2luck.png")}
          />
        </div>
      );
    }
    if (str.includes("lvl 2 resillience")) {
      content11 = (
        <div className="with-icon">
          {str}{" "}
          <img
            className="gem-icon"
            src={require("../assets/images/lvl2resillience.png")}
          />
        </div>
      );
    }
    if (str.includes("lvl 2 comfort")) {
      content12 = (
        <div className="with-icon">
          {str}{" "}
          <img
            className="gem-icon"
            src={require("../assets/images/lvl2comfort.png")}
          />
        </div>
      );
    }

    if (str.includes("gst")) {
      content5 = (
        <div className="with-icon">
          {str} <Gst className="gem-icon" />
        </div>
      );
    }

    if (str.includes("Rare Scroll")) {
      content7 = (
        <div className="with-icon">
          {str}{" "}
          <img
            className="gem-icon"
            src={require("../assets/images/rarescroll.png")}
          />
        </div>
      );
    }

    if (str.includes("uncommon scroll")) {
      content8 = (
        <div className="with-icon">
          {str}{" "}
          <img
            className="gem-icon"
            src={require("../assets/images/uncommonscroll.png")}
          />
        </div>
      );
    } else if (str.includes("common scroll")) {
      console.log(str);
      content6 = (
        <div className="with-icon">
          {str}{" "}
          <img
            className="gem-icon"
            src={require("../assets/images/commonscroll.png")}
          />
        </div>
      );
    }
    if (str.includes("epic scroll")) {
      content13 = (
        <div className="with-icon">
          {str}{" "}
          <img
            className="gem-icon"
            src={require("../assets/images/epicscroll.png")}
          />
        </div>
      );
    }
    if (str.includes("level 3 efficiency")) {
      content14 = (
        <div className="with-icon">
          {str}{" "}
          <img
            className="gem-icon"
            src={require("../assets/images/lvl3efficiency.png")}
          />
        </div>
      );
    }
    if (str.includes("level 3 resillience")) {
      content15 = (
        <div className="with-icon">
          {str}{" "}
          <img
            className="gem-icon"
            src={require("../assets/images/lvl3resillience.png")}
          />
        </div>
      );
    }
    if (str.includes("level 3 comfort")) {
      content16 = (
        <div className="with-icon">
          {str}{" "}
          <img
            className="gem-icon"
            src={require("../assets/images/lvl3comfort.png")}
          />
        </div>
      );
    }
    if (str.includes("level 3 luck")) {
      content17 = (
        <div className="with-icon">
          {str}{" "}
          <img
            className="gem-icon"
            src={require("../assets/images/lvl3luck.png")}
          />
        </div>
      );
    }
  });

  return (
    <div className="around-icon string">
      {content1}
      {content2}
      {content3}
      {content4}
      {content5}
      {content6}
      {content7}
      {content8}
      {content9}
      {content10}
      {content11}
      {content12}
      {content13}
      {content14}
      {content15}
      {content16}
      {content17}
    </div>
  );
};
