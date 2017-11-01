import React, {Component} from 'react'
import styled from 'styled-components'

const Card = styled.div`width: 500px;height: 380px;background: papayawhip;margin: 0 auto;margin-top: 170px;border: 2px solid papayawhip;box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);`

const Title = styled.h1`color: tomato;text-align: center;`

const Subtitle = styled.h3`text-align: center;`x

const Media = styled.img`width: 100%;height: auto;`

console.log('hello world, git pre commit, and prettiers!!.')

class App extends Component {
  render() {
    return (
      <Card>
        <Title>Hello World</Title>
        <Subtitle>This is my first styled components.</Subtitle>
        <Media src="https://reactjs.org/logo-og.png" />
      </Card>
    )
  }
}
export default App
