/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useTransition, animated, config } from 'react-spring'

const Container = styled.div`
  min-height: 50vh;
  position: relative;
  width: 100%;
  cursor: pointer;
  background: ${props => props.theme.bgLimeGreen};
  & > div {
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`

const TestScreen = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
  border-radius: 2rem;
  clip-path: inset(1rem round 5rem .5rem 5rem .5rem);
  & div {
    border: 1px solid white;
  }
`

function TestScreen1() {
  return (
    <TestScreen bgColor="tomato">
      <div>
        Im number 1
      </div>
    </TestScreen>)
}

function TestScreen2() {
  return (
    <TestScreen bgColor="aqua">
      <div>
        Im number 2
      </div>
    </TestScreen>
  )
}

function TestScreen3() {
  return (
    <TestScreen bgColor="teal">
      <div>
        Im number 3
      </div>
    </TestScreen>
  )
}



const Carousel = () => {
  const [index, setIndex] = useState(0)
  const toggleComponent = () => {
    if (index === 2) {
      setIndex(0)
    } else {
      setIndex(index => index + 1)
    }
  }

  useEffect(() => {
    const toggleTime = setInterval(() => {
      if (index === 2) {
        setIndex(0)
      } else {
        setIndex(index => index + 1)
      }
    }, 50000)
    return (() => {
      clearInterval(toggleTime)
    })
  }, [index])

  const items = [{ key:0, item: TestScreen1 }, { key:1, item: TestScreen2 }, { key:2, item: TestScreen3 }]
  const transitions = useTransition(items[index], item => item.key, {
    from:{ opacity: 0, transform: 'translate3d(100%, 0 ,0)' },
    enter:{ opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave:{ opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
    config: config.slow
  })

  return (
    <Container onClick={toggleComponent}>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={{ ...props }} >
          {React.createElement(item.item)}
        </animated.div>
      ))}
    </Container>
  )
}

export default Carousel