import tw from 'tailwind-styled-components'

export default function SideButton() {
  return (
    <BtnWrap>
      <div className='w-14 h-14 bg-white rounded-full flex items-center justify-center'>
        <i className='bi bi-envelope-fill text-3xl'></i>
      </div>

      <div className='w-14 h-14 bg-white rounded-full flex items-center justify-center'>
        <i className='bi bi-github text-3xl'></i>
      </div>
      <div className='w-14 h-14 bg-white rounded-full flex items-center justify-center'>
        <i className='bi bi-chevron-bar-up text-3xl'></i>
      </div>
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
