import { useTranslation } from 'react-i18next';
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

const SelectedIndicator = styled.div`
    position: absolute;
    bottom: 0;
    background-color: ${props => props.selected  ?  '#4BE488' : '#CCC' };
    border-radius: 0px 0px 5px 5px;
    width: 100%;
    height: 10px;
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