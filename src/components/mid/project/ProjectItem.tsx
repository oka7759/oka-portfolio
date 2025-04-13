import tw from 'tailwind-styled-components'

export const ProjectItem = () => {
  return (
    <Item>
      <Top>
        <Thumnail
          src='https://kr.object.ncloudstorage.com/oka-tech/images/next.png'
          alt='Next Image'
        />
      </Top>
      <Text>
        <Title> 프로젝트 1</Title>
        <Discription>여러 프로젝트를 제작했음</Discription>
      </Text>
      <Tags>
        <Tag>팀</Tag>
        <Tag>반응형</Tag>
        <Tag>디자인</Tag>
      </Tags>
    </Item>
  )
}

export const Thumnail = tw.img`
absolute top-0 left-0 w-full h-full object-cover
`

export const Item = tw.div`
flex h-full flex-col overflow-hidden rounded-md transition  bg-neutral-800
`

export const Top = tw.div`
relative h-44 w-full rounded-t-md border-b
`

export const Text = tw.div`
flex flex-1 flex-col justify-between px-4 pt-5
`
export const Title = tw.h3`
text-2xl text-white mb-3
`

export const Discription = tw.p`
text-base text-neutral-400
`

export const Tags = tw.div`
flex px-4 gap-2 pt-10 pb-4
`
export const Tag = tw.span`
text-white px-2 py-1 text-sm bg-black rounded-md
`
