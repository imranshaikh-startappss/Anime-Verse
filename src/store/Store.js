import { configureStore } from '@reduxjs/toolkit'
import userLogin from './slice/Login'
import AddUser from './slice/NewUser'


 const store = configureStore({
  reducer: {
    userLogin: userLogin,
    NewUser: AddUser,
  },
})

export default store;