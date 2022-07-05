import React,{useEffect, useState} from "react";
import {ReactComponent as Gst} from "../assets/images/gst.svg"


export default function Display(){
    const [lvl, setLvl]= useState(1)
    const [values, setValues]=useState([])

    useEffect(()=>{
        
        console.log(lvl)
        console.log("sending")

        fetch(process.env.REACT_APP_API_ENDPOINT+"/record/find/"+ lvl.toString(), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(response=>response.json())
        .then(data=>{
            setValues(data)
            // console.log(data)
        })

    },[lvl])

    useEffect(()=>{
        console.log(values)
    },[values])

    const addValue = ()=>{
        if(lvl<10){
            setLvl(lvl+1)
            // send()
        }
        // console.log(lvl)
    }
    const subtractValue = ()=>{
        if(lvl>0){

            // send()
            setLvl(lvl-1)
        }
    }


    const updateLvl = (e)=>{
        if(e>=0 && e<=10){
            // console.log("sending")
            setLvl(e)
        //    send()
        }else{
            return
        }
    }


    async function send(e){
        // e.preventDefault();
        
        // const boxLvl = {
        //     boxLvl:lvl
        // }
    


    }


    return(
        <div>
            <div className="containdisplay">
                <section className="display-first">
                     <div className="display-first-wrap">
                    <div className="inner-display-first">
                        <p>Box Level</p>
                        <div>
                        <div className="slidercontainer">
                            <i className="arrow up" id="1" onClick={(e)=> addValue(e.target.id)}></i>
                            <input
                                type="number"
                                min="0"
                                max="10"
                                className="slider"
                                id="slider"
                                value={lvl}
                                onChange={(e) => updateLvl(e.target.value)}
                            />
                            <i className="arrow down" id="1" onClick={(e)=> subtractValue(e.target.id)}></i>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="inner-display-second">
                        <DisplayData values={values}/>

                    </div>
                    
                </section>
             

                <section className="display-second">


                </section>

            </div>

        </div>
    )
}

const DisplayData = ({values})=>{
  

    const getNewString = (entry)=>{
        if(entry.includes("gem1luck")== true){
            entry = entry.replace("gem1luck", "lvl 1 luck gem")
        }

        if(entry.includes("gem1resillience")== true){
            entry = entry.replace("gem1resillience", "lvl 1 resillience gem")
        }

        if(entry.includes("gem1comfort")== true){
            entry = entry.replace("gem1comfort", "lvl 1 comfort gem")
        }

        if(entry.includes("gem1efficiency")== true){
            entry = entry.replace("gem1efficiency", "lvl 1 efficiency gem")
        }
        return(entry);

    }

    const [strings, setStrings]=useState([])
    const [newstrings,setNewStrings]=useState([])
    useEffect(()=>{
        setNewStrings(strings)
        setStrings([])
    },[values])
   
    useEffect(()=>{

       
        
        if(values[0]){
            
            console.log("in here")
            console.log(values)
            for(let i=0;i<values.length;i++){

               
                let newEntry = ""
                for (const [key, value] of Object.entries(values[i])){
                    if(value!=0 && key!= "_id"&& key!= "times" && key!="percent"){
                        newEntry= newEntry + " " + value.toString() + " " + key + "+"
                        newEntry=getNewString(newEntry)
                        // console.log(key,value)
                        
                    }
                    // strings.indexOf(newEntry)==-1
                    if(key=="percent" ){
                        strings.push(newEntry)
                    }       
                }
                console.log(strings)
                
        }
        
        }
        // return(strings)
    },[values])
    

    if(values[0]){
        console.log(values)
        return(
            // <div></div>
            <div className="string-row">
                <div className="string-col string-col-1">
                    {values.map((val)=>(
                        <div className="string string1">{parseInt((val.percent)*100)}% </div>
                    ))}
                </div>
                <div className="string-col string-col-2">
                    {newstrings.map((string)=>(
                        <GetIcon string={string}/>
                    ))}
                </div>
            </div>
        )
        
    }else{

        
        return(<div>no data yet</div>)
    }
}

// const IndividualData = ({values}) =>{
//     if (values[1].gst !=0 && values[1].gem1luck!=0)
// }
const GetIcon=({string})=>{
    let content1="";
    let content2="";
    if(string.includes("efficiency")==true){
        const splitString = string.split("+")
        for(let i=0;i<splitString.length;i++){
            if(splitString[i].includes("efficiency")){

               content1 = <div>{splitString[i]} <img className="gem-icon" src={require("../assets/images/lvl1efficiency.png")}/></div>
            }
        }
    }
    if(string.includes("resillience")==true && content1==""){
        const splitString = string.split("+")
        for(let i=0;i<splitString.length;i++){
            if(splitString[i].includes("resillience")){

               content1 = <div>{splitString[i]} <img className="gem-icon" src={require("../assets/images/lvl1resillience.png")}/></div>
            }
        }
    } else if (string.includes("resillience")==true){
        const splitString = string.split("+")
        for(let i=0;i<splitString.length;i++){
            if(splitString[i].includes("resillience")){

               content2 = <div class="content2">{splitString[i]} <img className="gem-icon" src={require("../assets/images/lvl1resillience.png")}/></div>
            }
        }
    }
 
    if(string.includes("comfort")==true && content1==""){
        const splitString = string.split("+")
        for(let i=0;i<splitString.length;i++){
            if(splitString[i].includes("comfort")){

               content1 = <div>{splitString[i]} <img className="gem-icon" src={require("../assets/images/lvl1comfort.png")}/></div>
            }
        }
    } else if (string.includes("comfort")==true){
        const splitString = string.split("+")
        for(let i=0;i<splitString.length;i++){
            if(splitString[i].includes("comfort")){

               content2 = <div class="content2">{splitString[i]} <img className="gem-icon" src={require("../assets/images/lvl1comfort.png")}/></div>
            }
        }
    }
     if(string.includes("luck")==true && content1==""){
        const splitString = string.split("+")
        for(let i=0;i<splitString.length;i++){
            if(splitString[i].includes("luck")){

               content1 = <div>{splitString[i]} <img className="gem-icon" src={require("../assets/images/lvl1luck.png")}/></div>
            }
        }
    } else if (string.includes("luck")==true){
        const splitString = string.split("+")
        for(let i=0;i<splitString.length;i++){
            if(splitString[i].includes("luck")){

               content2 = <div class="content2">{splitString[i]} <img className="gem-icon" src={require("../assets/images/lvl1luck.png")}/></div>
            }
        }
    }
        if(string.includes("gst")==true && content1==""){
        const splitString = string.split("+")
        for(let i=0;i<splitString.length;i++){
            if(splitString[i].includes("gst")){

               content1 = <div>{splitString[i]} <Gst className="gem-icon"/></div>
            }
        }
    } else if (string.includes("gst")==true){
        const splitString = string.split("+")
        for(let i=0;i<splitString.length;i++){
            if(splitString[i].includes("gst")){

               content2 = <div class="content2">{splitString[i]} <Gst className="gem-icon"/></div>
            }
        }
    }
    
 
    
    if(content2==""){
        return(
            <div className="around-icon string">{content1}</div>
        )
    } else{
        return(
            <div className="around-icon string">{content1}{content2}</div>
        )
    }


}