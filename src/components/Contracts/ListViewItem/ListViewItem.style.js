import styled from '@emotion/styled' 

const ListviewItemWrapper = styled.div`
    height: 60px;
    width: 95%;
    box-shadow: 0px 4px 4px 0px #00000040;
    background-color: #FFF;
    border-radius: 5px;
    position: relative;
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    cursor: pointer;
`
const ListContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    height: 100%;
    h3{
        margin-left: 20px;
    }

`
const SelectedIndicator = styled.div`
    position: absolute;
    height: 100%;
    width: 10px;
    background-color: ${props => props.selected  ?  '#4BE488' : '#CCC' };
    border-radius: 0px 5px 5px 0px;
    right: 0;
    top: 0;
`

export  {
    ListviewItemWrapper,
    ListContent,
    SelectedIndicator
}