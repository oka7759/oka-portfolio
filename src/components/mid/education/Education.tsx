import { Icon } from '@/components/Icon'
import { EduData } from '@/types/common'
import tw from 'tailwind-styled-components'

export const Education = ({ edu }: { edu: EduData[] }) => {
  return (
    <Wrap>
      <Container>
        {edu.map((item, idx) => {
          const { due, name, disc, skills } = item
          return (
            <Box key={idx}>
              <div>
                <DueText>{due}</DueText>
                <Company>{name}</Company>
                <Position>{disc}</Position>
              </div>
              <Skills>
                {skills.map((item, idx) => (
                  <Icon key={idx} icon={item} />
                ))}
              </Skills>
            </Box>
          )
        })}
      </Container>
    </Wrap>
  )
}

export const Wrap = tw.div`
min-h-lvh 
`
export const Container = tw.div`
grid 
grid-cols-1 
lg:grid-cols-2 
gap-3  
max-w-[1700px] py-10

`
export const Box = tw.div`
p-10 
bg-neutral-800 
rounded-xl 
max-h-[500px] 
`

export const DueText = tw.p`
text-base 
text-gray-400 
mb-2
`
export const Company = tw.h3`
text-2xl 
text-white 
font-medium 
mb-1
`

export const Position = tw.p`
text-base 
text-white
`

export const Skills = tw.div`
mt-10 
flex 
gap-2 
flex-wrap
`
