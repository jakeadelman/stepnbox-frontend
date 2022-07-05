import React,{useState} from "react";
import {useNavigate} from "react-router";

export function CreateMb1(props){
    // const [form, setForm]= useState({
    //     gem1luck:0,
    //     gem1efficiency:0,
    //     gem1resillience:0,
    //     gem1comfort:0,
    //     gst:0,
    // })
    const [gem1luck, setGem1luck]=useState(0);
    const [gem1efficiency, setGem1efficiency]=useState(0);
    const [gem1resillience, setGem1resillience]=useState(0);
    const [gem1comfort, setGem1comfort]=useState(0);
    const [gst, setGst]=useState(0);
    const navigate = useNavigate();
    
    // these methods will update state properties
    function updateForm(value){
      console.log(value)
      console.log("value")
      console.log(value.gem1luck)
      // console.log("luck")

      if (value.gst && value.gst>=0 && value.gst<=10){
        setGst(value.gst)
      } else if(value.gst){
       return
      }

      
      if (value.gem1luck && value.gem1luck>=0 && value.gem1luck<=10){
        setGem1luck(value.gem1luck)
      } else if(value.gem1luck){
        return
      }
 
      if (value.gem1efficiency && value.gem1efficiency>=0 && value.gem1efficiency<=10){
        setGem1efficiency(value.gem1efficiency)
      } else if(value.gem1efficiency){
        return
      }
 
      if (value.gem1resillience && value.gem1resillience>=0 && value.gem1resillience<=10){
        setGem1resillience(value.gem1resillience)
      } else if(value.gem1resillience){
        return
      }
 
      if (value.gem1comfort && value.gem1comfort>=0 && value.gem1comfort<=10){
        setGem1comfort(value.gem1comfort)
      } else if(value.gem1comfort){
        return
      }

    }
    
    async function onSubmit(e){
        e.preventDefault();

        const newBox = {
          gem1luck:gem1luck,
          gem1efficiency:gem1efficiency,
          gem1resillience:gem1resillience,
          gem1comfort:gem1comfort,
          gst:gst,
          mblvl:props.mblvl
        };
        console.log(newBox)

        console.log(process.env.REACT_APP_API_ENDPOINT)
        await fetch(process.env.REACT_APP_API_ENDPOINT+"/record/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newBox),
        })

        // setForm({ gem1luck: 0,gst:0 });
        setGem1comfort(0);
        setGem1efficiency(0);
        setGem1luck(0);
        setGem1resillience(0);
        setGst(0);
        navigate("/");
    }

    function subtractValue(value){

      if(value== "1"){
        let newGem1Luck = gem1luck-1;
        if(newGem1Luck<0){
          newGem1Luck = 0;
        }
        setGem1luck(newGem1Luck)
     
      }
      if(value== "2"){
        let newGst = gst-1;
        if (newGst<0){
          newGst =0;
        }
          setGst(newGst)
        }
      if(value== "3"){
        let neweff = gem1efficiency-1;
        if (neweff<0){
          neweff =0;
        }
          setGem1efficiency(neweff)
        }
      if(value== "4"){
        let newres = gem1resillience-1;
        if (newres<0){
          newres =0;
        }
          setGem1resillience(newres)
        }
      if(value== "5"){
        let newcomf = gem1comfort-1;
        if (newcomf<0){
          newcomf =0;
        }
          setGem1comfort(newcomf)
        }
      
    }

    function addValue(value){
      console.log("adding value")
      if(value== "1"){
        let newGem1Luck = gem1luck+1;
        if(newGem1Luck>10){
          newGem1Luck = 10;
        }
        console.log(newGem1Luck)
         setGem1luck(newGem1Luck)
      }
      if(value== "2"){
        let newGst = gst+1;
        if (newGst>10){
          newGst =10;
        }
        setGst(newGst)
        }
      if(value== "3"){
      let neweff = gem1efficiency+1;
      if (neweff>10){
        neweff =10;
      }
        setGem1efficiency(neweff)
      }
      if(value== "4"){
      let newres = gem1resillience+1;
      if (newres >10){
        newres =10;
      }
        setGem1resillience(newres)
      }
        if(value== "5"){
      let newconf = gem1comfort+1;
      if (newconf>10){
        newconf =10;
      }
        setGem1comfort(newconf)
     }
    
    }

    return (
        <div>
          


          <form class="submitform"onSubmit={onSubmit}>
            <div className="form-group">
              <section class="form-group-col form-group-col1">
              <div class="inside-form-group">
              
                <label htmlFor="gem1luck">Lv 1  Luck  Gem</label>
          
             
              
                <div class="slidercontainer">
                <i class="arrow up" id="1" onClick={(e)=> addValue(e.target.id)}></i>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    className="slider"
                    id="slider"
                    value={gem1luck}
                    onChange={(e) => updateForm({ gem1luck: e.target.value })}
                  />
                  <i class="arrow down" id="1" onClick={(e)=> subtractValue(e.target.id)}></i>
              </div>
            </div>
           
           
            <div className="inside-form-group">
            <label htmlFor="gst">Gst</label>
              <div class="slidercontainer">
               
                
              <i class="arrow up" id="2" onClick={(e)=> addValue(e.target.id)}></i>
                <input
                  type="number"
                  min="0"
                  max="10"
                  className="slider"
                  id="slider"
                  value={gst}
                  onChange={(e) => updateForm({ gst: e.target.value })}
                />
                 <i class="arrow down" id="2" onClick={(e)=> subtractValue(e.target.id)}></i>
              </div>
            </div>
            </section>
            <section class="form-group-col form-group-col2">
            <div className="inside-form-group">
            <label htmlFor="gst">Level 1 Efficiency Gem</label>
              <div class="slidercontainer">
               
                
              <i class="arrow up" id="3" onClick={(e)=> addValue(e.target.id)}></i>
                <input
                  type="number"
                  min="0"
                  max="10"
                  className="slider"
                  id="slider"
                  value={gem1efficiency}
                  onChange={(e) => updateForm({ gem1efficiency: e.target.value })}
                />
                 <i class="arrow down" id="3" onClick={(e)=> subtractValue(e.target.id)}></i>
              </div>
            </div>

            <div className="inside-form-group">
            <label htmlFor="gst">Level 1 Resillience Gem</label>
              <div class="slidercontainer">
               
                
              <i class="arrow up" id="4" onClick={(e)=> addValue(e.target.id)}></i>
                <input
                  type="number"
                  min="0"
                  max="10"
                  className="slider"
                  id="slider"
                  value={gem1resillience}
                  onChange={(e) => updateForm({ gem1resillience: e.target.value })}
                />
                 <i class="arrow down" id="4" onClick={(e)=> subtractValue(e.target.id)}></i>
              </div>
            </div>
            </section>
            <section class="form-group-col form-group-col3">

            <div className="inside-form-group">
            <label htmlFor="gst">Level 1 Comfort Gem</label>
              <div class="slidercontainer">
               
                
              <i class="arrow up" id="5" onClick={(e)=> addValue(e.target.id)}></i>
                <input
                  type="number"
                  min="0"
                  max="10"
                  className="slider"
                  id="slider"
                  value={gem1comfort}
                  onChange={(e) => updateForm({ gem1comfort: e.target.value })}
                />
                 <i class="arrow down" id="5" onClick={(e)=> subtractValue(e.target.id)}></i>
              </div>
            </div>
            </section>
         
            
            </div>
            <div className="inside-form-group button-wrap">
              <input
                type="submit"
                value="SUBMIT NEW BOX"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      );
}

