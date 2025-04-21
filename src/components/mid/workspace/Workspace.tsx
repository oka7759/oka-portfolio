import { Icon } from '@/components/Icon'
import { useArrivedScroll } from '@/hooks/useArrivedScroll'
import { CareerData } from '@/types/common'
import { ScrollAni } from '@/utils/animation'
import tw from 'tailwind-styled-components'

export const Workspace = ({ career }: { career: CareerData[] }) => {
  const { scrollRef, scrollEl } = useArrivedScroll()
  return (
    <Wrap>
      <ScrollAni className={`${scrollEl ? 'fadeAn fadeIn' : 'fadeOut'}`} ref={scrollRef}>
        <Container>
          {career.map((item, idx) => {
            const { due, name, position, working, skills } = item
            return (
              <Box key={idx}>
                <div>
                  <DueText>{due}</DueText>
                  <Company>{name}</Company>
                  <Position>{position}</Position>
                </div>
                <List>
                  {working.map((work, idx) => {
                    return <li key={idx}>{work}</li>
                  })}
                </List>
                <Skills>
                  {skills.map((item, idx) => (
                    <Icon key={idx} icon={item} />
                  ))}
                </Skills>
              </Box>
            )
          })}
        </Container>
      </ScrollAni>
    </Wrap>
  )
}

export const Wrap = tw.div`
xl:min-h-lvh 
`
export const Container = tw.div`
grid 
grid-cols-1 
lg:grid-cols-2 
gap-3  
max-w-[1700px] 
py-10

`
export const Box = tw.div`
p-10 
bg-neutral-800 
rounded-xl 
max-h-[500px] 
flex 
flex-col 
justify-between
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

export const List = tw.ul`
list-disc 
text-base 
text-gray-400 
pl-5 
mt-5
`

export const Skills = tw.div`
mt-10 
flex 
gap-2 
flex-wrap
`
