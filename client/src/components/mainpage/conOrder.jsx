/* eslint-disable react-hooks/rules-of-hooks */

import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';




const confirmOrder = () => {
    const [Phone, setPhoneNumber] = useState('');
    const [Address, setAddres] = useState('');




    const placeorder = () => {
        const email = localStorage.getItem('email');
        axios.post('http://localhost:4000/order/placeorder', { email: email, Phone: Phone, Address: Address }).then((response) => {
            
        })
        /* axios.post('http://localhost:4000/cart/total',{email:email}).then((response) => {
            serTotal(response.data.total);
        })

        axios.post('http://localhost:4000/order/invoice',{email:email,Address:Address,total:total}).then((response) => {
            window.location.reload();
        }) */
    
    }
    
    return (
        <div className="wrapper">
          <div className="form">
            <h1 className="title">confirm the order</h1>
            <form>
              <input type="phoneNumber" value={Phone} onChange={(e) => setPhoneNumber(e.target.value)} className="input" placeholder="phoneNumber" required />
              <input type="addres" value={Address} onChange={(e) => setAddres(e.target.value)} className="input" placeholder="Shipping addres" required />
              <div align="center">
                <button onClick={placeorder()} className="button">
                  <Link to='/'><span>Confirm</span></Link>
                </button>
              </div>
            </form>
          </div>
        </div>
    );
}

export default confirmOrder;