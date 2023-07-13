import { createSlice } from "@reduxjs/toolkit";

export const usernameSlice = createSlice({
    name : 'username',
    initialState: {value: {myName : ''}},
    reducers: {
        handleUsername : (state, action)=>{
            state.value = action.payload
        }
    }
})

export default usernameSlice.reducer
export const {handleUsername} = usernameSlice.actions