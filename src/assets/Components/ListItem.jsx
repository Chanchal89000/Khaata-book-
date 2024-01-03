import React, { useContext } from 'react'
import ExpanseContext from '../../context/ExpanseContext'

const ListItem = ({transaction}) => {

  const {deleteTransaction , editTransaction} = useContext(ExpanseContext)

  const handleDelete = (id) => {
    deleteTransaction(id)
  }

  const handleEdit = (transaction) => {
     editTransaction(transaction)
  }



  return (
    <li id='list-item' >
    <span>
    <h2 id='l-text' >{transaction?.text}</h2>
    <h2 id='l-amt' >{transaction?.amount}</h2>
    </span>
    <span id='btn-span'>
      <button id='btn-edit' onClick={() => handleEdit(transaction)}  >Edit</button>
      <button id='btn-dlt' onClick={() => handleDelete(transaction.id)}  >Delete</button>
    </span>
</li> 
  )
}

export default ListItem