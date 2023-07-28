import React from "react";
import {Link} from "react-router-dom"

export default function SwitchUGPG(props) {
  return (
    <>
      <div>
        <ul
          className="container nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm my-2"
          id="pillNav2"
          role="tablist"
          style={{
            "--bs-nav-link-color": "var(--bs-white)",
            "--bs-nav-pills-link-active-color": "var(--bs-primary)",
            "--bs-nav-pills-link-active-bg": "var(--bs-white)",
          }}
        >
          <li className="nav-item" role="presentation">
            <Link to="/UG" style={{textDecoration:"none"}}>
            <button
              className="nav-link active rounded-5"
              id="home-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="true"
            >
            <span className="fs-5" > Under Graduation </span>
            </button>
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link to="/PG" style={{textDecoration:"none"}}>
            <button
              className="nav-link rounded-5"
              id="profile-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              <span className="fs-5">Post Graduation</span>
              
            </button>
            </Link>
          </li>
          {/* <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-5"
              id="contact-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Contact
            </button>
          </li> */}
        </ul>
      </div>
    </>
  );
}
