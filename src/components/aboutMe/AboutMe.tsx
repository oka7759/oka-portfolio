import tw from 'tailwind-styled-components'
import img from '@/assets/images/char.png'
import { InterviewBox } from './InterviewBox'
import { SkillBox } from './SkillBox'
import { SKILL_DATA, INTERVIEW_DATA } from '@/MockData'

export const AboutMe = () => {
  return (
    <Wrap>
      <Title>About me</Title>
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
    </Wrap>
  )
}

export const Wrap = tw.div`
relative
w-full 
w-full
bg-[#1E1E1E]
bg-cover 
bg-center
`
export const Content = tw.div`
m-auto
max-w-6xl
flex
flex-col
justify-center
items-center
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
grid grid-cols-3 gap-5 mt-10
`
