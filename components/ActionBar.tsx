import React from "react";

export default function ActionBar() {
  return (
    <div className="navbar bg-base-100 mt-5">
      <div className="navbar-start"></div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <a className="btn">Create</a>
      </div>
    </div>
  );
}
