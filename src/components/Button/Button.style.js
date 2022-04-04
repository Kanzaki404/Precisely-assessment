import styled from '@emotion/styled'
import styleColors from '../Assets/colors';

export const ButtonWrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 50px;
    width: ${props => props.size !== 'normal'  ?  '100%' : '120px' };
    background-color: transparent;
    outline: none;
    border: ${props => props.type !== 'primary' && props.type === 'warning' ?  `2px solid ${styleColors.red}` : `2px solid ${styleColors.blue}` };
    color: ${props => props.type !== 'primary' && props.type === 'warning'  ?  styleColors.red : styleColors.blue };
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        background-color: ${props => props.type !== 'primary' && props.type === 'warning'  ?  styleColors.red : styleColors.blue };
        color: white;
    }
`