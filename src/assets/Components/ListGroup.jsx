import React, { useContext } from 'react'
import ListItem from './ListItem'
import ExpanseContext from '../../context/ExpanseContext'

const ListGroup = () => {

  const { transactions } = useContext(ExpanseContext)

  return (
    <div id='list-grp' >

        <h1 id='l-head' >Transactions</h1>

        <ul>
          {
            transactions.map((transaction) => (<ListItem key={transaction.id} transaction={transaction} />) )
          }
        </ul>

    </div>
  )
}

export default ListGroup