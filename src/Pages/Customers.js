import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';
import SearchBar from '../components/SearchBar';
import { PageWrapper, PageContent, Heading, DetailsPanel, ContentArea} from './sharedStyles/SharedStyles'
import ListViewItem from '../components/Customer/ListViewItem';



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
          <ListViewItem customer="Lawyers 2" nr={10}/>
          <ListViewItem customer="Laywers Ltd" nr={10}/>
          <ListViewItem customer="Laywers Ltd" nr={10}/>
          <ListViewItem customer="Laywers Ltd" nr={10}/>
          <ListViewItem customer="Laywers Ltd" nr={10}/>
          <ListViewItem customer="Laywers Ltd" nr={10}/>
          <ListViewItem customer="Laywers Ltd" nr={10}/>

        </ContentArea>
      </PageContent>
      <DetailsPanel>Detail Panel ...</DetailsPanel>
      </PageWrapper>
    );
  }
  
  export default Customers;