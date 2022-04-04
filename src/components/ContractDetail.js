import styled from '@emotion/styled'
import { BsArrowRightShort } from 'react-icons/bs';

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

const ContractListItem = styled.div`
    display: flex;
    border: 1px solid #4B4B4B;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 15px;
    cursor: pointer;
    &:hover{
        background-color: #4B4B4B;
        color: white;
    }
    
`
function ContractDetail() {
    const ShowContract = false
    const template = [1,2,3,4,5,6,7,8]
    const ContractList = template.map(e => {
        return (
            <ContractListItem >
                <span>Contract #3</span>
                <BsArrowRightShort size={40} />
            </ContractListItem>
        )
    })
    return (
        <ContractDetailWrapper>
            {ShowContract ? <>
            <Heading>
                <h3>Contract Name</h3>
                <span>Customer: Lawyers Ltd</span>
            </Heading>
            <Sections>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea
                </p>
            </Sections>
            <Sections>
                <p>into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </Sections>
            </> : 
            <>
            <Heading>
                <h3>Customer Name</h3>
                <span>Related Contracts</span>
            </Heading>
            {ContractList}
            </>
            }
           
        </ContractDetailWrapper>
    )
}

export default ContractDetail