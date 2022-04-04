import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import SearchBar from '../components/SearchBar/SearchBar';
import ListViewItem from '../components/Customer/ListViewItem/ListViewItem';
import GridViewItem from '../components/Customer/GridViewItem/GridViewItem';
import ContractDetail from '../components/ContractDetails/ContractDetail';
import { useSelector, useDispatch } from 'react-redux'
import {removeCustomer, removeCustomerRelatedContracts, currentCustomer} from '../store/actions/'
import * as st from './PageStyles/Shared.styles'

function Customers() {
  const { t } = useTranslation();
  const viewType = useSelector(state => state.viewType)
  const customer = useSelector(state => state.customer)
  const contracts = useSelector(state => state.contract)
  const selectedCustomer = useSelector(state => state.currentCustomer)
  const dispatch = useDispatch()
  const [relatedContracts, setRelatedContracts] = useState([])

  useEffect(()=>{
    if(selectedCustomer){
      setRelatedContracts(contracts.filter(e =>  e.customerId === selectedCustomer.id))
    }
  },[selectedCustomer])

  const ListView = customer.map(e => {
    return (
      <ListViewItem customer={e} nr={relatedContracts.length} t={t} key={e.id} />
    )
  })

  const GridView = customer.map(e => {
    return (
      <GridViewItem customer={e} nr={relatedContracts.length} deleteCustomer={handleCustomerRemoval} t={t} key={e.id} />
    )
  })

  function handleCustomerRemoval(){
    dispatch(removeCustomer(selectedCustomer.id))
    dispatch(removeCustomerRelatedContracts(selectedCustomer.id))
    dispatch(currentCustomer({}))
  }
  return (
    <st.PageWrapper>
      <st.PageContent>
        <st.Heading>
          <h1>{t('route_customers')}</h1>
          <SearchBar />
        </st.Heading>
        <st.ContentArea gridView={viewType.state === 'grid'}>
          {viewType.state === 'grid' ? GridView : ListView}
        </st.ContentArea>
      </st.PageContent>
      <st.DetailsPanel>
        <ContractDetail 
          showList={true}
          customer={selectedCustomer.name} 
          relatedContracts={relatedContracts} 
          deleteCustomer={handleCustomerRemoval} 
          selectedItem={Object.keys(selectedCustomer).length === 0} 
          t={t}
          />
      </st.DetailsPanel>
    </st.PageWrapper>
  );
}

export default Customers;