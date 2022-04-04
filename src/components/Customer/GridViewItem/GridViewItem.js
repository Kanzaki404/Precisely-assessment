
import Button from '../../Button/Button'
import { BiBuildings } from 'react-icons/bi';
import { ImBin } from 'react-icons/im';
import { SelectedIndicator } from '../../../Pages/PageStyles/Shared.styles'
import { useSelector , useDispatch} from 'react-redux'
import {currentCustomer} from '../../../store/actions';
import * as st from './GridViewItem.style'

function GridViewItem({customer, nr, deleteCustomer, t}){
    
    const dispatch = useDispatch();
    const currentCustomerSelected = useSelector(state => state.currentCustomer);
    return (
        <st.GridViewItemWrapper >
            <st.Header>
                <st.Icon><BiBuildings/></st.Icon>
                <h3>{customer.name}</h3>                
            </st.Header>
            <st.Content>
                <h4>{t('nr_contracts')} {nr}</h4>
                <div>
                <Button action={()=> dispatch(currentCustomer(customer))} options={{type: 'primary', size: 'full'}}>{t('show_details')}</Button>
                <hr/>
                <Button action={deleteCustomer} options={{type: 'warning', size: 'full'}}>
                    <st.DeleteIcon>
                        <ImBin/>
                    </st.DeleteIcon>
                    {t('delete')}
                </Button>
                </div>
            </st.Content>
            <SelectedIndicator selected={currentCustomerSelected.id === customer.id} />
        </st.GridViewItemWrapper>
    )
}

export default GridViewItem

