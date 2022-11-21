import Image from "next/image";
import React, { Fragment } from "react";
import HotspotsList from "components/HotspotList";
import { useRouter } from "next/router";
import { Delete } from "styled-icons/feather";
import { DeleteBin } from "styled-icons/remix-fill";
import { Close } from "styled-icons/evil";
import { CloseCircle } from "styled-icons/remix-line";

export default function Card({ item }: { item: any }) {
  const router = useRouter();
  const [isHovering, setIsHovering] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ width: "23%" }}
      className="card h-min bg-base-100  mr-6  mb-5 mt-0 shadow-lg flex"
    >
      <a href="#my-modal-2" className="btn btn-ghost self-end">
        <CloseCircle style={{ opacity: isHovering ? 1 : 0 }} className="w-10" />
      </a>
      <div className="modal" id="my-modal-2">
        <div className="modal-box">
          <h3 className="font-bold text-lg">You must never delete a weenie.</h3>
          <p className="py-4">Ok?</p>
          <div className="modal-action">
            <a href="#" className="btn">
              I understand
            </a>
          </div>
        </div>
      </div>
      <div className="hero  bg-base-200">
        <div className="hero-content  text-center ">
          <div className="max-w-md px-10 border-dashed border-2 border-zinc-400 rounded-lg ">
            <img
              className="w-36"
              height={30}
              src="/placeholder.png"
              alt="Weenie"
            />
          </div>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{item?.title ?? "Untitled Weenie"}</h2>
        <p>{item.desription ?? "Ooooo look at this weenie! Isnt it nice?"} </p>
        <div className="mt-5 card-actions flex items-center">
          <button
            style={{ opacity: isHovering ? 1 : 0 }}
            className="btn btn-primary btn-sm"
            onClick={() => router.push(`/projects/${item?.id}`)}
          >
            Edit
          </button>

          <button
            style={{ opacity: isHovering ? 1 : 0 }}
            className="btn btn-primary btn-sm"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
