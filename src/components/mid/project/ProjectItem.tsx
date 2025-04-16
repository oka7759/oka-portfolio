import { ProjectData } from '@/types/common'
import tw from 'tailwind-styled-components'

export const ProjectItem = ({ project }: { project: ProjectData[] }) => {
  return project.map((item, idx) => {
    const { type, img, name, desc, tags } = item
    return (
      <Item key={`${type}_${idx}`}>
        <Top>
          <Thumnail src={img} alt={`${name}s image`} />
        </Top>
        <Text>
          <Title> {name}</Title>
          <Discription>{desc}</Discription>
        </Text>
        <Tags>
          {tags.map((item, idx) => {
            return <Tag key={idx}>{item}</Tag>
          })}
        </Tags>
      </Item>
    )
  })
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
