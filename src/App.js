import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

import useRouter from './useRouter'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

const Container = styled.div`
  padding: 10px 0 20px 0;
  margin: 2rem 5vw;
  width: 90vw;
  position: fixed;
  top: calc(15vh);
  display: flex;
  justify-content: center;
`

function App() {
  const { location } = useRouter()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props} className="animated">
      <Navbar />
      <Container className="container">
        <Switch location={item}>
          <Route exact path="/" render={() => <Home />}/>
          <Route path="/about" render={() => <About />}/>
          <Route path="/contact" render={() => <Contact />}/>
        </Switch>
      </Container>
    </animated.div>
  ))
}

export default App
