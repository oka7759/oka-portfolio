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
mt-10 p-10 rounded-xl bg-neutral-800
`
export const Title = tw.h3`
text-2xl text-white font-bold
`

export const Content = tw.p`
mt-5 text-2xl text-white leading-10 font-light
`
