import React from 'react';
import {auth} from './firebase_setup/firebase';
  
const Mainpage = () => {
  
    // Signout function
    const logout = () => {
       auth.signOut();
    }
      
    return (
        <div>
            Welcome
               
            {
               auth.currentUser.email
            }
            <button style={{"marginLeft" : "20px"}} 
            onClick={logout}>
                Logout
            </button>
        </div>
    );
}
  
export default Mainpage;