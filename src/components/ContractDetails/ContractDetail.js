import { useEffect, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import Button from '../Button/Button'
import * as st from './ContractDetails.style'

function ContractDetail({ 
    contractName, 
    customer, 
    selectedItem, 
    showList, 
    relatedContracts, 
    deleteCustomer,
    t
}) {
    const [contractList, setContractList] = useState([])
    useEffect(()=>{
        if(showList){
            const List = relatedContracts.map(e => {
                return (
                    <st.ContractListItem key={e.id}>
                        <span>{e.name}</span>
                        <BsArrowRightShort size={40} />
                    </st.ContractListItem>
                )
            })
            setContractList(List)
        }
    },[relatedContracts])
        
    return (
        <st.ContractDetailWrapper>
            {selectedItem ? <p>Please select a contract to view details</p> :
                showList ?
                    <>
                        <st.Heading>
                            <h3>{customer}</h3>
                            <span>{t('related_contracts')}</span>
                        </st.Heading>
                        <st.ContractListItemContainer>
                            {contractList}
                        </st.ContractListItemContainer>
                        <hr/>
                        <Button action={deleteCustomer} options={{type: 'warning', size: 'full'}}>{t('delete_customer')}</Button>
                    </>
                    :
                    <>
                        <st.Heading>
                            <h3>{contractName}</h3>
                            <span>{t('customer')}: {customer}</span>
                        </st.Heading>
                        <st.Sections>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea
                            </p>
                        </st.Sections>
                        <st.Sections>
                            <p>into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </st.Sections>
                    </>
            }
        </st.ContractDetailWrapper>
    )
}

export default ContractDetail