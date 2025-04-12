import { c } from 'node_modules/vite/dist/node/moduleRunnerTransport.d-CXw_Ws6P'
import tw from 'tailwind-styled-components'

export const SkillBox = () => {
  return (
    <div>
      <Title>Front-End</Title>
      <Wrap>
        <Item />
        <Item />
        <Item />
      </Wrap>
    </div>
  )
}

export const Title = tw.h3`
text-white mb-5`

export const Wrap = tw.div`
flex gap-3
`

export const Item = tw.div`
bg-black w-16 h-12 rounded-xl
`
