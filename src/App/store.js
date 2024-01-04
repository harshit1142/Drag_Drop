import { configureStore } from "@reduxjs/toolkit";
import {WidgetReducer} from "../Redux/widgetSlice";

export const Store=configureStore({
    reducer:WidgetReducer
})
