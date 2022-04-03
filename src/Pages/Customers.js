import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';
import SearchBar from '../components/SearchBar';
import { PageWrapper, PageContent, Heading, DetailsPanel, ContentArea} from './sharedStyles/SharedStyles'




function Customers() { 
   const {t} = useTranslation();
    return (
      <PageWrapper>
      <PageContent>
          <Heading>
            <h1>{t('route_customers')}</h1>
            <SearchBar/>
          </Heading>
        <ContentArea gridView={false}>
          Content
        </ContentArea>
      </PageContent>
      <DetailsPanel>Detail Panel ...</DetailsPanel>
      </PageWrapper>
    );
  }
  
  export default Customers;