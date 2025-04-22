import tw from 'tailwind-styled-components'

import { Icon } from '../Icon'
import { SkillData } from '@/types/common'

export const SkillBox = ({ stack }: { stack: SkillData }) => {
  const { position, skill } = stack
  return (
    <div>
      <Title>{position}</Title>
      <Wrap>
        {skill.map((item, idx) => (
          <Icon key={idx} icon={item} />
        ))}
      </Wrap>
    </div>
  )
}

export const Title = tw.h3`
text-2xl
font-medium
text-white
mb-5 
`

export const Wrap = tw.div`
flex 
gap-1.5
flex-wrap
`

export const Item = tw.div`
bg-white 
w-14 
h-10 
rounded-xl
`
