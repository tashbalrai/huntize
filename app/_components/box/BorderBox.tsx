import React from "react";

interface IProp {
    height?: string;
    width?: string;
    children: React.ReactNode;
    
}

export default function BorderBox({height, width, children}:IProp){
    const h = height || "h-[6.313rem]";
    const w = width || null;
    return (
    <div className={`${h} ${w} border-x border-l-line`}>{children}
    <hr className="w-full absolute top-[100%]"></hr></div>
    );
}