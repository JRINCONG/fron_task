import  {configureStore} from "@reduxjs/toolkit";
import User from "./slice/user.slice";
import ItemsSlice from "./slice/Items.slice";
import ActivitySlice from "./slice/Activity.slice";


const store = configureStore({
      reducer:{
       User,
       ItemsSlice,
       ActivitySlice,
      }
})

export default store