import { LinkData } from '@/types/common'
import { goToUrl } from '@/utils/buttonFunction'
import tw from 'tailwind-styled-components'

export const Link = ({ linkData }: { linkData: LinkData }) => {
  const { text, url } = linkData

  return (
    <Button
      onClick={() => {
        goToUrl(url)
      }}
    >
      {text}
    </Button>
  )
}

export const Button = tw.div`
border-b-4 leading-8 cursor-pointer
`
