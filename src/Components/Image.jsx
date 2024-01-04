import React, { useState } from 'react'
import classes from './Main.module.css'
import { useDispatch } from 'react-redux';
import { addWid, removeWid } from '../Redux/widgetSlice';

export default function Image({widget}) {
   const dispatch=useDispatch();

    const [img,setImage]=useState((widget.name));
    
    function onImageChange ( event ) {
    if (event.target.files && event.target.files[0]) {
      let newImage = event.target.files[0];
       const urlImg= (URL.createObjectURL(newImage));
      setImage(urlImg);
       dispatch(addWid((urlImg)));
       dispatch(removeWid(widget.id));
    }
  };

  return (
    <div className={classes.ImageBox}>
          <div className={classes.image} > <img src={img} alt="pic"  /> </div> 
          <input type="file" name="myImage" accept="image/*" onChange={onImageChange} />
    </div>
  )
}
