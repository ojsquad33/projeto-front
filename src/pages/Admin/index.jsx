import "./style/style.css";
import SidebarAdmin from "../../components/SidebarAdmin";
import ConteudoAdmin from "../../components/ConteudoAdmin";

function Admin(){
    return (
            <div className="admin">
                <SidebarAdmin/>
                <ConteudoAdmin/>
            </div>
    )
}

export default Admin
