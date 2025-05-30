import { HTMLAttributes } from "react";

export default function Tag(props:HTMLAttributes<HTMLDivElement>) {
    const {className , children , ...otherProps} = props;
    return (
        <div className="">
           <span></span> 
           <span></span>
           
        </div>
    )
}