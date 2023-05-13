import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/about.jpg";

const Common = (props) => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 d-flex justify-content-center flex-row">
                  <div>
                    <h1>
                      {props.name}
                      <strong className="brand-Name"> RAHIL SHAIKH</strong>
                    </h1>

                    <h2 className="my-3">
                      We Are Team of talented developer Making Websites
                    </h2>

                    <div className="mt-3">
                      <NavLink to={props.visit} className="btn-get-started">
                        {props.btname}
                        Get Start
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid "
                    alt="Common "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
