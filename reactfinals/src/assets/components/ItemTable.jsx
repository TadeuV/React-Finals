import React from "react";
import "./ItemForm.css"
import "../../App.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrash,faPen} from "@fortawesome/free-solid-svg-icons"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem } from "../reducers/itemsSlice";



export default function ItemTable({setItemId}) {
    const itemsList = useSelector((state)=>state.itemsSlice.itemsList)
    const dispatch =useDispatch();

    return(
        <table className="TableContainer">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Flavor/Type</th>
                    <th>Brand</th>
                    <th>Quantity</th>
                    <th>Update</th>
                    <th>Delete</th>
                    <th>Check</th>
                </tr>
            </thead>
            <tbody>
                {itemsList.map((elem)=>{
                    return(
                    <tr key={elem.id}>
                        <td>{elem.data.itemName}</td>
                        <td>{elem.data.type}</td>
                        <td>{elem.data.brand}</td>
                        <td>{elem.quant.value}</td>
                        <td>
                            <Link to="/form">
                                <FontAwesomeIcon icon={faPen} className="update" onClick={()=>setItemId(elem.id)}/>
                            </Link>
                        </td>
                        <td><FontAwesomeIcon icon={faTrash} className="delete" onClick={()=>dispatch(deleteItem(elem.id))}/></td>
                        <td><input type="checkbox" /></td>
                    </tr>

                    )
                })}
                
            </tbody>
        </table>

    );
}