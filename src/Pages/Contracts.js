import {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import GridViewItem from '../components/Contracts/GridViewItem/GridViewItem';
import ListViewItem from '../components/Contracts/ListViewItem/ListViewItem';
import ContractDetail from '../components/ContractDetails/ContractDetail';
import SearchBar from '../components/SearchBar/SearchBar';
import { useSelector } from 'react-redux'
import * as st from './PageStyles/Shared.styles'

function Contacts() {
  const { t } = useTranslation();
  const viewType = useSelector(state => state.viewType)
  const contracts = useSelector(state => state.contract)
  const customers = useSelector(state => state.customer)
  const currentContractSelected = useSelector(state => state.currentContract);

  const [relatedCustomer, setRelatedCustomer] = useState({})

  useEffect(()=>{
    setRelatedCustomer(customers.find(e =>  e.id === currentContractSelected.customerId))
  },[currentContractSelected])

  
  const ListView = contracts.map(e => {
    return (
      <ListViewItem contract={e} key={e.id}/>
    )
  })

  const GridView = contracts.map(e => {
    return (
      <GridViewItem contract={e} key={e.id}/>
    )
  })
  
  return (
    <st.PageWrapper>
      <st.PageContent>
        <st.Heading>
          <h1>{t('route_contracts')}</h1>
          <SearchBar />
        </st.Heading>
        <st.ContentArea gridView={viewType.state === 'grid'}>
          {viewType.state === 'grid' ? GridView : ListView}
        </st.ContentArea>
      </st.PageContent>
      <st.DetailsPanel>
        <ContractDetail 
          showList={false} 
          contractName={currentContractSelected?.name} 
          customer={relatedCustomer?.name} 
          selectedItem={Object.keys(currentContractSelected).length === 0} 
          t={t}
          />
      </st.DetailsPanel>

    </st.PageWrapper>
  );
}

export default Contacts;