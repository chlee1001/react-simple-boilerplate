import React from 'react'
import styled from 'styled-components'
import Test from '#component/Test'
import styles from './App.module.css'

const StyledButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: gray;
`

function App() {
  return (
    <div className={styles.AppContainer}>
      <h1>simple-react-boilerplate</h1>
      <StyledButton className={styles.button}>버튼</StyledButton>
      <Test />
    </div>
  )
}

export default App
