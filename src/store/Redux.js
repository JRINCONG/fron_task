import  {configureStore} from "@reduxjs/toolkit";
import User from "./slice/user.slice";
import ItemsSlice from "./slice/Items.slice";



const store = configureStore({
      reducer:{
       User,
       ItemsSlice,
      }
})

export default store