import  {configureStore} from "@reduxjs/toolkit";
import User from "./slice/user.slice";


const store = configureStore({
      reducer:{
       User,
      }
})

export default store