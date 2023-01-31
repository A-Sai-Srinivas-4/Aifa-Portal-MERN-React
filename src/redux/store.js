import { configureStore } from "@reduxjs/toolkit"
import dataReducer from './dataSlice'


const store =  configureStore({
    reducer : {
        Data : dataReducer,
    }
})



// const initialState = {
//     Data : null,
//     isModal:false
// }

// function handleState (state = initialState, action) {
//     switch (action.type) {
//         case 'setData':
//             return {
//                 ...state,
//                 Data:action.Data
//             }
//             default:
//                 return state
//     }
// }


// const store = createStore(handleState)

export default store