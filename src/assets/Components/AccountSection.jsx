import React, { useContext } from 'react'
import ExpanseContext from '../../context/ExpanseContext'

const AccountSection = () => {


  const {transactions} = useContext(ExpanseContext)

  const income = transactions.filter( item => item.amount > 0 ).reduce((p,c ) => {
    return p+c.amount;
  }, 0 )


  const expanse = transactions.filter( item => item.amount < 0 ).reduce((p,c ) => {
    return p+c.amount;
  }, 0 )




  return ( 
  <div id="expanse-section">

  <div id="card3">
      <h1 className='amt-text' >Total Expanse : </h1>
      <h1 className='amt' >{expanse}</h1>
    </div>

    <div id="card4">
      <h1 className='amt-text' >Total Income : </h1>
      <h1 className='amt' >{income}</h1>
    </div>

  </div>

  )
}

export default AccountSection