import styled from '@emotion/styled'


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
    background-color: ${props => props.viewType ? 'rgba(196,196,196,0.54)' : 'transparent'}; 
    color: white;
    border: none;
    height: 40px;
    width: 40px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-left: 5px;
    cursor: pointer;

    &:hover{
        background-color: rgba(196,196,196,0.54);
    }
`

export {
    SearchBarWrapper,
    SearchIcon,
    SearchBarInput,
    ViewOptionGroup,
    ViewButton
}