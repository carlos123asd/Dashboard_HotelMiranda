import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

export default function ActionsTable(){
    return <>
        <div className="tdActions">
            <MdOutlineEdit size={30}  />
            <MdDeleteOutline size={30} color="#DE524D"  />
        </div>
    </>
}