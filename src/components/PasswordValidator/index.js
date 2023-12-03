import {useState} from 'react'

import {
  BgContainer,
  ItemsContainer,
  Heading,
  Para,
  Input,
  ErrMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [input, setInput] = useState('')
  const [errorMsg, setErrorMsg] = useState(true)

  const caluclatingLength = event => {
    setInput(event.target.value)
    if (event.target.value.length >= 8) {
      setErrorMsg(false)
    } else {
      setErrorMsg(true)
    }
  }

  return (
    <BgContainer>
      <ItemsContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input type="password" value={input} onChange={caluclatingLength} />

        <ErrMsg>
          {errorMsg && 'Your password must be at least 8 characters'}
        </ErrMsg>
      </ItemsContainer>
    </BgContainer>
  )
}

export default PasswordValidator
