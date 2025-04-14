import tw from 'tailwind-styled-components'

export const Bottom = () => {
  return (
    <Wrap>
      <Heardline>
        <Title>Thank You!</Title>
        <SubTilte>찾아 주셔서 감사합니다.</SubTilte>
        <Description>
          오늘보다 내일 <b>내일</b>보다 <b>내년</b>에 <b>더 빛나는 개발자</b>가 되겠습니다.
        </Description>
      </Heardline>
      <div className='absolute bottom-0 left-1/2 translate-x-[-50%]'>
        <div className='flex gap-5 text-xl font-extrabold justify-center'>
          <span className='border-b-4 leading-8'>Blog</span>
          <span className='border-b-4 leading-8'>GitHub</span>
        </div>

        <p className='my-12 text-neutral-400 text-base'>
          Copyright 2025. oka-tech all rights reserved.
        </p>
      </div>
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
`
export const Heardline = tw.div`
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
export const SubTilte = tw.p`
text-5xl text-gray-800 -mt-17 font-medium
`

export const Description = tw.p`
text-xl mt-30
`
