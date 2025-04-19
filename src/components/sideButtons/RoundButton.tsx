import { SideBtnData } from '@/types/common'
import { Tooltip } from 'react-tooltip'
import tw from 'tailwind-styled-components'

export default function RoundButton({ buttonData }: { buttonData: SideBtnData }) {
  const { icon, tooltipText, tooltipId, onClick } = buttonData
  return (
    <>
      <Button data-tooltip-content={tooltipText} data-tooltip-id={tooltipId} onClick={onClick}>
        <i className={`${icon} text-3xl`}></i>
      </Button>
      <Tooltip id={tooltipId} place='left' arrowColor='transparent' opacity={0.8} />
    </>
  )
}

export const Button = tw.div`
w-14 h-14 bg-white rounded-full flex items-center justify-center cursor-pointer

`
