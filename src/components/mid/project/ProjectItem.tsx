import { useModal } from '@/hooks/useModal'
import { Project, ProjectData } from '@/types/common'
import tw from 'tailwind-styled-components'

export const ProjectItem = ({ project }: { project: Project[] }) => {
  return project.map((item, idx) => {
    const { type, img, name, desc, tags } = item.meta
    const { openModal } = useModal(item.id)
    return (
      <Item key={`${type}_${idx}`} className='group'>
        <Top>
          <Thumbnail src={img} alt={`${name}s image`} />
        </Top>
        <Text>
          <Title> {name}</Title>
          <Description>{desc}</Description>
        </Text>
        <Tags>
          {tags.map((item, idx) => {
            return <Tag key={idx}>{item}</Tag>
          })}
        </Tags>
        <Overlay className='group-hover:flex'>
          <h1 className='text-white text-2xl'>{name}</h1>
          <OverlayContent>
            <span
              onClick={() => {
                openModal()
              }}
            >
              자세히 보기
            </span>
          </OverlayContent>
        </Overlay>
      </Item>
    )
  })
}

export const Item = tw.div`
relative 
flex 
h-full 
flex-col 
overflow-hidden 
rounded-md 
transition  
bg-neutral-800
`

export const Top = tw.div`
relative 
h-44 
w-full 
rounded-t-md 
border-b
`

export const Thumbnail = tw.img`
absolute top-0 left-0 w-full h-full object-cover
`

export const Text = tw.div`
flex flex-1 flex-col justify-between px-4 pt-5
`
export const Title = tw.h3`
text-2xl text-white mb-3
`

export const Description = tw.p`
text-base text-neutral-400
`

export const Tags = tw.div`
flex px-4 gap-2 pt-10 pb-4
`
export const Tag = tw.span`
text-white px-2 py-1 text-sm bg-black rounded-md
`
export const Overlay = tw.div`
absolute 
inset-0 
bg-neutral-950 
opacity-0 
invisible 
flex 
flex-col
items-center 
justify-center 
transition-all 
duration-500 
ease-in-out 
group-hover:opacity-80 
group-hover:visible

`

export const OverlayContent = tw.div`
mt-10
border-2 
border-amber-50 
py-2 
px-3 
font-normal
text-center
transition-colors 
duration-300 
text-white
hover:bg-white
hover:text-black
cursor-pointer
`
