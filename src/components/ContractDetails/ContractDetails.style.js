import styled from '@emotion/styled'
import styleColors from '../Assets/colors'

const ContractDetailWrapper = styled.div`
    padding: 50px 50px 20px 50px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
`
const Heading = styled.div`
    margin-bottom: 50px;
`
const Sections = styled.div`
    height:150px;
    width: 100%;
    margin-bottom: 20px;
`
const ContractListItemContainer = styled.div`
    height: 65vh;
    width: 100%;
    padding-right: 5px;
    margin-bottom: 20px;
    overflow-y: scroll;    
    ::-webkit-scrollbar {
        width: 5px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: ${styleColors.grey};
        
    }
 
    /* Handle */
    ::-webkit-scrollbar-thumb {
    /* background: #888;  */
        background: ${styleColors.darkGrey};
        border-radius: 5px;
    }
`
const ContractListItem = styled.div`
    display: flex;
    border: 1px solid ${styleColors.darkGrey};
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 15px;
    cursor: pointer;
   
    &:hover{
        background-color: ${styleColors.darkGrey};
        color: white;
    }
`


export {
    ContractDetailWrapper,
    Heading,
    Sections,
    ContractListItemContainer,
    ContractListItem
}