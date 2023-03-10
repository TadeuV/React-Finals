import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";

export default function NavBar () {

    const itemsList = useSelector((state)=>state.itemsSlice.itemsList)
    
    let count=0;

    itemsList.forEach(element => {
        count= count+element.quant.value;
    });

  
    return (
        <nav className='navbar'>
            <h1 className="title">Grocery List</h1>
            <div className="infoWrapper">
                <div className="total">Total itens: <span>{itemsList? count : 0}</span></div>
                <Link to="/form">
                    <div className="addButton"><FontAwesomeIcon icon={faPlusSquare} /></div>
                </Link>
            </div>
        </nav>
      )

}
