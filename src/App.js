import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

import useRouter from './useRouter'
import Navbar from './Components/navbar/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

const Container = styled.div`
  width: 100vw;
  position: absolute;
  top: 8.5rem;
`

function App() {
  const { location } = useRouter()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div>
      <Navbar />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props} className="animated">
          <Container className="container">
            <Switch location={item}>
              <Route exact path="/" render={() => <Redirect to="/portfolio" />}/>
              <Route exact path="/portfolio" render={() => <Home />}/>
              <Route path="/portfolio/about" render={() => <About />}/>
              <Route path="/portfolio/contact" render={() => <Contact />}/>
            </Switch>
          </Container>
        </animated.div>
      ))
      }
    </div>
  )
}

export default App
