import type React from "react";

export default function Modal({children}:{children:React.ReactNode}){
    return <>
        <div className="modal">
            <div className="contentModal">
                {children}
            </div>
        </div>
    </>
}