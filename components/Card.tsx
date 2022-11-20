import Image from "next/image";
import React, { Fragment } from "react";
import HotspotsList from "components/HotspotList";
import { useRouter } from "next/router";

export default function Card() {
  const router = useRouter();

  return (
    <div className="card w-50 h-min bg-base-100 m-5 shadow-xl">
      <figure>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGAgJed3QjlHKCoJYipaUKdkEm3pBwHbgUw&usqp=CAU"
          alt="Weenie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Weenie</h2>
        <p>Ooooo look at this weenie! Isnt it nice?</p>
        <div className="mt-5 card-actions flex items-center">
          <button
            className="btn btn-primary"
            onClick={() => router.push("/update")}
          >
            Edit
          </button>
          <button className="btn btn-primary">Delete</button>
          <button className="btn btn-primary">Share</button>
        </div>
      </div>
    </div>
  );
}
