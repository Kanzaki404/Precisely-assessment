import { useTranslation } from 'react-i18next';
import { SelectedIndicator } from '../../Pages/sharedStyles/SharedStyles'

import styled from '@emotion/styled'

const GridViewItemWrapper = styled.div`
    margin: 20px;
    width: 164px;
    height: 189px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 4px 4px 0px #00000040;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`


function GridViewItem({ContractTitle}) { 
    
    return (
      <GridViewItemWrapper>
          <h3>{ContractTitle}</h3>
        <SelectedIndicator selected={ContractTitle === 'Contract 2'}/>
      </GridViewItemWrapper>
    );
  }
  
  export default GridViewItem;