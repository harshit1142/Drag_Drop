import React, { useEffect, useState } from 'react'
import classes from './Main.module.css'
import Text from './Text';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addWid, setWid } from '../Redux/widgetSlice';
import Image from './Image';

export default function Main() {
   const dispatch=useDispatch();
  const widgets = useSelector(state => state.widget);

  function handleOnDrop(e){
   const widgetType=e.dataTransfer.getData("widgetType");
   dispatch(addWid(widgetType));
  }
  function handleSave(){
    localStorage.setItem("widget",JSON.stringify(widgets)); 
    console.log(widgets);
    alert("Activity Saved Successfully !!");
  }
  function handleDragOver(e){
     e.preventDefault();
  }
  useEffect(()=>{
    if(localStorage.getItem("widget"))
    {
      const stored=JSON.parse(localStorage.getItem("widget"));  
      dispatch(setWid(stored));
    }
  },[])

  return (
    <div className={classes.container}>
        <div className={classes.box}>
          <div className={classes.box_top}>
            <button className={classes.button} onClick={handleSave}>Save</button>
          </div>
        </div>
        <div className={classes.box_bottom} onDrop={handleOnDrop} onDragOver={handleDragOver}>
           {widgets.length>0 && widgets.map((widget,index)=>{
            return ( 
              ((widget.name) === ("./img.jpg") || (widget.name.indexOf("blob:http://localhost:3000")!==-1))? 
               <Image widget={widget} key={widget.id}/>
                :
               <Text widget={widget.name} id={widget.id} key={widget.id}/>
              )
           }) }
        </div>
    </div>
  )
}
