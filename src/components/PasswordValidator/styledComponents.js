import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
`

export const ItemsContainer = styled.div`
  font-family: 'Roboto';
  width: 300px;
  height: 250px;

  background-color: #383a4e;
  border-radius: 9px;
  box-shadow: 0 8px 16px 0 #434451;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 0.8;

  @media screen and (min-width: 768px) {
    height: 300px;
    width: 400px;
  }
`
export const Heading = styled.h1`
  color: white;
  font-size: 24px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`

export const Para = styled.p`
  color: #f8fafc;
  font-weight: 300;

  font-size: 12px;
`
export const Input = styled.input`
  background-color: #edeeff;
  width: 250px;
  height: 40px;
  margin-top: 50px;
  font-size: 15px;
  padding: 15px;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 280px;
    height: 40px;
  }
`

export const ErrMsg = styled(Para)`
  color: #ef4444;
`
