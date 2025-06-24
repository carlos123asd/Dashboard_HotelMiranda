import perfil from "/src/assets/perfil.jpg"

export default function BtnPerfil(){
    return <>
        <div className="btnPerfil">
            <img src={perfil} alt="Foto de perfil" />
        </div>
    </>
}