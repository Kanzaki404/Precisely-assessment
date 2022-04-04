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
    width: 400px;
    height: 100vh;
    float: right;
    background-color: #FFF;
    box-shadow: -4px 0px 30px 0px #00000030;

`

export const ContentArea = styled.div`
${props => props.gridView ? 
    `display: grid;
    grid-template-columns: auto auto auto;?`
    : null
}
   
    height: 75vh;
    box-sizing: border-box;
    overflow-y: scroll;
    margin-top: 20px;
    
    ::-webkit-scrollbar {
        width: 5px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: #CCC; 
        
    }
 
    /* Handle */
    ::-webkit-scrollbar-thumb {
    /* background: #888;  */
        background: #4F4F4F;
        border-radius: 5px;
    }
`

export const SelectedIndicator = styled.div`
    position: absolute;
    bottom: 0;
    background-color: ${props => props.selected  ?  '#4BE488' : '#CCC' };
    border-radius: 0px 0px 5px 5px;
    width: 100%;
    height: 10px;
`
