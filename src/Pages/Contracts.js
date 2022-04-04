import { useTranslation } from 'react-i18next';
import { PageWrapper, PageContent, Heading, DetailsPanel, ContentArea } from './sharedStyles/SharedStyles'
import SearchBar from '../components/SearchBar';
import GridViewItem from '../components/Contracts/GridViewItem';
import ListViewItem from '../components/Contracts/ListViewItem';
import ContractDetail from '../components/ContractDetail';
import { useSelector , useDispatch} from 'react-redux'


function Contacts() {
  const { t } = useTranslation();
  const viewType = useSelector(state => state.viewType)
  const contracts = useSelector(state => state.contract)
 
  const ListView = contracts.map(e => {
    return (
      <ListViewItem ContractTitle={e.name} />
    )
  })

  const GridView = contracts.map(e => {
    return (
      <GridViewItem ContractTitle={e.name}/>
    )
  })
 
  return (
    <PageWrapper>
      <PageContent>
        <Heading>
          <h1>{t('route_contracts')}</h1>
          <SearchBar />
        </Heading>
        <ContentArea gridView={viewType.state === 'grid'}>
          {viewType.state === 'grid' ? GridView : ListView}
        </ContentArea>
      </PageContent>
      <DetailsPanel>
        <ContractDetail />
      </DetailsPanel>

    </PageWrapper>
  );
}

export default Contacts;