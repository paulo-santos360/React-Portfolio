
import Avatar from '../img/foto-1.jpeg';

import "../styles/components/sidebar.sass";

const Sidebar = () => {
    return(
        <aside id="sidebar">
            <img src={Avatar} alt="Paulo Santos"  />
            <p className="title">Desenvolvedor</p>
            <p>informações de contato</p>
            <a href="" className="btn">Download</a>
        </aside>
    );
}

export default Sidebar
