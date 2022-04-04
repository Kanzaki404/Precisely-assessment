
import { BiBuildings } from 'react-icons/bi';
import { BsArrowRightShort } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux'
import { currentCustomer } from '../../../store/actions';
import * as st from './ListViewItem.style'

function ListViewItem({ customer, nr, t }) {
    const dispatch = useDispatch();
    const currentCustomerSelected = useSelector(state => state.currentCustomer);
    
    return (
        <st.ListViewItemWrapper onClick={() => dispatch(currentCustomer(customer))}>
            <st.ListViewContent>
                <st.ListViewIcon>
                    <BiBuildings />
                </st.ListViewIcon>
                <st.ListViewInfo>{customer.name}</st.ListViewInfo>
                <st.ListViewInfo>{t('nr_contracts')} {nr}</st.ListViewInfo>
                <st.ListViewArror>
                    <BsArrowRightShort size={40} />
                </st.ListViewArror>
            </st.ListViewContent>
            <st.SelectedIndicator selected={currentCustomerSelected.id === customer.id} />
        </st.ListViewItemWrapper>
    )
}

export default ListViewItem

