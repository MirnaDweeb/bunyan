import { Outlet } from 'react-router-dom';
import React from 'react'

 function User() {
  return (<>
< section className="py-4" >
  

<Outlet></Outlet>
 
</section>

  </>)
}
export default User;