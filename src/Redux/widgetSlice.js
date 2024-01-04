import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const InitialValue ={
    widget:[]
}

export const widgetSlice=createSlice({
    name:'widget',
    initialState: InitialValue,
    reducers:{
        setWid:(state, action)=>{
            state.widget= action.payload;
        },
        addWid:(state, action)=>{
            const wid = {
                id: nanoid(),
                name: action.payload
            }
             state.widget.push(wid);
        },
        removeWid:(state,action)=>{
            state.widget=state.widget.filter((wid)=>wid.id != action.payload)
        }
    }
})

export const {addWid,editWid,setWid,removeWid}=widgetSlice.actions
export const WidgetReducer=widgetSlice.reducer