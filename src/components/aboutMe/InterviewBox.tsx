import tw from 'tailwind-styled-components'

export const InterviewBox = () => {
  return (
    <Box>
      <Title>Q. 퍼블리셔에서 개발자로 전향한 이유는?</Title>
      <Content>
        웹퍼블리셔로 각종 웹사이트의 외관을 만드는 일을 하면서 그속의 개발을 만드는 일에 <br />
        언제나 갈증을 가지고 있었습니다.
        <br />
        1년 3개월 정도의 웹퍼블리셔로 근무를 하던중{' '}
      </Content>
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
