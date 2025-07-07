export default function InputPhoto({setImage,image}:{setImage:(value:string) => void,image:string}){

    const handlePhoto = (e:React.ChangeEvent<HTMLInputElement>) => {
        const archivo = e.currentTarget.files ? e.currentTarget.files[0] : null;
        if(archivo){
            const lector = new FileReader()
            lector.onloadend = () => {
                setImage(lector.result as string)
            }
            lector.readAsDataURL(archivo)
        }
    }

    return <>
        <div className="contentInputPhoto">
            <div className="imagenActualForm">
                <img src={image} alt="" />
            </div>
            <input onChange={handlePhoto} className="inputPhoto" type="file" accept="image/*" />
        </div>
    </>
}