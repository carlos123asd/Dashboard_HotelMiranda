import { IoSearch } from "react-icons/io5";
export default function InputSearch(){
    return <>
        <div className="inputSearch bgSecundary">
            <div className="contentInputSearch">
                <IoSearch color="white" size={30} />
                <input className="inputSearch-object bgSecundary" type="text" placeholder="Buscar..." />
            </div>
        </div>
    </>
}