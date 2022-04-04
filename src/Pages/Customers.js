import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';
import SearchBar from '../components/SearchBar';
import { PageWrapper, PageContent, Heading, DetailsPanel, ContentArea} from './sharedStyles/SharedStyles'
import ListViewItem from '../components/Customer/ListViewItem';
import GridViewItem from '../components/Customer/GridViewItem';
import ContractDetail from '../components/ContractDetail';
import { useSelector , useDispatch} from 'react-redux'

function Customers() { 
   const {t} = useTranslation();
   const viewType = useSelector(state => state.viewType)
    const customer = useSelector(state => state.customer)


   const ListView = customer.map(e => {
     return (
      <ListViewItem customer={e.name}  nr={10}/>
     )
   })

   const GridView = customer.map(e => {
    return (
     <GridViewItem customer={e.name}  nr={10}/>
    )
  })
    return (
      <PageWrapper>
      <PageContent>
          <Heading>
            <h1>{t('route_customers')}</h1>
            <SearchBar/>
          </Heading>
        <ContentArea gridView={viewType.state === 'grid'}>
          {viewType.state === 'grid' ?  GridView : ListView}

        

        </ContentArea>
      </PageContent>
      <DetailsPanel>
        <ContractDetail/>
      </DetailsPanel>
      </PageWrapper>
    );
  }
  
  export default Customers;