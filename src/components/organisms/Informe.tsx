import ia from '../../assets/ia.jpg'
import { FaPlay } from "react-icons/fa6";
export default function Informe(){
    return <>
        <div className="informe">
            <img className="imgInforme" src={ia} alt="" />
            <div>
                <div className='tagIa'>IA</div>
                <h2>Dashboard Resumen:<br></br>Estado Actual del Hotel</h2>
            </div>
            <div className='contentBottomInforme'>
                <div className='btnPlayInforme'>
                    <FaPlay size={18} color='#0B080B'/>
                </div>
                <span>Empezar Evaluación</span>
            </div>
        </div>
    </>
}