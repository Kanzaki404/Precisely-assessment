import styled from '@emotion/styled'

const OptionsPageWrapper = styled.div`
    display: flex;
    padding-top: 50px;
    justify-content: center;
    height: 100vh;
    flex-grow: 100;
    box-sizing: border-box;
`
const LanguageOptions = styled.div`
    height: 70px;
    background-color: #FFF;
    width: 50vw;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px #00000040;
    display: flex;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
    justify-content: space-between;

`
const LangChoice = styled.div`
    display: flex;
    width: 250px;
    height: 50px;
    align-items: center;
    justify-content: space-around;

    div{
        display: inherit;
        align-items: center;
        justify-content: space-around;
        border: 1px solid #254CD8;
        height: 50px;
        width: 100px;
        border-radius: 5px;
        cursor: pointer;
    }
`
const Lang = styled.div`
    color: ${props => props.currentLang ?  'white' : '#254CD8' };
    background-color: ${props => !props.currentLang ?  'white' : '#254CD8' };
`

export {
    OptionsPageWrapper,
    LanguageOptions,
    LangChoice,
    Lang
}