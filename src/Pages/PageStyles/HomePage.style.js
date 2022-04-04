import styled from '@emotion/styled'

const HomePageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-grow: 100;
`
const NavigationButtonGroup = styled.div`
  margin-top: 60px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  #link{
    text-decoration: none;
  }
`

export {
    HomePageWrapper,
    NavigationButtonGroup
}