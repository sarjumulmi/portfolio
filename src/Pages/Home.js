import React from 'react'
import styled from 'styled-components'

import Carousel from '../Components/Carousel'

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-transform: capitalize;
  padding: 2rem;
  & p {
    border: 1px solid black;
    margin-bottom: 1rem;
    margin-right: 1rem;
    flex : 1 0 48%;
    @media (max-width: 768px) {
      flex: 1 0 100%;
    }
  }
`

const Home = () => {
  return (
    <div style={{ width: '100%' }}>
      <Carousel />
      <Section>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea dictumst vestibulum. Ultricies integer quis auctor elit sed vulputate. Amet justo donec enim diam vulputate. Tincidunt dui ut ornare lectus sit amet est. Amet dictum sit amet justo. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Morbi non arcu risus quis varius. Sit amet est placerat in. Nec ultrices dui sapien eget.</p>
        <p>Feugiat in ante metus dictum. Tincidunt id aliquet risus feugiat in. Nibh ipsum consequat nisl vel. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nunc scelerisque viverra mauris in aliquam. Aliquet risus feugiat in ante metus dictum at tempor. Iaculis eu non diam phasellus. Sapien faucibus et molestie ac feugiat sed lectus. Arcu ac tortor dignissim convallis. Eu scelerisque felis imperdiet proin fermentum leo.</p>
        <p>Cursus euismod quis viverra nibh cras pulvinar mattis. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Ut aliquam purus sit amet luctus venenatis lectus magna. Lacus laoreet non curabitur gravida. Mattis pellentesque id nibh tortor id aliquet. Lacinia at quis risus sed. Nec ullamcorper sit amet risus nullam eget. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Donec enim diam vulputate ut pharetra sit. Id velit ut tortor pretium viverra suspendisse potenti. Bibendum neque egestas congue quisque egestas diam in arcu. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Massa placerat duis ultricies lacus sed turpis.</p>
        <p>Netus et malesuada fames ac turpis egestas maecenas. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Vestibulum morbi blandit cursus risus. Dictumst vestibulum rhoncus est pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Sed vulputate mi sit amet mauris. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Facilisis gravida neque convallis a cras semper auctor neque vitae. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Id nibh tortor id aliquet lectus proin nibh. Non curabitur gravida arcu ac tortor dignissim. Condimentum lacinia quis vel eros donec ac odio. Viverra nam libero justo laoreet sit amet cursus sit amet. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Arcu bibendum at varius vel. Eget nunc lobortis mattis aliquam faucibus purus in massa. Enim neque volutpat ac tincidunt vitae semper quis lectus. Condimentum vitae sapien pellentesque habitant morbi. Sed augue lacus viverra vitae congue eu.</p>
        <p>Volutpat consequat mauris nunc congue nisi. Proin sed libero enim sed faucibus turpis. Phasellus faucibus scelerisque eleifend donec pretium. Nulla facilisi morbi tempus iaculis urna id. Laoreet sit amet cursus sit amet. Condimentum vitae sapien pellentesque habitant morbi. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Amet tellus cras adipiscing enim eu turpis egestas pretium. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Arcu non sodales neque sodales ut etiam sit amet. Habitant morbi tristique senectus et. Consequat semper viverra nam libero justo laoreet sit. Quam quisque id diam vel quam elementum pulvinar. Velit dignissim sodales ut eu sem integer. Malesuada proin libero nunc consequat interdum.</p>
        <p>Volutpat consequat mauris nunc congue nisi. Proin sed libero enim sed faucibus turpis. Phasellus faucibus scelerisque eleifend donec pretium. Nulla facilisi morbi tempus iaculis urna id. Laoreet sit amet cursus sit amet. Condimentum vitae sapien pellentesque habitant morbi. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Amet tellus cras adipiscing enim eu turpis egestas pretium. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Arcu non sodales neque sodales ut etiam sit amet. Habitant morbi tristique senectus et. Consequat semper viverra nam libero justo laoreet sit. Quam quisque id diam vel quam elementum pulvinar. Velit dignissim sodales ut eu sem integer. Malesuada proin libero nunc consequat interdum.</p>
      </Section>
    </div>
  )
}

export default Home