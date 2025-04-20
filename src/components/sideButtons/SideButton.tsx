import tw from 'tailwind-styled-components'
import RoundButton from './RoundButton'
import { SIDE_BUTTON_DATA } from '@/MockData'
import { handleButtonClick } from '@/utils/buttonFunction'

export default function SideButton() {
  return (
    <BtnWrap>
      {SIDE_BUTTON_DATA.map((button, idx) => {
        const onClick = handleButtonClick(button)
        return <RoundButton key={idx} buttonData={{ ...button, onClick }} />
      })}
    </BtnWrap>
  )
}

export const BtnWrap = tw.div`
  fixed
  bottom-5
  right-5
  z-[2]
  flex
  flex-col
  gap-3
  items-center
  justify-center
  transition-all`
