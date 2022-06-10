import React from "react";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const Logout = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
signOut(auth).then(() => {
    alert(`${user.displayName}has logged out`)
}).catch((error) => {
    console.log(error)
  alert(`could not logout user${err.message}`)
});

    }
  return (
      <div className="logout">
          <button onClick={handleSubmit}>signOut</button>
      </div>
    
    
  )
}

export default Logout

