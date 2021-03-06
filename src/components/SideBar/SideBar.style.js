import styled from '@emotion/styled'

const NavWrapper = styled.div`
    background-color: white;
    height: 100vh;
    max-width: 200px;
    padding: 20px;
    box-sizing: border-box;
`
const NavItem = styled.li`
    padding: 15px;
    margin-bottom: 10px;
    list-style: none;
    border-radius: 5px;
    background-color: ${props => props.location  ?  '#254CD8' : 'transparent' };
    color: white;
    font-size: 15px;
 
  .LinkItem{
    color: ${props => props.location  ?  '#FFF' : '#000' };
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  &:hover{
    background-color: #254CD8;
      .LinkItem{
        color: white;
      }
  }
`
const NavIcon = styled.div`
    font-size: 20px;
    margin-right: 10px;
`
export {
    NavWrapper,
    NavItem,
    NavIcon
}