import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
    return (
        <div className="h-screen w-screen justify-items-center grid content-center">
            <ReactLoading type="balls" color="#0000FF"
                height={100} width={50} />
        </div>
    );
}