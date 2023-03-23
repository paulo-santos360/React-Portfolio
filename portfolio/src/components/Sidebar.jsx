import Avatar from '../img/foto-1.jpeg'

import "../styles/components/sidebar.sass"

const Sidebar = () => {
    return(
        <aside id="sidebar">
            <p>imagem</p>
            <p className="title">Desenvolvedor</p>
            <p>redes sociais</p>
            <p>informações de contato</p>
            <a href="" className="btn">Download</a>
        </aside>
    )
}

export default Sidebar
