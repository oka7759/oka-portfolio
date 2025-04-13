import tw from 'tailwind-styled-components'

export const Workspace = () => {
  return (
    <Container>
      <Box>
        <div>
          <DueText>2020-04 ~ 2020-04</DueText>
          <Company>헬사베일</Company>
          <Position>fullstack developer</Position>
        </div>
        <List>
          <li>다양한 프로젝트 구현</li>
          <li>다양한 프로젝트 구현</li>
          <li>다양한 프로젝트 구현</li>
          <li>다양한 프로젝트 구현</li>
        </List>
      </Box>
      <Box>
        <div>
          <DueText>2020-04 ~ 2020-04</DueText>
          <Company>헬사베일</Company>
          <Position>fullstack developer</Position>
        </div>
        <List>
          <li>다양한 프로젝트 구현</li>
          <li>다양한 프로젝트 구현</li>
          <li>다양한 프로젝트 구현</li>
          <li>다양한 프로젝트 구현</li>
        </List>
      </Box>
    </Container>
  )
}

export const Container = tw.div`
grid grid-cols-2 gap-3
`
export const Box = tw.div`
p-10 bg-neutral-800 rounded-xl 
`

export const DueText = tw.p`
text-base text-gray-400 mb-2
`
export const Company = tw.h3`
text-2xl text-white font-medium mb-1
`

export const Position = tw.p`
text-base text-white
`

export const List = tw.ul`
list-disc text-base text-gray-400 pl-5 mt-5
`
