import {ButtonWrapper} from './Button.style'


function Button({action, children, options}) { 
    return (
      <ButtonWrapper onClick={action} type={options.type} size={options.size}>
        {children}
      </ButtonWrapper>
    );
  }
  
  export default Button;

