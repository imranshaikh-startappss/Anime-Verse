import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/Slice'

 const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})

export default store;