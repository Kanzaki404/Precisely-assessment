import styled from '@emotion/styled'

const ButtonWrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 50px;
    width: ${props => props.size !== 'normal'  ?  '100%' : '120px' };
    background-color: transparent;
    outline: none;
    border: ${props => props.type !== 'primary' && props.type === 'warning' ?  '2px solid #F25050' : ' 2px solid #254CD8' };
    color: ${props => props.type !== 'primary' && props.type === 'warning'  ?  '#F25050' : '#254CD8' };
    font-size: 14px;
    font-weight: bold;
  cursor: pointer;
    &:hover{
        background-color: ${props => props.type !== 'primary' && props.type === 'warning'  ?  '#F25050' : '#254CD8' };
        color: white;
    }
`

function Button({children, options}) { 
    
    
    return (
      <ButtonWrapper type={options.type} size={options.size}>
        {children}
      </ButtonWrapper>
    );
  }
  
  export default Button;