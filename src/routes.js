import { AiFillHome,AiOutlineUser } from 'react-icons/ai';
import { FaFileContract } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import i18n from './lang/i18n';

const routes = {data: [
    {
        title: i18n.t('route_home'),
        path: "/",
        library: <AiFillHome />

    },
    {
        title: i18n.t('route_contracts'),
        path: "/contracts",
        library: <FaFileContract />

    },
    {
        title: i18n.t('route_customers'),
        path: "/customers",
        library: <AiOutlineUser />

    },
    {
        title: i18n.t('route_options'),
        path: "/options",
        library: <FiSettings />

    }
]
}

i18n.on('languageChanged', () => {
    const langString = ['route_home','route_contracts','route_customers','route_options']
    for(let i = 0; i< routes.data.length; i++){
        routes.data[i].title = i18n.t(langString[i])
    }
})
export default routes;