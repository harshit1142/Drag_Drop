import React, { useState } from 'react'
import classes from './Main.module.css'
import { useDispatch } from 'react-redux'
import { addWid, removeWid } from '../Redux/widgetSlice';

export default function Text({id,widget}) {
   const dispatch=useDispatch();
   const [text,setText]=useState(widget)
   const [click,setClick]=useState("");
   function handelSave(){
      dispatch(removeWid(id));
      dispatch(addWid(text));
      setClick("");
   }
  return (
    <div className={classes.textBox}>
      {click==="edit"?<input className={classes.text} value={text}  contentEditable onChange={(e)=>setText(e.target.value)} />:<div value={text} className={classes.text}>{text}</div> }
      
        <button className={classes.buttonSmall} onClick={(e)=>setClick("edit")}>Edit</button>
        <button className={classes.buttonSmall} onClick={handelSave}>Save</button>
      
    </div>
  )
}
