import styled from '@emotion/styled'

const ListViewItemWrapper = styled.div`
    height: 100px;
    width: 76%;
    background-color: #FFF;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 5px;
    position: relative;
    margin-bottom: 20px;
    cursor: pointer;
`
const ListViewContent = styled.div`
    height: 100%;
    width: 95%;
    display: flex;
    align-items: center;

`

const ListViewIcon = styled.div`
    height: 100%;
    background-color: #254CD8;
    width: 100px;
    color: #FFF;
    display: flex; 
    justify-content: center;
    align-items: center;
    font-size: 55px;
    border-radius: 5px 0px 0px 5px;
`

const ListViewInfo = styled.div`
    border-left: 1px solid #CCC;
    margin-left: 20px;
    margin-right: 20px;
    padding-left: 20px;
    width: 170px;
    box-sizing: border-box;
`

const ListViewArror = styled.div`
    margin-left: auto;
`
const SelectedIndicator = styled.div`
    position: absolute;
    height: 100%;
    width: 10px;
    background-color: ${props => props.selected ? '#4BE488' : '#CCC'};
    border-radius: 0px 5px 5px 0px;
    right: 0;
    top: 0;
`

export {
    ListViewItemWrapper,
    ListViewInfo,
    ListViewIcon,
    ListViewContent,
    ListViewArror,
    SelectedIndicator
}