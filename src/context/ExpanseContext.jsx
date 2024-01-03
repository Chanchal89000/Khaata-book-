
import { createContext, useReducer } from "react";
import ExpanseReducer from "./ExpenseReducer";

const ExpanseContext = createContext()
        
 
 export  const ExpenseProvider = ({children}) => {

    const initialState = { 
        transactions : [] ,
        edit : {
            transaction : {} ,
            isEdit : false , 
        }
    }
    
    
     const[state , dispatch] = useReducer(ExpanseReducer , initialState)   
     
     
     const saveTransaction = (text , amount) => {
       const newTransaction = {
        id : crypto.randomUUID(),
        text,
        amount : parseInt(amount) , 
       }
       dispatch({
        type : "SAVE",
        payload : newTransaction,
       })
     }


     const deleteTransaction = (id) => {
      dispatch({
         type : "DELETE" ,
         payload : id ,

      })
     };


     const editTransaction = (oldTransaction) => {
      dispatch({
         type : "EDIT" , 
         payload : oldTransaction ,
      })
     }


     const updateTransaction = (transaction) => {
      dispatch ({
         type : "UPDATE", 
         payload : transaction,
      }
      )
     }



    return(
     <ExpanseContext.Provider value={{...state , saveTransaction , deleteTransaction , editTransaction , updateTransaction }} >
        {children}
     </ExpanseContext.Provider>
    )

}

export default ExpanseContext;