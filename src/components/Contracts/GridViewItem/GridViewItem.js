import { SelectedIndicator } from '../../../Pages/PageStyles/Shared.styles'
import { useSelector , useDispatch} from 'react-redux'
import {currentContract} from '../../../store/actions';
import {GridViewItemWrapper} from './GridViewItem.style'


function GridViewItem({contract}) { 
  const dispatch = useDispatch();
  const currentContractSelected = useSelector(state => state.currentContract);
    return (
      <GridViewItemWrapper onClick={()=> dispatch(currentContract(contract))}>
          <h3>{contract.name}</h3>
        <SelectedIndicator selected={currentContractSelected.id === contract.id}/>
      </GridViewItemWrapper>
    );
  }
  
  export default GridViewItem;