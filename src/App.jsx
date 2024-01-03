import React from 'react'
import Navbar from './assets/Components/Navbar'
import BalanceSection from './assets/Components/BalanceSection'
import AccountSection from './assets/Components/AccountSection'
import ListGroup from './assets/Components/ListGroup'
import { ExpenseProvider } from './context/ExpanseContext'

const App = () => {
  return (
    <ExpenseProvider>
    <Navbar/>
    <div id='container'>
      <BalanceSection/>
      <AccountSection/>
      <ListGroup/>

    </div>
    </ExpenseProvider>
  )
}

export default App