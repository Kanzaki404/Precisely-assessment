import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';
import { PageWrapper, PageContent, Heading, DetailsPanel, ContentArea } from './sharedStyles/SharedStyles'
import SearchBar from '../components/SearchBar';
import GridViewItem from '../components/Contracts/GridViewItem';
import ListViewItem from '../components/Contracts/ListViewItem';
import ContractDetail from '../components/ContractDetail';
function Contacts() {
  const { t } = useTranslation();
  const GridViewTemplate = true;

  const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const ListView = testArr.map(e => {
    return (
      <ListViewItem ContractTitle="Lawyers 2" />
    )
  })

  const GridView = testArr.map(e => {
    return (
      <GridViewItem ContractTitle="Lawyers 2" />
    )
  })
  return (
    <PageWrapper>
      <PageContent>
        <Heading>
          <h1>{t('route_contracts')}</h1>
          <SearchBar />
        </Heading>
        <ContentArea gridView={GridViewTemplate}>
          {GridViewTemplate ? GridView : ListView}
        </ContentArea>
      </PageContent>
      <DetailsPanel>
        <ContractDetail />
      </DetailsPanel>

    </PageWrapper>
  );
}

export default Contacts;