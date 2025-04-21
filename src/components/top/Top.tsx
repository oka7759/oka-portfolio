import tw from 'tailwind-styled-components'
import img from '@/assets/images/test.png'
import { motion } from 'framer-motion'
import { ANI_TRANSITION, OPACITY_0, OPACITY_1, Y_0, Y_M20 } from '@/utils/animation'

export const Top = () => {
  return (
    <Wrap>
      <Headline>
        <Title
          initial={{ ...OPACITY_0, ...Y_M20 }}
          animate={{ ...OPACITY_1, ...Y_0 }}
          transition={{ ...ANI_TRANSITION, delay: 0.5 }}
        >
          Developer
        </Title>
        <SubTitle
          initial={{ ...OPACITY_0, ...Y_M20 }}
          animate={{ ...OPACITY_1, ...Y_0 }}
          transition={{ ...ANI_TRANSITION, delay: 1 }}
        >
          퍼블리셔를 시작으로 개발자 3년차 개발자 정억화입니다.
        </SubTitle>
        <Description
          initial={{ ...OPACITY_0, ...Y_M20 }}
          animate={{ ...OPACITY_1, ...Y_0 }}
          transition={{ ...ANI_TRANSITION, delay: 1.3 }}
        >
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
px-5

`
export const Headline = tw.div`
m-auto
max-w-6xl
pt-30
text-center
`

export const Title = tw(motion.h1)`
text-6xl
xl:text-[160px]
font-extrabold 
text-white
`
export const SubTitle = tw(motion.p)`
text-2xl
mt-5
px-5
xl:text-5xl
xl:-mt-8
text-gray-800
font-medium
`

export const Description = tw(motion.p)`
text-lg
xl:text-xl 
mt-10
`

export const MyImg = tw.img`
w-[50%]
lg:w-auto
absolute 
bottom-0 
left-1/2 
translate-x-[-50%]
`
