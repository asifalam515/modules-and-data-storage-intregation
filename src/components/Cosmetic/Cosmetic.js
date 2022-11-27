import React from 'react';
import { Button } from 'react-bootstrap';
import { addToDb } from '../utilities/fakedb';
import './Cosmetic'

const Cosmetic = (props) => {
    const {id,name,price,age}=props.cosmetic
    const addToCart=(id)=>{
addToDb(id)
    }
    const purchaseNow=(id)=>{
      
    }
    

    return (
        <div className='border border-success rounded p-5 m-5'>
            <h2 >Buy This:{name}</h2>
            <p>Only for:${age}</p>
            <p>Product Id is:{id}
            </p>
      
        <Button onClick={()=>{addToCart(id)}} className='btn btn-primary  m-2'>Add to Cart</Button>
        <Button onClick={()=>{purchaseNow(id)}} className='btn btn-warning'>Purchase</Button>
      

        </div>
    );
};

export default Cosmetic;