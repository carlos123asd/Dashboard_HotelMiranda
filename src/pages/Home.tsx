import Challenge from "../components/organisms/Challenge";
import Informe from "../components/organisms/Informe";
import DashboardTemplate from "../components/templates/DashboardTemplate";

export default function Home(){
    return <>
        <DashboardTemplate>
            <div className="home">
                <Informe/>
                <div className="contentInfoDashboardHome">
                    <Challenge />
                    <div></div>
                </div>
            </div>
        </DashboardTemplate>
    </>
}