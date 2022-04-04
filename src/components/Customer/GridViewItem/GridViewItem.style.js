import styled from '@emotion/styled'

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

export {
    GridViewItemWrapper,
    Header,
    Icon,
    Content,
    DeleteIcon
}