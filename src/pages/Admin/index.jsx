import "./style/style.css";
import HeaderAdmin from "../../components/HeaderAdmin";
import SidebarAdmin from "../../components/SidebarAdmin";
import ConteudoAdmin from "../../components/ConteudoAdmin";

function Admin(){
    return (
        <div>
            <HeaderAdmin/>
            <div className="admin">
                <SidebarAdmin/>
                <ConteudoAdmin/>
            </div>
        </div>
    )
}

export default Admin
