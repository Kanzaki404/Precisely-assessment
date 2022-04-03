import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';
import { PageWrapper, PageContent, Heading, DetailsPanel, ContentArea} from './sharedStyles/SharedStyles'
import SearchBar from '../components/SearchBar';
import GridViewItem from '../components/Contracts/GridViewItem';
import ListViewItem from '../components/Contracts/ListViewItem';
function Contacts() { 
  const {t} = useTranslation();
    return (
      <PageWrapper>
          <PageContent>
          <Heading>
            <h1>{t('route_contracts')}</h1>
            <SearchBar/>
          </Heading>
        <ContentArea gridView={false}>
          <ListViewItem ContractTitle="Contract 2"/>
          <ListViewItem ContractTitle="Contract 1"/>
          <ListViewItem ContractTitle="Contract 1"/>
          <ListViewItem ContractTitle="Contract 1"/>
          <ListViewItem ContractTitle="Contract 1"/>
          <ListViewItem ContractTitle="Contract 1"/>
          <ListViewItem ContractTitle="Contract 1"/>
          <ListViewItem ContractTitle="Contract 1"/>
          <ListViewItem ContractTitle="Contract 1"/>
          <ListViewItem ContractTitle="Contract 1"/>
          <ListViewItem ContractTitle="Contract 1"/>
          <ListViewItem ContractTitle="Contract 1"/>
          <ListViewItem ContractTitle="Contract 1"/>

          <ListViewItem ContractTitle="Contract 1"/>
          <ListViewItem ContractTitle="Contract 1"/>
          <ListViewItem ContractTitle="Contract 1"/>

        </ContentArea>
      </PageContent>
      <DetailsPanel>Detail Panel ...</DetailsPanel>
       
      </PageWrapper>
    );
  }
  
  export default Contacts;