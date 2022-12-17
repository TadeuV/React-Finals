import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid'

// const initialInput = {
//     itemsList : [],
// }

// const allReducers=(state = initialInput,action) => {


//     switch (action.type) {
//         case "ADD_ITEM":
//             const {data,id} = action.payload;
//             return{
//                 ...state,itemsList:[...state.itemsList,{
//                     id:id,
//                     data:data,
//                 }]
//             }
            

//             default:
//                 return state
//     }
// }

// export default allReducers;

export const itemsSlice=createSlice({
    name:"items",
    initialState:{
        itemsList:[],
    },
    reducers:{
        // setItemsList:(state,action) =>{
        //     return{
        //         ...state,itemsList:[...action.payload]};
        // },
        addItem:(state,action)=>{

            return{
                ...state,itemsList:[action.payload,...state.itemsList]};
        },
        updateItem:(state,action)=>{
            state.itemsList.map(elem =>{
            return elem.id ===action.id ? ((elem.data = action.data)&&(elem.quant=action.quant)) : (elem=elem)   
            })
            return{
                ...state,
                itemsList:[...state.itemsList]
            }
        },
        deleteItem:(state,action)=>{
            const newItemsList=state.itemsList.filter((elem)=>( elem.id !== action.id))
            return{
                ...state,itemsList:newItemsList};
        },
    }
})
export  const {addItem,updateItem,deleteItem} = itemsSlice.actions;
export default itemsSlice.reducer