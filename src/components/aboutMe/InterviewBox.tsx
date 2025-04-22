import { InterviewData } from '@/types/common'
import tw from 'tailwind-styled-components'

export const InterviewBox = ({ interview }: { interview: InterviewData }) => {
  const { question, answer } = interview
  return (
    <Box>
      <Title>{`Q. ${question}`}</Title>
      <Content>{answer}</Content>
    </Box>
  )
}

export const Box = tw.div`
mt-4
p-6
xl:mt-10 
xl:p-8 
rounded-xl 
bg-neutral-800
`
export const Title = tw.h3`
text-lg
xl:text-xl 
text-white 
font-bold
`

export const Content = tw.p`
mt-3
text-base
xl:mt-5 
xl:text-lg 
xl:leading-7
text-white 
font-light
`
