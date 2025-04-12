import tw from 'tailwind-styled-components'

export const Career = () => {
  return (
    <Wrap>
      <div className='sticky top-10 flex flex-col pl-10 gap-5'>
        <Title>Career</Title>
        <Title>Project</Title>
        <Title>Education</Title>
      </div>
      <div className='w-full grid grid-cols-2 gap-3 m-10'>
        <div className='p-10 bg-amber-50 rounded-xl min-h-16'>1</div>
        <div className='p-10 bg-amber-50 rounded-xl min-h-16'>1</div>
      </div>
    </Wrap>
  )
}

export const Wrap = tw.div`
relative
w-full 
bg-[#1E1E1E]
bg-cover 
bg-center
flex
gap-15
`

export const Title = tw.h1`
text-white text-6xl font-extrabold 
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
