import { Outlet } from 'react-router-dom';
import React from 'react'

function Projects({ setIsPending }) {
  return (<>
    <section className="py-4">
      <Outlet context={{ setIsPending }} />
    </section>
  </>)
}
export default Projects;