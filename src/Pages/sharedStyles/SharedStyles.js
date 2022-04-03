
import styled from '@emotion/styled'


export const PageWrapper = styled.div`
    display: flex;
    width: 100%;
`
export const PageContent = styled.div`
    display: flex;
    flex-direction:column;
    padding-top: 50px;
    padding-left: 50px;
    justify-content: flex-start;
    height: 100vh;
    flex-grow: 100;
    box-sizing: border-box;
`
export const Heading = styled.div`
    display: flex;
    align-items: center;
    h1{
        margin-right: 50px;
        width: 200px;
    }
`


export const DetailsPanel = styled.div`
    width: 450px;
    height: 100vh;
    float: right;
    background-color: #FFF;
    box-shadow: -4px 0px 30px 0px #00000030;

`

export default 
{
    PageWrapper,
    PageContent, 
    Heading, 
    DetailsPanel
}