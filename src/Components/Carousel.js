/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useTransition, animated, config } from 'react-spring'

const Container = styled.div`
  height: 50vh;
  position: relative;
  width: 100%;
  cursor: pointer;
  & > div {
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

const TestScreen = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

function TestScreen1() {
  return <TestScreen bgColor="tomato">Im number 1</TestScreen>
}

function TestScreen2() {
  return <TestScreen bgColor="aqua">Im number 2</TestScreen>
}

function TestScreen3() {
  return <TestScreen bgColor="teal">Im number 3</TestScreen>
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
    }, 5000)
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