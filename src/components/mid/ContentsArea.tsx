import tw from 'tailwind-styled-components'

export const ContentsArea = ({ items }: { items: React.ReactNode }) => {
  return <Contents>{items}</Contents>
}

export const Contents = tw.div`
w-full m-10 max-w-6xl mx-auto mt-30 
`
