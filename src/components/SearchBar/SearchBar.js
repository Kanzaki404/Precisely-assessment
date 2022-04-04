
import { AiOutlineSearch } from 'react-icons/ai';
import { BsGrid, BsList } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux'
import { setGridView, setListView } from '../../store/actions'
import * as st from './SearchBar.style'


function SearchBar() {
    const viewType = useSelector(state => state.viewType)
    const dispatch = useDispatch()

    return (
        <st.SearchBarWrapper>
            <st.SearchIcon>
                <AiOutlineSearch />
            </st.SearchIcon>
            <st.SearchBarInput />
            <st.ViewOptionGroup>
                <st.ViewButton onClick={() => dispatch(setGridView('grid'))} viewType={viewType.state === 'grid'}><BsGrid /></st.ViewButton>
                <st.ViewButton onClick={() => dispatch(setListView('list'))} viewType={viewType.state === 'list'}><BsList /></st.ViewButton>
            </st.ViewOptionGroup>
        </st.SearchBarWrapper>
    );
}

export default SearchBar;
