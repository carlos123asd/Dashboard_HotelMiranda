import type { IconType } from "react-icons"

type typeCardChallenge = {
    icon: IconType;
    nombre: string;
    meta?: number | null;
    inicial?: number | null;
}

export default function CardChallenge({
    icon: Icon,
    nombre: nombreCard,
    meta: metaCard,
    inicial: inicial
}:typeCardChallenge){
    return <>
        <div>
            <div>
                <Icon />
            </div>
            <div>
                <div>{nombreCard}</div>
                <div>
                    <span>{metaCard}</span>
                    <span>{nombreCard}</span>
                </div>
            </div>
        </div>
    </>
}