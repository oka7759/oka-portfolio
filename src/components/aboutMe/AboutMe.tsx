import tw from 'tailwind-styled-components'
import img from '@/assets/images/char.png'
import { InterviewBox } from './InterviewBox'
import { SkillBox } from './SkillBox'
import { SKILL_DATA, INTERVIEW_DATA } from '@/MockData'
import { useArrivedScroll } from '@/hooks/useArrivedScroll'
import { ScrollAni } from '@/utils/animation'

export const AboutMe = () => {
  const { scrollRef, scrollEl } = useArrivedScroll()
  return (
    <Wrap>
      <Title>About me</Title>
      <ScrollAni className={`${scrollEl ? 'fadeAn fadeIn' : 'fadeOut'}`} ref={scrollRef}>
        <Content>
          <Character src={img} />
          <Section>
            <SectionTitle>Interview</SectionTitle>
            {INTERVIEW_DATA.map((interview, idx) => {
              return <InterviewBox key={idx} interview={interview} />
            })}
          </Section>
          <Section>
            <SectionTitle>Skill & Tools</SectionTitle>
            <SkillContainer>
              {SKILL_DATA.map((skill, idx) => {
                return <SkillBox key={idx} stack={skill} />
              })}
            </SkillContainer>
          </Section>
        </Content>
      </ScrollAni>
    </Wrap>
  )
}

export const Wrap = tw.div`
relative
w-full 
bg-[#1E1E1E]
bg-cover 
bg-center
p-4
`
export const Content = tw.div`
m-auto
max-w-6xl
flex
flex-col
justify-center
items-center
delay-150
`
export const Title = tw.h1`
text-white text-6xl font-extrabold p-15
`

export const Character = tw.img`
mb-30
`

export const Section = tw.section`
w-full mb-30
`
export const SectionTitle = tw.h3`
text-4xl text-white font-black
`
export const SkillContainer = tw.div`

grid 
grid-cols-1
md:grid-cols-2
xl:grid-cols-3 
gap-10
mt-10
`
