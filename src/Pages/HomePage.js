import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Button from '../components/Button/Button';
import * as st from './PageStyles/HomePage.style'


function HomePage() { 
  const { t } = useTranslation();

    return (
      <st.HomePageWrapper>
        <div>
          <h1>{t('HomePageTitle')}</h1>
          <st.NavigationButtonGroup>
            <Link to='/contracts' id="link">
            <Button options={{type: 'primary', size: 'normal'}}>{t('route_contracts')}</Button>
            </Link>
            <Link to='/customers' id="link">
            <Button options={{type: 'primary', size: 'normal'}}>{t('route_customers')}</Button>
            </Link>
          </st.NavigationButtonGroup>
          </div>
      </st.HomePageWrapper>
    );
  }
  
  export default HomePage;