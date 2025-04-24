import { useState } from 'react'
interface Props {
  title: string
  text: string[]
  type?: boolean
}

export const ToggleBox = ({ title, text, type }: Props) => {
  const [isToggle, setToggle] = useState(false)
  return (
    <div className='flex flex-col cursor-pointer' onClick={() => setToggle((prev) => !prev)}>
      <div className='flex gap-2 items-center bg-mainGray py-2 px-3 font-medium transition-all hover:bg-[#e1e1e1]'>
        <svg xmlns='http://www.w3.org/2000/svg' width='9' height='9' viewBox='0 0 7 9' fill='none'>
          <path d='M4.5 7L0.602885 0.25L8.39711 0.250001L4.5 7Z' fill='#232323'></path>
        </svg>
        <p className='text-base flex-1'>{title}</p>
      </div>
      {isToggle && (
        <div className='py-2 px-3'>
          {isToggle && (
            <div className='py-2 px-3'>
              <ul className='list-disc pl-10 text-lg space-y-2'>
                {text.map((item, idx) => {
                  const getLabel = () => {
                    if (!type) return null
                    switch (idx) {
                      case 0:
                        return '[문제점]'
                      case 1:
                        return '[해결]'
                      case 2:
                        return '[느낀점]'
                      default:
                        return ''
                    }
                  }

                  return (
                    <li key={`toggle-${idx}`} className='text-base cursor-default leading-7'>
                      {type && <strong className='mr-2'>{getLabel()}</strong>}
                      {item}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
