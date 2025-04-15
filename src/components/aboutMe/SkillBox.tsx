import tw from 'tailwind-styled-components'

import { Icon } from '../Icon'

export const SkillBox = () => {
  return (
    <div>
      <Title>Front-End</Title>
      <Wrap>
        <Icon icon='JAVA' />
        <Icon icon='HTML' />
        <Icon icon='JAVA' />
      </Wrap>
    </div>
  )
}

export const Title = tw.h3`
text-white mb-5
`

export const Wrap = tw.div`
flex gap-3
`

export const Item = tw.div`
bg-black w-16 h-12 rounded-xl
`
