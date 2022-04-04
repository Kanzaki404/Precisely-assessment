
import { Link, useLocation } from "react-router-dom";
import routes from '../../routes'
import * as st from './SideBar.style'


function SideBar() {
    const { pathname } = useLocation()
    
    const navItems = routes.data.map(e => {
        return (
            <st.NavItem key={e.path} location={pathname === e.path}>
                <Link to={e.path} className="LinkItem">
                    <st.NavIcon>
                        {e.library}
                    </st.NavIcon>
                    <span>{e.title}</span>
                </Link>
            </st.NavItem>
        )
    })

    return (
        <st.NavWrapper>
            {navItems}
        </st.NavWrapper>
    );
}

export default SideBar;

