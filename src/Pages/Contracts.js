import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';
import { PageWrapper, PageContent, Heading, DetailsPanel} from './sharedStyles/SharedStyles'
import SearchBar from '../components/SearchBar';
 

function Contacts() { 
  const {t} = useTranslation();
    return (
      <PageWrapper>
          <PageContent>
          <Heading>
            <h1>{t('route_contracts')}</h1>
            <SearchBar/>
          </Heading>
        <div>
          Content
        </div>
      </PageContent>
      <DetailsPanel>Detail Panel ...</DetailsPanel>
       
      </PageWrapper>
    );
  }
  
  export default Contacts;