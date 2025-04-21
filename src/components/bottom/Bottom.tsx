import { BOTTOM_URL } from '@/MockData'

import tw from 'tailwind-styled-components'
import { Link } from './Link'
import { ScrollAni } from '@/utils/animation'
import { useArrivedScroll } from '@/hooks/useArrivedScroll'

export const Bottom = () => {
  const { scrollRef, scrollEl } = useArrivedScroll()
  return (
    <Wrap>
      <ScrollAni className={`${scrollEl ? 'fadeAn fadeIn w-full' : 'fadeOut'}`} ref={scrollRef}>
        <Headline>
          <Title>Thank You!</Title>
          <SubTitle>찾아 주셔서 감사합니다.</SubTitle>
          <Description>
            오늘보다 내일 <b>내일</b>보다 <b>내년</b>에 <b>더 빛나는 개발자</b>가 되겠습니다.
          </Description>
        </Headline>
      </ScrollAni>
      <BottomContainer>
        <ButtonWrap>
          {BOTTOM_URL.map((item, idx) => {
            return <Link key={idx} linkData={item} />
          })}
        </ButtonWrap>

        <Copyright>Copyright 2025. oka-tech all rights reserved.</Copyright>
      </BottomContainer>
    </Wrap>
  )
}

export const Wrap = tw.div`
sticky
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

export const Title = tw.h1`
text-6xl
xl:text-[160px]
font-extrabold 
text-white
`
export const SubTitle = tw.p`
text-2xl
mt-5
px-5
xl:text-5xl
xl:-mt-8
text-gray-800
font-medium
`

export const Description = tw.p`
text-lg
mt-10
xl:text-xl 
xl:mt-30
`
export const Copyright = tw.p`
text-sm
my-12 
text-neutral-400 
xl:text-base
`

export const BottomContainer = tw.div`
w-full
text-center
absolute 
bottom-0 
left-1/2 
translate-x-[-50%]
`
export const ButtonWrap = tw.div`
flex 
gap-5 
text-xl 
font-extrabold 
justify-center
`
