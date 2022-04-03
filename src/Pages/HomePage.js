import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import styled from '@emotion/styled'
import Button from '../components/Button'

const HomePageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-grow: 100;
`
const NavigationButtonGroup = styled.div`
  margin-top: 60px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  #link{
    text-decoration: none;
  }
`
function HomePage() { 
  const { t } = useTranslation();

    return (
      <HomePageWrapper>
        <div>
          <h1>{t('HomePageTitle')}</h1>
          <NavigationButtonGroup>
            <Link to='/contracts' id="link">
            <Button options={{type: 'primary', size: 'normal'}}>{t('route_contracts')}</Button>
            </Link>
            <Link to='/customers' id="link">
            <Button options={{type: 'primary', size: 'normal'}}>{t('route_customers')}</Button>
            </Link>
          </NavigationButtonGroup>
          </div>
       
      </HomePageWrapper>
    );
  }
  
  export default HomePage;