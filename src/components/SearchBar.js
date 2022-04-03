import styled from '@emotion/styled'
import { AiOutlineSearch } from 'react-icons/ai';
import { BsGrid, BsList } from 'react-icons/bs';
const SearchBarWrapper = styled.div`
    height: 50px;
    width: 370px;
    border-radius: 5px;
    background-color: #4F4F4F;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 4px 0px #00000040;


`
const SearchIcon = styled.div`
    color: #CCC;
    font-size: 24px;
    margin-right: 5px;
    padding-top: 5px;
    box-sizing: border-box;
`

const SearchBarInput = styled.input`
    width: 220px;
    height: 40px;
    background-color: transparent;
    border: none;
    outline: none;
    color: #CCC;
    font-size: 16px;
`
const ViewOptionGroup = styled.div`
    width: 100px;
    height: 40px;
    
    border-left: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
   
`
const ViewButton = styled.button`
/* background-color: rgba(196,196,196,0.54); */
    background-color: transparent; 
    color: white;
    border: none;
    height: 40px;
    width: 40px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: rgba(196,196,196,0.54);
    }
`

function SearchBar() {

    return (
        <SearchBarWrapper>
            <SearchIcon>
                <AiOutlineSearch />
            </SearchIcon>
            <SearchBarInput>

            </SearchBarInput>
            <ViewOptionGroup>
                <ViewButton ><BsGrid/></ViewButton>
                <ViewButton><BsList/></ViewButton>
            </ViewOptionGroup>


        </SearchBarWrapper>
    );
}

export default SearchBar;