export function CreateMb2(props){
    const [gem1luck, setGem1luck]=useState(0);
    const [gem1efficiency, setGem1efficiency]=useState(0);
    const [gem1resillience, setGem1resillience]=useState(0);
    const [gem1comfort, setGem1comfort]=useState(0);
    const [gem2luck, setGem2luck]=useState(0);
    const [gem2efficiency, setGem2efficiency]=useState(0);
    const [gem2resillience, setGem2resillience]=useState(0);
    const [gem2comfort, setGem2comfort]=useState(0);
    const [gst, setGst]=useState(0);
    const navigate = useNavigate();
    
    // these methods will update state properties
    function updateForm(value){
      console.log(value)
      console.log("value")
      console.log(value.gem1luck)
      // console.log("luck")

      if (value.gst && value.gst>=0 && value.gst<=10){
        setGst(value.gst)
      } else if(value.gst){
       return
      }

      
      if (value.gem1luck && value.gem1luck>=0 && value.gem1luck<=10){
        setGem1luck(value.gem1luck)
      } else if(value.gem1luck){
        return
      }
 
      if (value.gem1efficiency && value.gem1efficiency>=0 && value.gem1efficiency<=10){
        setGem1efficiency(value.gem1efficiency)
      } else if(value.gem1efficiency){
        return
      }
 
      if (value.gem1resillience && value.gem1resillience>=0 && value.gem1resillience<=10){
        setGem1resillience(value.gem1resillience)
      } else if(value.gem1resillience){
        return
      }
 
      if (value.gem1comfort && value.gem1comfort>=0 && value.gem1comfort<=10){
        setGem1comfort(value.gem1comfort)
      } else if(value.gem1comfort){
        return
      }
    
      if (value.gem2efficiency && value.gem2efficiency>=0 && value.gem2efficiency<=10){
        setGem2efficiency(value.gem2efficiency)
      } else if(value.gem2efficiency){
        return
      }

      if (value.gem2resillience && value.gem2resillience>=0 && value.gem2resillience<=10){
        setGem2resillience(value.gem2resillience)
      } else if(value.gem2resillience){
        return
      }

      if (value.gem2comfort && value.gem2comfort>=0 && value.gem2comfort<=10){
        setGem2comfort(value.gem2comfort)
      } else if(value.gem2comfort){
        return
      }

      if (value.gem2luck && value.gem2luck>=0 && value.gem2luck<=10){
        setGem2luck(value.gem2luck)
      } else if(value.gem2luck){
        return
      }




    }
    
    async function onSubmit(e){
        e.preventDefault();

        const newBox = {
          gem1luck:gem1luck,
          gem1efficiency:gem1efficiency,
          gem1resillience:gem1resillience,
          gem1comfort:gem1comfort,
          gst:gst,
          gem2efficiency:gem2efficiency,
          gem2luck:gem2luck,
          gem2resillience:gem2resillience,
          gem2comfort:gem2comfort,
          mblvl:props.mblvl
        };
        console.log(newBox)

        console.log(process.env.API_ENDPOINT)
        await fetch(process.env.API_ENDPOINT+"/record/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newBox),
        })

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
        navigate("/");
    }

    function subtractValue(value){

      if(value== "1"){
        let newGem1Luck = gem1luck-1;
        if(newGem1Luck<0){
          newGem1Luck = 0;
        }
        setGem1luck(newGem1Luck)
     
      }
      if(value== "2"){
        let newGst = gst-1;
        if (newGst<0){
          newGst =0;
        }
          setGst(newGst)
        }
      if(value== "3"){
        let neweff = gem1efficiency-1;
        if (neweff<0){
          neweff =0;
        }
          setGem1efficiency(neweff)
        }
      if(value== "4"){
        let newres = gem1resillience-1;
        if (newres<0){
          newres =0;
        }
          setGem1resillience(newres)
        }
      if(value== "5"){
        let newcomf = gem1comfort-1;
        if (newcomf<0){
          newcomf =0;
        }
          setGem1comfort(newcomf)
        }
      if(value== "6"){
        let newcomf = gem2luck-1;
        if (newcomf<0){
          newcomf =0;
        }
          setGem2luck(newcomf)
        }
      if(value== "7"){
        let newcomf = gem1efficiency-1;
        if (newcomf<0){
          newcomf =0;
        }
          setGem2efficiency(newcomf)
        }
      if(value== "8"){
        let newcomf = gem2resillience-1;
        if (newcomf<0){
          newcomf =0;
        }
          setGem2resillience(newcomf)
        }
      if(value== "9"){
        let newcomf = gem2comfort-1;
        if (newcomf<0){
          newcomf =0;
        }
          setGem2comfort(newcomf)
        }
      
    }

    function addValue(value){
      console.log("adding value")
      if(value== "1"){
        let newGem1Luck = gem1luck+1;
        if(newGem1Luck>10){
          newGem1Luck = 10;
        }
        console.log(newGem1Luck)
         setGem1luck(newGem1Luck)
      }
      if(value== "2"){
        let newGst = gst+1;
        if (newGst>10){
          newGst =10;
        }
        setGst(newGst)
        }
      if(value== "3"){
      let neweff = gem1efficiency+1;
      if (neweff>10){
        neweff =10;
      }
        setGem1efficiency(neweff)
      }
      if(value== "4"){
      let newres = gem1resillience+1;
      if (newres >10){
        newres =10;
      }
        setGem1resillience(newres)
      }
        if(value== "5"){
      let newconf = gem1comfort+1;
      if (newconf>10){
        newconf =10;
      }
        setGem1comfort(newconf)
     }
     if(value== "6"){
        let newconf = gem2luck+1;
        if (newconf>10){
          newconf =10;
        }
          setGem2luck(newconf)
       }
       if(value== "7"){
        let newconf = gem2efficiency+1;
        if (newconf>10){
          newconf =10;
        }
          setGem2efficiency(newconf)
       }    
    if(value== "8"){
        let newconf = gem2resillience+1;
        if (newconf>10){
          newconf =10;
        }
          setGem2resillience(newconf)
       }
       if(value== "9"){
        let newconf = gem2comfort+1;
        if (newconf>10){
          newconf =10;
        }
          setGem2comfort(newconf)
       }
    }

    return (
        <div>
          


          <form class="submitform"onSubmit={onSubmit}>
            <div className="form-group">
              <section class="form-group-col form-group-col1">
              <div class="inside-form-group">
              
                <label htmlFor="gem1luck">Lv 1  Luck  Gem</label>
          
             
              
                <div class="slidercontainer">
                <i class="arrow up" id="1" onClick={(e)=> addValue(e.target.id)}></i>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    className="slider"
                    id="slider"
                    value={gem1luck}
                    onChange={(e) => updateForm({ gem1luck: e.target.value })}
                  />
                  <i class="arrow down" id="1" onClick={(e)=> subtractValue(e.target.id)}></i>
              </div>
            </div>
           
           
            <div className="inside-form-group">
            <label htmlFor="gst">Gst</label>
              <div class="slidercontainer">
               
                
              <i class="arrow up" id="2" onClick={(e)=> addValue(e.target.id)}></i>
                <input
                  type="number"
                  min="0"
                  max="10"
                  className="slider"
                  id="slider"
                  value={gst}
                  onChange={(e) => updateForm({ gst: e.target.value })}
                />
                 <i class="arrow down" id="2" onClick={(e)=> subtractValue(e.target.id)}></i>
              </div>
            </div>
            </section>
            <section class="form-group-col form-group-col2">
            <div className="inside-form-group">
            <label htmlFor="gst">Level 1 Efficiency Gem</label>
              <div class="slidercontainer">
               
                
              <i class="arrow up" id="3" onClick={(e)=> addValue(e.target.id)}></i>
                <input
                  type="number"
                  min="0"
                  max="10"
                  className="slider"
                  id="slider"
                  value={gem1efficiency}
                  onChange={(e) => updateForm({ gem1efficiency: e.target.value })}
                />
                 <i class="arrow down" id="3" onClick={(e)=> subtractValue(e.target.id)}></i>
              </div>
            </div>

            <div className="inside-form-group">
            <label htmlFor="gst">Level 1 Resillience Gem</label>
              <div class="slidercontainer">
               
                
              <i class="arrow up" id="4" onClick={(e)=> addValue(e.target.id)}></i>
                <input
                  type="number"
                  min="0"
                  max="10"
                  className="slider"
                  id="slider"
                  value={gem1resillience}
                  onChange={(e) => updateForm({ gem1resillience: e.target.value })}
                />
                 <i class="arrow down" id="4" onClick={(e)=> subtractValue(e.target.id)}></i>
              </div>
            </div>
            </section>
            <section class="form-group-col form-group-col3">

            <div className="inside-form-group">
            <label htmlFor="gst">Level 1 Comfort Gem</label>
              <div class="slidercontainer">
               
                
              <i class="arrow up" id="5" onClick={(e)=> addValue(e.target.id)}></i>
                <input
                  type="number"
                  min="0"
                  max="10"
                  className="slider"
                  id="slider"
                  value={gem1comfort}
                  onChange={(e) => updateForm({ gem1comfort: e.target.value })}
                />
                 <i class="arrow down" id="5" onClick={(e)=> subtractValue(e.target.id)}></i>
              </div>
            </div>
          
         
     

                <div className="inside-form-group">
                <label htmlFor="gst">Level 2 Luck Gem</label>
                <div class="slidercontainer">
                
                    
                <i class="arrow up" id="6" onClick={(e)=> addValue(e.target.id)}></i>
                    <input
                    type="number"
                    min="0"
                    max="10"
                    className="slider"
                    id="slider"
                    value={gem2luck}
                    onChange={(e) => updateForm({ gem2luck: e.target.value })}
                    />
                    <i class="arrow down" id="6" onClick={(e)=> subtractValue(e.target.id)}></i>
                </div>
                </div>
            </section>
            

            <section class="form-group-col form-group-col3">

            <div className="inside-form-group">
            <label htmlFor="gst">Level 2 Efficiency Gem</label>
            <div class="slidercontainer">

                
            <i class="arrow up" id="7" onClick={(e)=> addValue(e.target.id)}></i>
                <input
                type="number"
                min="0"
                max="10"
                className="slider"
                id="slider"
                value={gem2efficiency}
                onChange={(e) => updateForm({ gem2efficiency: e.target.value })}
                />
                <i class="arrow down" id="7" onClick={(e)=> subtractValue(e.target.id)}></i>
            </div>
            </div>
            </section>
            <section class="form-group-col form-group-col3">
            <div className="inside-form-group">
            <label htmlFor="gst">Level 2 Resillience Gem</label>
            <div class="slidercontainer">

                
            <i class="arrow up" id="8" onClick={(e)=> addValue(e.target.id)}></i>
                <input
                type="number"
                min="0"
                max="10"
                className="slider"
                id="slider"
                value={gem2resillience}
                onChange={(e) => updateForm({ gem2resillience: e.target.value })}
                />
                <i class="arrow down" id="8" onClick={(e)=> subtractValue(e.target.id)}></i>
            </div>
            </div>
           
            </section>

            <section class="form-group-col form-group-col3">
            

            <div className="inside-form-group">
            <label htmlFor="gst">Level 2 Comfort Gem</label>
            <div class="slidercontainer">

                
            <i class="arrow up" id="9" onClick={(e)=> addValue(e.target.id)}></i>
                <input
                type="number"
                min="0"
                max="10"
                className="slider"
                id="slider"
                value={gem2comfort}
                onChange={(e) => updateForm({ gem2comfort: e.target.value })}
                />
                <i class="arrow down" id="9" onClick={(e)=> subtractValue(e.target.id)}></i>
            </div>
            </div>
            </section>
            
            </div>
            <div className="inside-form-group button-wrap">
              <input
                type="submit"
                value="SUBMIT NEW BOX"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      );
}

export function CreateMb3(){
    return(
        <div></div>
    )
}