import { configureStore } from '@reduxjs/toolkit'
import UserLogin from './slice/UserLogin'
import AddUser from './slice/NewUser'


 const store = configureStore({
  reducer: {
    UserLogin: UserLogin,
    NewUser: AddUser,
  },
})

export default store;