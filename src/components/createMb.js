import React, { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";

export function CreateMb1(props) {
  const [gem1luck, setGem1luck] = useState(0);
  const [gem1efficiency, setGem1efficiency] = useState(0);
  const [gem1resillience, setGem1resillience] = useState(0);
  const [gem1comfort, setGem1comfort] = useState(0);
  const [gst, setGst] = useState(0);
  const [commonScroll, setCommonScroll] = useState(0);
  const [uncommonScroll, setUncommonScroll] = useState(0);
  const navigate = useNavigate();
  const [showMe, setShowMe] = useState(0);
  const [showMe2, setShowMe2] = useState(0);
  const cookies = new Cookies();

  // these methods will update state properties
  function updateForm(e) {
    console.log(typeof e.target.value);
    console.log(gem1luck);

    if (e.target.id === "1" && e.target.value >= 0 && e.target.value <= 10) {
      setGem1luck(e.target.value);
    } else if (e.target.id === "1" && e.target.value == "") {
      setGem1luck("");
    }

    if (e.target.id === "2" && e.target.value >= 0 && e.target.value <= 10) {
      setGst(e.target.value);
    } else if (e.target.id === "2" && e.target.value == "") {
      setGst("");
    }

    if (e.target.id === "3" && e.target.value >= 0 && e.target.value <= 10) {
      setGem1efficiency(e.target.value);
    } else if (e.target.id === "3" && e.target.value == "") {
      setGem1efficiency("");
    }

    if (e.target.id === "4" && e.target.value >= 0 && e.target.value <= 10) {
      setGem1resillience(e.target.value);
    } else if (e.target.id === "4" && e.target.value == "") {
      setGem1resillience("");
    }

    if (e.target.id === "5" && e.target.value >= 0 && e.target.value <= 10) {
      setGem1comfort(e.target.value);
    } else if (e.target.id === "5" && e.target.value == "") {
      setGem1comfort("");
    }

    if (e.target.id === "6" && e.target.value >= 0 && e.target.value <= 10) {
      setCommonScroll(e.target.value);
    } else if (e.target.id === "6" && e.target.value == "") {
      setCommonScroll("");
    }

    if (e.target.id === "7" && e.target.value >= 0 && e.target.value <= 10) {
      setUncommonScroll(e.target.value);
    } else if (e.target.id === "7" && e.target.value == "") {
      setUncommonScroll("");
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    let now = new Date();
    let before = new Date(cookies.get("last"));
    let last = Math.abs(before - now);
    console.log(last);
    console.log(cookies.get("last"));

    if (last < 3600000) {
      console.log("showme");
      setShowMe(true);
      setTimeout(() => {
        setShowMe(false);
      }, 3000);
    } else if (
      gem1luck == 0 &&
      gem1efficiency == 0 &&
      gem1resillience == 0 &&
      gem1comfort == 0 &&
      gst == 0 &&
      commonScroll == 0 &&
      uncommonScroll == 0
    ) {
      setShowMe2(true);
      setTimeout(() => {
        setShowMe2(false);
      }, 3000);
    } else {
      cookies.set("last", new Date());

      const newBox = {
        gem1luck: gem1luck,
        gem1efficiency: gem1efficiency,
        gem1resillience: gem1resillience,
        gem1comfort: gem1comfort,
        gst: gst,
        mblvl: props.mblvl,
        commonScroll: commonScroll,
        uncommonScroll: uncommonScroll,
      };
      console.log(newBox);

      console.log(process.env.REACT_APP_API_ENDPOINT);
      await fetch(process.env.REACT_APP_API_ENDPOINT + "/record/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBox),
      });

      // setForm({ gem1luck: 0,gst:0 });
      setGem1comfort(0);
      setGem1efficiency(0);
      setGem1luck(0);
      setGem1resillience(0);
      setGst(0);
      setCommonScroll(0);
      setUncommonScroll(0);
      navigate("/");
    }
  }

  function subtractValue(value) {
    if (value == "1") {
      let newGem1Luck = gem1luck - 1;
      if (newGem1Luck < 0) {
        newGem1Luck = 0;
      }
      setGem1luck(newGem1Luck);
    }
    if (value == "2") {
      let newGst = gst - 1;
      if (newGst < 0) {
        newGst = 0;
      }
      setGst(newGst);
    }
    if (value == "3") {
      let neweff = gem1efficiency - 1;
      if (neweff < 0) {
        neweff = 0;
      }
      setGem1efficiency(neweff);
    }
    if (value == "4") {
      let newres = gem1resillience - 1;
      if (newres < 0) {
        newres = 0;
      }
      setGem1resillience(newres);
    }
    if (value == "5") {
      let newcomf = gem1comfort - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setGem1comfort(newcomf);
    }
    if (value == "6") {
      let newcomf = commonScroll - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setCommonScroll(newcomf);
    }
    if (value == "7") {
      let newcomf = uncommonScroll - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setUncommonScroll(newcomf);
    }
  }

  function addValue(value) {
    console.log("adding value");
    if (value == "1") {
      let newGem1Luck = gem1luck + 1;
      if (newGem1Luck > 10) {
        newGem1Luck = 10;
      }
      console.log(newGem1Luck);
      setGem1luck(newGem1Luck);
    }
    if (value == "2") {
      let newGst = gst + 1;
      if (newGst > 10) {
        newGst = 10;
      }
      setGst(newGst);
    }
    if (value == "3") {
      let neweff = gem1efficiency + 1;
      if (neweff > 10) {
        neweff = 10;
      }
      setGem1efficiency(neweff);
    }
    if (value == "4") {
      let newres = gem1resillience + 1;
      if (newres > 10) {
        newres = 10;
      }
      setGem1resillience(newres);
    }
    if (value == "5") {
      let newconf = gem1comfort + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setGem1comfort(newconf);
    }
    if (value == "6") {
      let newconf = commonScroll + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setCommonScroll(newconf);
    }
    if (value == "7") {
      let newconf = uncommonScroll + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setUncommonScroll(newconf);
    }
  }

  return (
    <form class="submitform col2form" onSubmit={onSubmit}>
      <div className="form-group">
        <section class="form-group-col form-group-col1">
          <Ticker
            value={gem1luck}
            id="1"
            updateForm={updateForm}
            valueShort="Level 1 Luck Gem"
            addValue={addValue}
            subtractValue={subtractValue}
          />

          <Ticker
            value={gst}
            id="2"
            updateForm={updateForm}
            valueShort="Gst"
            addValue={addValue}
            subtractValue={subtractValue}
          />
        </section>
        <section class="form-group-col form-group-col2">
          <Ticker
            value={gem1efficiency}
            id="3"
            updateForm={updateForm}
            valueShort="Level 1 Efficiency Gem"
            addValue={addValue}
            subtractValue={subtractValue}
          />
          <Ticker
            value={gem1resillience}
            id="4"
            updateForm={updateForm}
            valueShort="Level 1 Resillience Gem"
            addValue={addValue}
            subtractValue={subtractValue}
          />
        </section>
        <section class="form-group-col form-group-col3">
          <Ticker
            value={gem1comfort}
            id="5"
            updateForm={updateForm}
            valueShort="Level 1 Comfort Gem"
            addValue={addValue}
            subtractValue={subtractValue}
          />
          <Ticker
            value={commonScroll}
            id="6"
            updateForm={updateForm}
            valueShort="Common Scroll"
            addValue={addValue}
            subtractValue={subtractValue}
          />
        </section>
        <section class="form-group-col form-group-col3">
          <Ticker
            value={uncommonScroll}
            id="7"
            updateForm={updateForm}
            valueShort="Uncommon Scroll"
            addValue={addValue}
            subtractValue={subtractValue}
          />
        </section>
      </div>

      <div className="inside-form-group button-wrap">
        <input type="submit" value="SUBMIT" className="btn btn-primary" />
        {showMe == true ? (
          <div className="showme">You can only submit one box per hour.</div>
        ) : (
          <div></div>
        )}
        {showMe2 == true ? (
          <div className="showme showme2">You cannot submit an empty box.</div>
        ) : (
          <div></div>
        )}
      </div>
    </form>
  );
}

export function CreateMb2(props) {
  const [gem1luck, setGem1luck] = useState(0);
  const [gem1efficiency, setGem1efficiency] = useState(0);
  const [gem1resillience, setGem1resillience] = useState(0);
  const [gem1comfort, setGem1comfort] = useState(0);
  const [gem2luck, setGem2luck] = useState(0);
  const [gem2efficiency, setGem2efficiency] = useState(0);
  const [gem2resillience, setGem2resillience] = useState(0);
  const [gem2comfort, setGem2comfort] = useState(0);
  const [commonScroll, setCommonScroll] = useState(0);
  const [uncommonScroll, setUncommonScroll] = useState(0);
  const [rareScroll, setRareScroll] = useState(0);
  const [gst, setGst] = useState(0);
  const [showMe, setShowMe] = useState(0);
  const [showMe2, setShowMe2] = useState(0);
  const navigate = useNavigate();
  const cookies = new Cookies();

  // these methods will update state properties
  function updateForm(e) {
    if (e.target.id === "1" && e.target.value >= 0 && e.target.value <= 10) {
      setGem1luck(e.target.value);
    } else if (e.target.id === "1" && e.target.value == "") {
      setGem1luck("");
    }

    if (e.target.id === "2" && e.target.value >= 0 && e.target.value <= 10) {
      setGst(e.target.value);
    } else if (e.target.id === "2" && e.target.value == "") {
      setGst("");
    }

    if (e.target.id === "3" && e.target.value >= 0 && e.target.value <= 10) {
      setGem1efficiency(e.target.value);
    } else if (e.target.id === "3" && e.target.value == "") {
      setGem1efficiency("");
    }

    if (e.target.id === "4" && e.target.value >= 0 && e.target.value <= 10) {
      setGem1resillience(e.target.value);
    } else if (e.target.id === "4" && e.target.value == "") {
      setGem1resillience("");
    }

    if (e.target.id === "5" && e.target.value >= 0 && e.target.value <= 10) {
      setGem1comfort(e.target.value);
    } else if (e.target.id === "5" && e.target.value == "") {
      setGem1comfort("");
    }

    if (e.target.id === "10" && e.target.value >= 0 && e.target.value <= 10) {
      setCommonScroll(e.target.value);
    } else if (e.target.id === "10" && e.target.value == "") {
      setCommonScroll("");
    }

    if (e.target.id === "11" && e.target.value >= 0 && e.target.value <= 10) {
      setUncommonScroll(e.target.value);
    } else if (e.target.id === "11" && e.target.value == "") {
      setUncommonScroll("");
    }

    if (e.target.id === "6" && e.target.value >= 0 && e.target.value <= 10) {
      setGem2luck(e.target.value);
    } else if (e.target.id === "6" && e.target.value == "") {
      setGem2luck("");
    }

    if (e.target.id === "7" && e.target.value >= 0 && e.target.value <= 10) {
      setGem2efficiency(e.target.value);
    } else if (e.target.id === "7" && e.target.value == "") {
      setGem2efficiency("");
    }

    if (e.target.id === "8" && e.target.value >= 0 && e.target.value <= 10) {
      setGem2resillience(e.target.value);
    } else if (e.target.id === "8" && e.target.value == "") {
      setGem2resillience("");
    }

    if (e.target.id === "9" && e.target.value >= 0 && e.target.value <= 10) {
      setGem2comfort(e.target.value);
    } else if (e.target.id === "9" && e.target.value == "") {
      setGem2comfort("");
    }

    if (e.target.id === "12" && e.target.value >= 0 && e.target.value <= 10) {
      setRareScroll(e.target.value);
    } else if (e.target.id === "12" && e.target.value == "") {
      setRareScroll("");
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    let now = new Date();
    let before = new Date(cookies.get("last"));
    let last = Math.abs(before - now);
    console.log(last);
    console.log(cookies.get("last"));

    if (last < 3600000) {
      console.log("showme");
      setShowMe(true);
      setTimeout(() => {
        setShowMe(false);
      }, 3000);
    } else if (
      gem1luck == 0 &&
      gem1efficiency == 0 &&
      gem1resillience == 0 &&
      gem1comfort == 0 &&
      gst == 0 &&
      commonScroll == 0 &&
      uncommonScroll == 0 &&
      gem2efficiency == 0 &&
      gem2luck == 0 &&
      gem2resillience == 0 &&
      gem2comfort == 0 &&
      rareScroll == 0
    ) {
      setShowMe2(true);
      setTimeout(() => {
        setShowMe2(false);
      }, 3000);
    } else {
      cookies.set("last", new Date());

      const newBox = {
        gem1luck: gem1luck,
        gem1efficiency: gem1efficiency,
        gem1resillience: gem1resillience,
        gem1comfort: gem1comfort,
        gst: gst,
        gem2efficiency: gem2efficiency,
        gem2luck: gem2luck,
        gem2resillience: gem2resillience,
        gem2comfort: gem2comfort,
        mblvl: props.mblvl,
        commonScroll: commonScroll,
        uncommonScroll: uncommonScroll,
        rareScroll: rareScroll,
      };
      console.log(newBox);

      console.log(process.env.REACT_APP_API_ENDPOINT);
      await fetch(process.env.REACT_APP_API_ENDPOINT + "/record/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBox),
      });

      // setForm({ gem1luck: 0,gst:0 });
      setGem1comfort(0);
      setGem1efficiency(0);
      setGem1luck(0);
      setGem1resillience(0);
      setGst(0);

      setGem2efficiency(0);
      setGem2luck(0);
      setGem2resillience(0);
      setGem2comfort(0);
      setCommonScroll(0);
      setUncommonScroll(0);
      setRareScroll(0);
      navigate("/");
    }
  }

  function subtractValue(value) {
    if (value == "1") {
      let newGem1Luck = gem1luck - 1;
      if (newGem1Luck < 0) {
        newGem1Luck = 0;
      }
      setGem1luck(newGem1Luck);
    }
    if (value == "2") {
      let newGst = gst - 1;
      if (newGst < 0) {
        newGst = 0;
      }
      setGst(newGst);
    }
    if (value == "3") {
      let neweff = gem1efficiency - 1;
      if (neweff < 0) {
        neweff = 0;
      }
      setGem1efficiency(neweff);
    }
    if (value == "4") {
      let newres = gem1resillience - 1;
      if (newres < 0) {
        newres = 0;
      }
      setGem1resillience(newres);
    }
    if (value == "5") {
      let newcomf = gem1comfort - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setGem1comfort(newcomf);
    }
    if (value == "6") {
      let newcomf = gem2luck - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setGem2luck(newcomf);
    }
    if (value == "7") {
      let newcomf = gem2efficiency - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setGem2efficiency(newcomf);
    }
    if (value == "8") {
      let newcomf = gem2resillience - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setGem2resillience(newcomf);
    }
    if (value == "9") {
      let newcomf = gem2comfort - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setGem2comfort(newcomf);
    }
    if (value == "10") {
      let newcomf = commonScroll - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setCommonScroll(newcomf);
    }
    if (value == "11") {
      let newcomf = uncommonScroll - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setUncommonScroll(newcomf);
    }
    if (value == "12") {
      let newcomf = rareScroll - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setRareScroll(newcomf);
    }
  }

  function addValue(value) {
    console.log("adding value");
    if (value == "1") {
      let newGem1Luck = gem1luck + 1;
      if (newGem1Luck > 10) {
        newGem1Luck = 10;
      }
      setGem1luck(newGem1Luck);
    }
    if (value == "2") {
      let newGst = gst + 1;
      if (newGst > 10) {
        newGst = 10;
      }
      setGst(newGst);
    }
    if (value == "3") {
      let neweff = gem1efficiency + 1;
      if (neweff > 10) {
        neweff = 10;
      }
      setGem1efficiency(neweff);
    }
    if (value == "4") {
      let newres = gem1resillience + 1;
      if (newres > 10) {
        newres = 10;
      }
      setGem1resillience(newres);
    }
    if (value == "5") {
      let newconf = gem1comfort + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setGem1comfort(newconf);
    }
    if (value == "6") {
      let newconf = gem2luck + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setGem2luck(newconf);
    }
    if (value == "7") {
      let newconf = gem2efficiency + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setGem2efficiency(newconf);
    }
    if (value == "8") {
      let newconf = gem2resillience + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setGem2resillience(newconf);
    }
    if (value == "9") {
      let newconf = gem2comfort + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setGem2comfort(newconf);
    }
    if (value == "10") {
      let newconf = commonScroll + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setCommonScroll(newconf);
    }
    if (value == "11") {
      let newconf = uncommonScroll + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setUncommonScroll(newconf);
    }
    if (value == "12") {
      let newconf = rareScroll + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setRareScroll(newconf);
    }
  }

  return (
    <div>
      <form class="submitform" onSubmit={onSubmit}>
        <div className="form-group">
          <section class="form-group-col form-group-col1">
            <Ticker
              value={gem1luck}
              id="1"
              updateForm={updateForm}
              valueShort="Level 1 Luck Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />

            <Ticker
              value={gst}
              id="2"
              updateForm={updateForm}
              valueShort="Gst"
              addValue={addValue}
              subtractValue={subtractValue}
            />
          </section>
          <section class="form-group-col form-group-col2">
            <Ticker
              value={gem1efficiency}
              id="3"
              updateForm={updateForm}
              valueShort="Level 1 Efficiency Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />
            <Ticker
              value={gem1resillience}
              id="4"
              updateForm={updateForm}
              valueShort="Level 1 Resillience Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />
          </section>
          <section class="form-group-col form-group-col3">
            <Ticker
              value={gem1comfort}
              id="5"
              updateForm={updateForm}
              valueShort="Level 1 Comfort Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />

            <Ticker
              value={gem2luck}
              id="6"
              updateForm={updateForm}
              valueShort="Level 2 Luck Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />
          </section>

          <section class="form-group-col form-group-col3">
            <Ticker
              value={gem2efficiency}
              id="7"
              updateForm={updateForm}
              valueShort="Level 2 Efficiency Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />
            <Ticker
              value={gem2resillience}
              id="8"
              updateForm={updateForm}
              valueShort="Level 2 Resillience Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />
          </section>
          <section class="form-group-col form-group-col3">
            <Ticker
              value={gem2comfort}
              id="9"
              updateForm={updateForm}
              valueShort="Level 2 Comfort Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />
            <Ticker
              value={uncommonScroll}
              id="11"
              updateForm={updateForm}
              valueShort="Uncommon Scroll"
              addValue={addValue}
              subtractValue={subtractValue}
            />
          </section>
          <section className="form-group-col form-group-col3">
            <Ticker
              value={commonScroll}
              id="10"
              updateForm={updateForm}
              valueShort="Common Scroll"
              addValue={addValue}
              subtractValue={subtractValue}
            />
            <Ticker
              value={rareScroll}
              id="12"
              updateForm={updateForm}
              valueShort="Rare Scroll"
              addValue={addValue}
              subtractValue={subtractValue}
            />
          </section>
        </div>
        <div className="inside-form-group button-wrap">
          <input type="submit" value="SUBMIT" className="btn btn-primary" />
          {showMe == true ? (
            <div className="showme">You can only submit one box per hour.</div>
          ) : (
            <div></div>
          )}
          {showMe2 == true ? (
            <div className="showme showme2">
              You cannot submit an empty box.
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </form>
    </div>
  );
}

export function CreateMb3(props) {
  const [gem1luck, setGem1luck] = useState(0);
  const [gem1efficiency, setGem1efficiency] = useState(0);
  const [gem1resillience, setGem1resillience] = useState(0);
  const [gem1comfort, setGem1comfort] = useState(0);
  const [gem2luck, setGem2luck] = useState(0);
  const [gem2efficiency, setGem2efficiency] = useState(0);
  const [gem2resillience, setGem2resillience] = useState(0);
  const [gem2comfort, setGem2comfort] = useState(0);
  const [commonScroll, setCommonScroll] = useState(0);
  const [uncommonScroll, setUncommonScroll] = useState(0);
  const [gst, setGst] = useState(0);
  const [gem3efficiency, setGem3efficiency] = useState(0);
  const [gem3luck, setGem3luck] = useState(0);
  const [gem3resillience, setGem3resillience] = useState(0);
  const [gem3comfort, setGem3comfort] = useState(0);
  const [rareScroll, setRareScroll] = useState(0);
  const [epicScroll, setEpicScroll] = useState(0);
  const navigate = useNavigate();
  const [showMe, setShowMe] = useState(0);
  const [showMe2, setShowMe2] = useState(0);
  const cookies = new Cookies();

  // these methods will update state properties
  function updateForm(e) {
    if (e.target.id === "1" && e.target.value >= 0 && e.target.value <= 10) {
      setGem1luck(e.target.value);
    } else if (e.target.id === "1" && e.target.value == "") {
      setGem1luck("");
    }

    if (e.target.id === "2" && e.target.value >= 0 && e.target.value <= 10) {
      setGst(e.target.value);
    } else if (e.target.id === "2" && e.target.value == "") {
      setGst("");
    }

    if (e.target.id === "3" && e.target.value >= 0 && e.target.value <= 10) {
      setGem1efficiency(e.target.value);
    } else if (e.target.id === "3" && e.target.value == "") {
      setGem1efficiency("");
    }

    if (e.target.id === "4" && e.target.value >= 0 && e.target.value <= 10) {
      setGem1resillience(e.target.value);
    } else if (e.target.id === "4" && e.target.value == "") {
      setGem1resillience("");
    }

    if (e.target.id === "5" && e.target.value >= 0 && e.target.value <= 10) {
      setGem1comfort(e.target.value);
    } else if (e.target.id === "5" && e.target.value == "") {
      setGem1comfort("");
    }

    if (e.target.id === "10" && e.target.value >= 0 && e.target.value <= 10) {
      setCommonScroll(e.target.value);
    } else if (e.target.id === "10" && e.target.value == "") {
      setCommonScroll("");
    }

    if (e.target.id === "11" && e.target.value >= 0 && e.target.value <= 10) {
      setUncommonScroll(e.target.value);
    } else if (e.target.id === "11" && e.target.value == "") {
      setUncommonScroll("");
    }

    if (e.target.id === "6" && e.target.value >= 0 && e.target.value <= 10) {
      setGem2luck(e.target.value);
    } else if (e.target.id === "6" && e.target.value == "") {
      setGem2luck("");
    }

    if (e.target.id === "7" && e.target.value >= 0 && e.target.value <= 10) {
      setGem2efficiency(e.target.value);
    } else if (e.target.id === "7" && e.target.value == "") {
      setGem2efficiency("");
    }

    if (e.target.id === "8" && e.target.value >= 0 && e.target.value <= 10) {
      setGem2resillience(e.target.value);
    } else if (e.target.id === "8" && e.target.value == "") {
      setGem2resillience("");
    }

    if (e.target.id === "9" && e.target.value >= 0 && e.target.value <= 10) {
      setGem2comfort(e.target.value);
    } else if (e.target.id === "9" && e.target.value == "") {
      setGem2comfort("");
    }

    if (e.target.id === "12" && e.target.value >= 0 && e.target.value <= 10) {
      setGem3efficiency(e.target.value);
    } else if (e.target.id === "12" && e.target.value == "") {
      setGem3efficiency("");
    }

    if (e.target.id === "13" && e.target.value >= 0 && e.target.value <= 10) {
      setGem3luck(e.target.value);
    } else if (e.target.id === "13" && e.target.value == "") {
      setGem3luck("");
    }

    if (e.target.id === "14" && e.target.value >= 0 && e.target.value <= 10) {
      setGem3resillience(e.target.value);
    } else if (e.target.id === "14" && e.target.value == "") {
      setGem3resillience("");
    }

    if (e.target.id === "15" && e.target.value >= 0 && e.target.value <= 10) {
      setGem3comfort(e.target.value);
    } else if (e.target.id === "15" && e.target.value == "") {
      setGem3comfort("");
    }

    if (e.target.id === "16" && e.target.value >= 0 && e.target.value <= 10) {
      setRareScroll(e.target.value);
    } else if (e.target.id === "16" && e.target.value == "") {
      setRareScroll("");
    }
    if (e.target.id === "17" && e.target.value >= 0 && e.target.value <= 10) {
      setEpicScroll(e.target.value);
    } else if (e.target.id === "17" && e.target.value == "") {
      setEpicScroll("");
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    let now = new Date();
    let before = new Date(cookies.get("last"));
    let last = Math.abs(before - now);
    console.log(last);
    console.log(cookies.get("last"));

    if (last < 3600000) {
      console.log("showme");
      setShowMe(true);
      setTimeout(() => {
        setShowMe(false);
      }, 3000);
    } else if (
      gem1luck == 0 &&
      gem1efficiency == 0 &&
      gem1resillience == 0 &&
      gem1comfort == 0 &&
      gst == 0 &&
      commonScroll == 0 &&
      uncommonScroll == 0 &&
      gem2efficiency == 0 &&
      gem2luck == 0 &&
      gem2resillience == 0 &&
      gem2comfort == 0 &&
      rareScroll == 0 &&
      gem3efficiency == 0 &&
      gem3luck == 0 &&
      gem3resillience == 0 &&
      gem3comfort == 0 &&
      epicScroll == 0
    ) {
      setShowMe2(true);
      setTimeout(() => {
        setShowMe2(false);
      }, 3000);
    } else {
      cookies.set("last", new Date());

      const newBox = {
        gem1luck: gem1luck,
        gem1efficiency: gem1efficiency,
        gem1resillience: gem1resillience,
        gem1comfort: gem1comfort,
        gst: gst,
        gem2efficiency: gem2efficiency,
        gem2luck: gem2luck,
        gem2resillience: gem2resillience,
        gem2comfort: gem2comfort,
        mblvl: props.mblvl,
        commonScroll: commonScroll,
        uncommonScroll: uncommonScroll,
        gem3efficiency: gem3efficiency,
        gem3luck: gem3luck,
        gem3resillience: gem3resillience,
        gem3comfort: gem3comfort,
        rareScroll: rareScroll,
        epicScroll: epicScroll,
      };
      console.log(newBox);

      console.log(process.env.REACT_APP_API_ENDPOINT);
      await fetch(process.env.REACT_APP_API_ENDPOINT + "/record/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBox),
      });

      // setForm({ gem1luck: 0,gst:0 });
      setGem1comfort(0);
      setGem1efficiency(0);
      setGem1luck(0);
      setGem1resillience(0);
      setGst(0);

      setGem2efficiency(0);
      setGem2luck(0);
      setGem2resillience(0);
      setGem2comfort(0);
      setCommonScroll(0);
      setUncommonScroll(0);

      setGem3efficiency(0);
      setGem3luck(0);
      setGem3resillience(0);
      setGem3comfort(0);
      setRareScroll(0);
      setEpicScroll(0);
      navigate("/");
    }
  }

  function subtractValue(value) {
    if (value == "1") {
      let newGem1Luck = gem1luck - 1;
      if (newGem1Luck < 0) {
        newGem1Luck = 0;
      }
      setGem1luck(newGem1Luck);
    }
    if (value == "2") {
      let newGst = gst - 1;
      if (newGst < 0) {
        newGst = 0;
      }
      setGst(newGst);
    }
    if (value == "3") {
      let neweff = gem1efficiency - 1;
      if (neweff < 0) {
        neweff = 0;
      }
      setGem1efficiency(neweff);
    }
    if (value == "4") {
      let newres = gem1resillience - 1;
      if (newres < 0) {
        newres = 0;
      }
      setGem1resillience(newres);
    }
    if (value == "5") {
      let newcomf = gem1comfort - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setGem1comfort(newcomf);
    }
    if (value == "6") {
      let newcomf = gem2luck - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setGem2luck(newcomf);
    }
    if (value == "7") {
      let newcomf = gem1efficiency - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setGem2efficiency(newcomf);
    }
    if (value == "8") {
      let newcomf = gem2resillience - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setGem2resillience(newcomf);
    }
    if (value == "9") {
      let newcomf = gem2comfort - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setGem2comfort(newcomf);
    }
    if (value == "10") {
      let newcomf = commonScroll - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setCommonScroll(newcomf);
    }
    if (value == "11") {
      let newcomf = uncommonScroll - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setUncommonScroll(newcomf);
    }
    if (value == "12") {
      let newcomf = gem3efficiency - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setGem3efficiency(newcomf);
    }
    if (value == "13") {
      let newcomf = gem3luck - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setGem3luck(newcomf);
    }
    if (value == "14") {
      let newcomf = gem3resillience - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setGem3resillience(newcomf);
    }
    if (value == "15") {
      let newcomf = gem3comfort - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setGem3comfort(newcomf);
    }
    if (value == "16") {
      let newcomf = rareScroll - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setRareScroll(newcomf);
    }
    if (value == "17") {
      let newcomf = epicScroll - 1;
      if (newcomf < 0) {
        newcomf = 0;
      }
      setEpicScroll(newcomf);
    }
  }

  function addValue(value) {
    console.log("adding value");
    if (value == "1") {
      let newGem1Luck = gem1luck + 1;
      if (newGem1Luck > 10) {
        newGem1Luck = 10;
      }
      setGem1luck(newGem1Luck);
    }
    if (value == "2") {
      let newGst = gst + 1;
      if (newGst > 10) {
        newGst = 10;
      }
      setGst(newGst);
    }
    if (value == "3") {
      let neweff = gem1efficiency + 1;
      if (neweff > 10) {
        neweff = 10;
      }
      setGem1efficiency(neweff);
    }
    if (value == "4") {
      let newres = gem1resillience + 1;
      if (newres > 10) {
        newres = 10;
      }
      setGem1resillience(newres);
    }
    if (value == "5") {
      let newconf = gem1comfort + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setGem1comfort(newconf);
    }
    if (value == "6") {
      let newconf = gem2luck + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setGem2luck(newconf);
    }
    if (value == "7") {
      let newconf = gem2efficiency + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setGem2efficiency(newconf);
    }
    if (value == "8") {
      let newconf = gem2resillience + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setGem2resillience(newconf);
    }
    if (value == "9") {
      let newconf = gem2comfort + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setGem2comfort(newconf);
    }
    if (value == "10") {
      let newconf = commonScroll + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setCommonScroll(newconf);
    }
    if (value == "11") {
      let newconf = uncommonScroll + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setUncommonScroll(newconf);
    }
    if (value == "12") {
      let newconf = gem3efficiency + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setGem3efficiency(newconf);
    }
    if (value == "13") {
      let newconf = gem3luck + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setGem3luck(newconf);
    }
    if (value == "14") {
      let newconf = gem3resillience + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setGem3resillience(newconf);
    }
    if (value == "15") {
      let newconf = gem3comfort + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setGem3comfort(newconf);
    }
    if (value == "16") {
      let newconf = rareScroll + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setRareScroll(newconf);
    }
    if (value == "17") {
      let newconf = epicScroll + 1;
      if (newconf > 10) {
        newconf = 10;
      }
      setEpicScroll(newconf);
    }
  }

  return (
    <div>
      <form class="submitform" onSubmit={onSubmit}>
        <div className="form-group">
          <section class="form-group-col form-group-col1">
            <Ticker
              value={gem1luck}
              id="1"
              updateForm={updateForm}
              valueShort="Level 1 Luck Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />

            <Ticker
              value={gst}
              id="2"
              updateForm={updateForm}
              valueShort="Gst"
              addValue={addValue}
              subtractValue={subtractValue}
            />
          </section>
          <section class="form-group-col form-group-col2">
            <Ticker
              value={gem1efficiency}
              id="3"
              updateForm={updateForm}
              valueShort="Level 1 Efficiency Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />
            <Ticker
              value={gem1resillience}
              id="4"
              updateForm={updateForm}
              valueShort="Level 1 Resillience Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />
          </section>
          <section class="form-group-col form-group-col3">
            <Ticker
              value={gem1comfort}
              id="5"
              updateForm={updateForm}
              valueShort="Level 1 Comfort Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />

            <Ticker
              value={gem2luck}
              id="6"
              updateForm={updateForm}
              valueShort="Level 2 Luck Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />
          </section>

          <section class="form-group-col form-group-col3">
            <Ticker
              value={gem2efficiency}
              id="7"
              updateForm={updateForm}
              valueShort="Level 2 Efficiency Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />
            <Ticker
              value={gem2resillience}
              id="8"
              updateForm={updateForm}
              valueShort="Level 2 Resillience Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />
          </section>
          <section class="form-group-col form-group-col3">
            <Ticker
              value={gem2comfort}
              id="9"
              updateForm={updateForm}
              valueShort="Level 2 Comfort Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />
            <Ticker
              value={uncommonScroll}
              id="11"
              updateForm={updateForm}
              valueShort="Uncommon Scroll"
              addValue={addValue}
              subtractValue={subtractValue}
            />
          </section>
          <section className="form-group-col form-group-col3">
            <Ticker
              value={commonScroll}
              id="10"
              updateForm={updateForm}
              valueShort="Common Scroll"
              addValue={addValue}
              subtractValue={subtractValue}
            />
            <Ticker
              value={gem3efficiency}
              id="12"
              updateForm={updateForm}
              valueShort="Lvl 1 Efficiency Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />
          </section>
          <section className="form-group-col form-group-col3">
            <Ticker
              value={gem3luck}
              id="13"
              updateForm={updateForm}
              valueShort="Lvl 3 Luck Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />
            <Ticker
              value={gem3resillience}
              id="14"
              updateForm={updateForm}
              valueShort="Lvl 3 Resillience Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />
          </section>
          <section className="form-group-col form-group-col3">
            <Ticker
              value={gem3comfort}
              id="15"
              updateForm={updateForm}
              valueShort="Lvl 3 Comfort Gem"
              addValue={addValue}
              subtractValue={subtractValue}
            />
            <Ticker
              value={rareScroll}
              id="16"
              updateForm={updateForm}
              valueShort="Rare Scroll"
              addValue={addValue}
              subtractValue={subtractValue}
            />
          </section>
          <section className="form-group-col form-group-col3">
            <Ticker
              value={epicScroll}
              id="17"
              updateForm={updateForm}
              valueShort="Epic Scroll"
              addValue={addValue}
              subtractValue={subtractValue}
            />
          </section>

          {/* <section class="form-group-col form-group-col3">
            
          </section> */}
        </div>
        <div className="inside-form-group button-wrap">
          <input type="submit" value="SUBMIT" className="btn btn-primary" />
          {showMe == true ? (
            <div className="showme">You can only submit one box per hour.</div>
          ) : (
            <div></div>
          )}
          {showMe2 == true ? (
            <div className="showme showme2">
              You cannot submit an empty box.
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </form>
    </div>
  );
}
const Ticker = ({
  id,
  updateForm,
  value,
  valueShort,
  addValue,
  subtractValue,
}) => {
  return (
    <div className="inside-form-group">
      <label htmlFor="gst">{valueShort}</label>
      <div class="slidercontainer">
        <i class="arrow up" id={id} onClick={(e) => addValue(e.target.id)}></i>
        <input
          type="number"
          min="0"
          max="10"
          className="slider"
          onKeyDown={(evt) => evt.key === "e" && evt.preventDefault()}
          id={id}
          value={value}
          onChange={(e) => updateForm(e)}
        />
        <i
          class="arrow down"
          id={id}
          onClick={(e) => subtractValue(e.target.id)}
        ></i>
      </div>
    </div>
  );
};
