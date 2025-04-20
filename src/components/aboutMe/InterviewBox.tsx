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
xl:p-10 
rounded-xl bg-neutral-800
`
export const Title = tw.h3`
text-xl
xl:text-2xl 
text-white 
font-bold
`

export const Content = tw.p`
mt-3
text-lg
xl:mt-5 
xl:text-2xl 
xl:leading-10 
text-white 
font-light
`
