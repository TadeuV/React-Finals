import "./ItemForm.css"
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { useState } from "react";
import Select from "react-select"


export default function ItemForm({itemId,setItemId}) {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const quantityArray=[
    {value:1,label:"1"},
    {value:2,label:"2"},
    {value:3,label:"3"},
    {value:4,label:"4"},
    {value:5,label:"5"},
    {value:6,label:"6"},
    {value:7,label:"7"},
    {value:8,label:"8"},
  ];

  const [inputData,setInputData] = useState({
    itemName:"",
    type:"",
    brand:"",
  })

  const [inputSelect, setInputSelect] = useState(
    {value:1,label:"1"}
  )

  const handleSelect = (e) =>{
    setInputSelect(e)
    // console.log(inputSelect);
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    if (inputData.itemName && inputData.type && inputData.brand !== ""){
      if (itemId === null){
        dispatch(NewItem(inputData,inputSelect))
      }else{
        dispatch(UpdateItem(itemId,inputData,inputSelect))
      }
      clear()
      navigate("/")
    }


  }

  const clear =()=>{
    setItemId(null)
    setInputData(null)
  }

  const handleChange = (e) =>{
    e.preventDefault()
    
    const {name,value} = e.target;
    console.log(name,value);
    setInputData({
      ...inputData, [name]:value
    })
    // console.log(inputData);
  }


    return (
      <div className="formWrapper">
      <form className="itemForm">
        <h3 className="heading">{itemId ? "Update Form" : "Add Form"}</h3>
        <div className="inputContainer">
          <input className="input" name="itemName" placeholder="Item" type="text" value={inputData.itemName} onChange={handleChange}/>
          <input className="input" name="type" type="text" placeholder="Flavor/Type" value={inputData.type} onChange={handleChange}/>
          <input className="input" name="brand" placeholder="Brand" type="text" value={inputData.brand} onChange={handleChange}/>
          <div className="quantityBox">
              <Select options={quantityArray} className="quantity" name="quantityNum" value={inputSelect} onChange={handleSelect}></Select>
          </div>
        </div>
        <div className="buttonWrapper">
          <button className="addItem" onClick={handleSubmit}>{itemId ? "Update Item" : "Add Item"}</button>
        </div>
      </form>
      </div>
    )
  }