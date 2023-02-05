import React from 'react';
import {auth} from './firebase_setup/firebase';
import Profile from './components/profile/index'
  
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
            <button style={{"marginLeft" : "20px"}} 
            onClick={Profile}>
                Profile
            </button>
        </div>
    );
}
  
export default Mainpage;