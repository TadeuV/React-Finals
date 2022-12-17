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
        addItem:(state,action)=>{
            const newItem = {
                id:uuid(),
                data:action.payload.inputData,
                quant:action.payload.inputSelect,
            };
            return{
                ...state,itemsList:[...state.itemsList, newItem]};
        },
        updateItem:(state,action)=>{
            state.itemsList.map(elem =>{
            return elem.id ===action.payload.itemId ? ((elem.data = action.payload.inputData)&&(elem.quant=action.payload.inputSelect)) : (elem=elem)   
            })
           
        },
        deleteItem:(state,action)=>{
            const newItemsList=state.itemsList.filter((elem)=>( elem.id !== action.payload))
            return{
                ...state,itemsList:newItemsList};
        },
    }
})
export  const {addItem,updateItem,deleteItem} = itemsSlice.actions;
export default itemsSlice.reducer