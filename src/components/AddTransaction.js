import React, {useContext}from 'react';
import {useState} from 'react';
import {GlobalContext} from './context/GlobalState';

export const AddTransaction = () => {
       const [text,setText]=useState('');
       const [amount,setAmount]=useState('0');

       const {addTransaction} = useContext(GlobalContext);


       const onSubmit = e => {

        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount : +amount
        }

        addTransaction(newTransaction);
       }

    return (
          <>

                <h3>Enter the deatils - Grab IN/OUT Coins</h3>
                <form onSubmit = {onSubmit}>
                    <div class="form-control">
                        <label>Text</label>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)}  placeholder="Enter Text.."/>
                    </div>
                    <div class="form-control">
                        <label htmlFor="amount">Amount <br/> (negative - Grab-OUT,positive - insert coins)</label>
                        <input type="number" id="amount"  value={amount} onChange={(e) => setAmount(e.target.value)}   placeholder="Enter Amount"/>
                    </div>
                    <button className="btn">Grab-IN/OUT Coins</button>
                </form>
          </>
    )
}
