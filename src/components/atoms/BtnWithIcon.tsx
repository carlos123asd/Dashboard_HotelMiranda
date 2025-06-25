import { useState } from "react";
import type { IconType } from "react-icons";

interface BtnWithIconProps {
  icon: IconType;
  className?: string;
  disable?: boolean | null;
}

export default function BtnWithIcon({ 
  icon: Icon,
  className = "",
  disable = null
}: BtnWithIconProps){
  const [disableState,setDisableState] = useState(disable ? true : false)



    return <>
        <div 
        onMouseLeave={() => {if(disable) setDisableState(true)}}
        onMouseEnter={() => {if(disable) setDisableState(false)}} 
        className={`btnNotification bgSecundary ${disableState ? 'disablebtn' : ''}`}>
            <Icon className={className} color="white" size={25} />
        </div>
    </>
}