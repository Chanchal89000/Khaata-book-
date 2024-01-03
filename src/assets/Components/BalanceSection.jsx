import React, { useContext, useEffect, useState } from 'react';
import ExpanseContext from '../../context/ExpanseContext';

const BalanceSection = () => {


  const { transactions , saveTransaction , edit , updateTransaction } = useContext(ExpanseContext) 
  const balance = transactions.reduce((p,c) => {
    return p+c.amount;
  } , 0 )


  const [text , setText] = useState("")
  const [amount , setAmount ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if(edit.isEdit){
      updateTransaction({
        id : edit.transaction.id,
        text : text , 
        amount : +amount,
      })

    }else{
      saveTransaction(text , amount)
    }
    setAmount("");
    setText("");
 }


 useEffect(() => {
  setAmount(edit.transaction.amount)
  setText(edit.transaction.text);

 },[edit]);


  return (

     <div id='balance-section'>

   
     <div id="card1">
       <h1 className='amt-text'>Balance : </h1>
       <h1 className='amt' > {balance}</h1>
     </div>

     <div id="card2">
       <form id='form1' action=""   onSubmit={handleSubmit}  >
         <span id='inp-span'>
         <input id='inp1' type="number" placeholder='Enter Amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />
         <input id='inp2' type="text" placeholder='Enter Text' value={text} onChange={(e)=> setText(e.target.value)} />
         </span>
         <button id='btn-form' >Save</button>
       </form>
     </div>
   </div>
  )
}

export default BalanceSection