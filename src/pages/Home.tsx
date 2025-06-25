import Informe from "../components/organisms/Informe";
import DashboardTemplate from "../components/templates/DashboardTemplate";

export default function Home(){
    return <>
        <DashboardTemplate>
            <div className="home">
                <Informe/>
                <div>

                </div>
            </div>
        </DashboardTemplate>
    </>
}