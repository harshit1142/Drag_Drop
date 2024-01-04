import React from 'react'
import classes from './Toolbar.module.css'


export default function Toolbar() {


    function handleOnDrag(e,widgetType){
       e.dataTransfer.setData("widgetType",widgetType);
    }
    

  return (
    <div className={classes.container}>
     <div className={classes.box}>
         <div className={classes.box_top}>
            <button className={classes.button}  draggable onDragStart={(e)=> handleOnDrag(e,"Text")}>Text</button>
                <button className={classes.button} draggable onDragStart={(e)=> handleOnDrag(e,"./img.jpg")}>
                  Image
                </button>
        </div>
     </div>
    </div>
  )
}
