import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        currentUser: null,
        isFetching: false,
        error:  false,
    },

    reducers: {

     // LOGIN ACTION-----------
    
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        
        },

        // LOGOUT ACTION ---------
     
        logout: (state) => {
            state.isFetching = false;
            state.currentUser = null;
        },


        
        // GET USER ACTION

        getUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        }, 

        getUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users = action.payload;
        },

        getUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },



        // DELETE USER ACTION
        
        deleteUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        }, 

        deleteUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users = state.users.filter(item => item._id !== action.payload.id);
        },

        deleteUserFailure: (state) => {
            state.isFetching = false
            state.error = true
        },

            

        // UPDATE USER ACTION
   
        updateUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        }, 

        updateUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users = state.users.map((item) =>
                item._id === action.payload.id ? action.payload.user : item
            );
        },
        

        updateUserFailure: (state) => {
            state.isFetching = false
            state.error = true
        },


     // CREATE A NEW USER ACTION
  
        addUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        }, 

        addUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users = [...state.users, action.payload];
        },

        addUserFailure: (state) => {
            state.isFetching = false
            state.error = true
        } 
    },
});

export const { loginStart, loginSuccess, loginFailure,
    getUserStart, getUserSuccess, getUserFailure,
    deleteUserStart,deleteUserSuccess, deleteUserFailure,
    addUserStart,addUserSuccess,addUserFailure,
    updateUserStart, updateUserSuccess, updateUserFailure, logout
} = userSlice.actions;
export default userSlice.reducer;