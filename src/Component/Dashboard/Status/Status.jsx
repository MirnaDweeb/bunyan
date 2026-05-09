import React from "react";
import CardStatus from "../../UI/CardStatus/CardStatus";

function Status() {
  return (
    <>
      <section className="py-4">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-3">
              <CardStatus counter="100" title="users" />
            </div>
            <div className="col-12 col-md-3">
              <CardStatus  counter="120" title="projects"/>
            </div>
            <div className="col-12 col-md-3">
              <CardStatus counter="140" title="developer" />
            </div>
            <div className="col-12 col-md-3">
              <CardStatus counter="200" title="blogs"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Status;
