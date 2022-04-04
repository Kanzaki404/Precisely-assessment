
import { BsArrowRightShort } from 'react-icons/bs';
import { useSelector , useDispatch} from 'react-redux'
import {currentContract} from '../../../store/actions';
import * as st from './ListViewItem.style'
function ListViewItem({contract}){
    const dispatch = useDispatch();
    const currentContractSelected = useSelector(state => state.currentContract);

     return (
         <st.ListviewItemWrapper onClick={()=> dispatch(currentContract(contract))}>
             <st.ListContent>
                 <h3>{contract.name}</h3>
                 <BsArrowRightShort size={40}/>
             </st.ListContent>
             <st.SelectedIndicator selected={currentContractSelected.id === contract.id}></st.SelectedIndicator>
         </st.ListviewItemWrapper>
     )
 }

 export default ListViewItem;


