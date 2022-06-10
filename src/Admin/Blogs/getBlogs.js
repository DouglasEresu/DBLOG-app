// import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../../config/firebaseconfig";
// import MyTodos from "./displayTodos";
// import { useNavigate } from "react-router-dom"

const GetTodos = () => {
  // const navigate = useNavigate() 

    const collectionRef = collection(db, "to-do")
    getDocs(collectionRef).then((response) =>{
      console.log(
        response.docs.map((item)=>{
          return {...item.data(), id: item.id}
        })
      )
    })
    // useEffect(() => {
    //     if (GetTodos) {
          
    //       navigate('/mytodos') 
    //     }
        
    //   }, [navigate ]);
      
    
  
  return(
    <div className= 'getTodos'>
 <button 
 onClick={GetTodos} 
 type="submit">View Todos</button>
    </div>
)

}
export default GetTodos