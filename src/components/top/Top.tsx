import tw from 'tailwind-styled-components'
import img from '@/assets/images/test.png'

export const Top = () => {
  return (
    <Wrap>
      <Headline>
        <Title>Developer</Title>
        <SubTitle>퍼블리셔를 시작으로 개발자 3년차 개발자 정억화입니다.</SubTitle>
        <Description>
          급이 다른 <b>성실함</b>과 <b>책임감</b>을 바탕으로, <br />내 서비스를 만든다는 마음으로
          고객의 시선에서 고민하는 개발자입니다.
        </Description>
      </Headline>
      <MyImg src={img} />
    </Wrap>
  )
}

export const Wrap = tw.div`
sticky
top-0
w-full 
w-full
h-lvh 
bg-[url('@/assets/images/bg01.png')]
bg-cover 
bg-center

`
export const Headline = tw.div`
m-auto
max-w-6xl
pt-30
text-center
`

export const Title = tw.h1`
text-[160px]
font-extrabold 
text-white
`
export const SubTitle = tw.p`
text-5xl text-gray-800 -mt-17 font-medium
`

export const Description = tw.p`
text-xl mt-10
`

export const MyImg = tw.img`
absolute bottom-0 left-1/2 translate-x-[-50%]
`
