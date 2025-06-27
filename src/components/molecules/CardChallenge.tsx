import type { IconType } from "react-icons"
import Tag from "../atoms/Tag";

type typeCardChallenge = {
    icon: IconType;
    nombre: string;
    meta?: number;
    inicial?: number;
}

export default function CardChallenge({
    icon: Icon,
    nombre: nombreCard,
    meta = 0,
    inicial = 0
}:typeCardChallenge){
    return <>
        <div className="cardChallenge">
            <div className="contentInfoChallenge">
                <div className="contentIconChallenge">
                    <Icon size={30} />
                </div>
                <div className="contentMainInfo">
                    <div className="info">
                        <div>{nombreCard}</div>
                        <div className="contentInitMeta">
                            <span>{meta}</span>
                            <span>{nombreCard}</span>
                        </div>
                    </div>
                    <div>
                        {
                            inicial >= meta ?
                            <div className="contentInitMeta">
                                <span>{inicial}/{meta}</span>
                                <span>Meta alcanzada</span>
                            </div> :
                            <div className="contentInitMeta">
                                <span>{(inicial * meta) / 100}%</span>
                                <progress value={inicial as number} max={meta as number}></progress>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Tag 
            text={inicial >= meta ? "Completado" : "En Progreso"} 
            colorText={inicial >= meta ? "#313131" : "#6B6B6B"} 
            bg={inicial >= meta ? "#B7F6C7" : "#454545"}
            classname="tagChallenge" />
        </div>
    </>
}