import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';
import SearchBar from '../components/SearchBar';
import { PageWrapper, PageContent, Heading, DetailsPanel, ContentArea} from './sharedStyles/SharedStyles'
import ListViewItem from '../components/Customer/ListViewItem';
import GridViewItem from '../components/Customer/GridViewItem';
import ContractDetail from '../components/ContractDetail';

function Customers() { 
   const {t} = useTranslation();
   const GridViewTemplate = false;

   const testArr = [1,2,3]

   const ListView = testArr.map(e => {
     return (
      <ListViewItem customer={`Lawyers ${e}`}  nr={10}/>
     )
   })

   const GridView = testArr.map(e => {
    return (
     <GridViewItem customer={`Lawyers ${e}`} nr={10}/>
    )
  })
    return (
      <PageWrapper>
      <PageContent>
          <Heading>
            <h1>{t('route_customers')}</h1>
            <SearchBar/>
          </Heading>
        <ContentArea gridView={GridViewTemplate}>
          {GridViewTemplate ?  GridView : ListView}

        

        </ContentArea>
      </PageContent>
      <DetailsPanel>
        <ContractDetail/>
      </DetailsPanel>
      </PageWrapper>
    );
  }
  
  export default Customers;