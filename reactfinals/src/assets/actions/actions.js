// import { v4 as uuid } from 'uuid'
// import { useDispatch } from 'react-redux';

// const dispatch=useDispatch();
// export const addItem= (data,quant) => {
//     console.log(quant);
//     return {
//         type:"ADD_ITEM",
//         payload:{
//             id:uuid(),
//             data:data,
//             quant:quant
//         }
//     }
// }

// export const updateItem = (id,data,quant) =>{
//     return {
//         type:"UPDATE_ITEM",
//         id:id,
//         data:data,
//         quant:quant
//     }
// }
// export const deleteItem = (id) =>{
//     return {
//         type:"DELETE_ITEM",
//         id:id,
//     }
// }




// export const NewItem = async (data,quant) =>{
//     payload={
//                     id:uuid(),
//                     data:data,
//                     quant:quant
//                 }

//     dispatch(addItem(payload));
// }

// export const UpdateItem = async (id,data,quant)=>{
   
//     dispatch(updateItem(id,data,quant));
// }
// export const DeleteItem = async (id)=>{
   
//     dispatch(deleteItem(id));
// }