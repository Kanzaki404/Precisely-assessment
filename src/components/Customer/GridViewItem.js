import styled from '@emotion/styled'
import Button from '../Button'
import { useTranslation } from 'react-i18next';
import { BiBuildings } from 'react-icons/bi';
import { ImBin } from 'react-icons/im';
import { SelectedIndicator } from '../../Pages/sharedStyles/SharedStyles'

const GridViewItemWrapper = styled.div`
    width: 244px;
    height: 300px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px #00000040;
    position: relative;
    margin: 20px;
`
const Header = styled.div`
    height: 75px;
    width: 100%;
    background-color: #254CD8;
    border-radius: 5px 5px 0px 0px;
    box-sizing: border-box;
    color: white;
    display: flex;
    align-items: center;
`

const Icon = styled.div`
    font-size: 34px;

    margin-left: 20px;
    margin-right: 10px;

`
const Content = styled.div`
    padding: 15px;
    box-sizing: border-box;
    
`
const DeleteIcon = styled.div`
    font-size: 16px;
    margin-right: 10px;


`
function GridViewItem({customer, nr}){
    const {t} = useTranslation();
    return (
        <GridViewItemWrapper>
            <Header>
                <Icon><BiBuildings/></Icon>
                <h3>{customer}</h3>                
            </Header>
            <Content>
                <h4>{t('nr_contracts')} {nr}</h4>
                <div>
                <Button options={{type: 'primary', size: 'full'}}>{t('show_details')}</Button>
                <hr/>
                <Button options={{type: 'warning', size: 'full'}}>
                    <DeleteIcon>
                        <ImBin/>
                    </DeleteIcon>
                    {t('delete')}
                </Button>
                </div>
            </Content>
            <SelectedIndicator selected={customer === 'Lawyers 2'}/>
        </GridViewItemWrapper>
    )
}

export default GridViewItem