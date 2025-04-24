import { PROJECT_DETAIL_DATA } from '@/PROJECT_DATA'
import { ModalProps } from '@/recoil/atoms/CommonAtom'
import { useRecoilState } from 'recoil'
import tw from 'tailwind-styled-components'

import { ToggleBox } from './mid/project/ToggleBox'
import { Button } from './sideButtons/RoundButton'
import { useModal } from '@/hooks/useModal'
import { goToUrl } from '@/utils/buttonFunction'
export const ProjectModal = () => {
  const [modalProps, setModalProps] = useRecoilState(ModalProps)
  const { closeModal } = useModal(0)

  const projectData = PROJECT_DETAIL_DATA.find((project) => project.id === modalProps.id)
  return projectData ? (
    <div className='fixed inset-x-0 inset-y-0 z-[999]  py-10 px-40 bg-black overflow-y-auto'>
      <div className='relative w-full mx-auto bg-white pb-10 min-h-screen h-auto max-md:h-auto '>
        <div
          className=' fixed
  top-10
  right-[3rem]
  flex
  flex-col
  items-center
  gap-5
  z-[999]
'
        >
          <Button
            onClick={() => {
              closeModal()
            }}
          >
            <i className={` bi bi-x text-3xl   leading-none flex-shrink-0`}></i>
          </Button>
          {projectData.urls?.deployment && (
            <Button onClick={() => goToUrl(projectData.urls!.deployment as string)}>
              <i className={` bi bi-link text-3xl   leading-none flex-shrink-0`}></i>
            </Button>
          )}
          {projectData.urls?.git && (
            <Button onClick={() => goToUrl(projectData.urls!.git as string)}>
              <i className='bi bi-github text-3xl leading-none flex-shrink-0'></i>
            </Button>
          )}
        </div>
        <section className='relative flex flex-col items-center z-[1] p-10 before:block before:absolute before:top-0 before:left-0 before:w-full before:bg-[#0b4da1] before:h-[85%] before:z-[-1] after:block after:absolute after:top-0 after:left-0 after:w-full after:h-[85%] after:bg-gradient-to-t from-[#00000045] after:z-[-1]'>
          <div className='flex gap-1'>
            {projectData.meta.tags.map((tag, idx) => {
              return (
                <span
                  key={`tag.${idx}`}
                  className=' items-center justify-center text-xs text-white bg-[#232323] px-3 py-1 rounded'
                >
                  {tag}
                </span>
              )
            })}
          </div>

          <h3 className='text-white text-4xl text-center font-bold mt-2 mb-4'>
            {projectData.meta.name}
          </h3>
          <span className='flex gap-5 mb-4'>
            <span className='text-white text-sm text-center'>
              {projectData.due}
              <br />
              {projectData.member}
            </span>
          </span>
        </section>

        <section className='px-[20%] pb-10 flex flex-col gap-10 text-base max-md:px-[5%]'>
          <p className='text-center border-solid border-[#dcdcdc] pb-10 border-b-[1px]'>
            {projectData.description}
          </p>
          <div className=''>
            <h3 className='text-2xl font-bold mt-2 mb-4'>🛠️ 사용 기술 및 언어</h3>
            <div className='flex flex-col gap-1'>
              <div className='flex flex-col cursor-pointer'>
                <div className='flex gap-2 items-center bg-mainGray py-2 px-3 font-medium '>
                  {projectData.language.map((item, idx) => {
                    return (
                      <span
                        key={`lang-${idx}`}
                        className='text-base px-3 py-1 bg-amber-400 rounded-xl text-white transition-all hover:bg-amber-600'
                      >
                        {item}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          {projectData.keyFeatures && (
            <div className=''>
              <h3 className='text-2xl font-bold mt-2 mb-4'>✨ 주요 기능</h3>
              <ul className='list-disc pl-10 text-lg'>
                {projectData.keyFeatures.map((item, idx) => {
                  return <li key={`feature-${idx}`}> {item}</li>
                })}
              </ul>
            </div>
          )}
          {projectData.contribution && (
            <div>
              <h3 className='text-2xl font-bold mt-2 mb-4'>✨ 본인 주요 작업내용</h3>
              {projectData.contribution.map((item, idx) => (
                <ToggleBox key={idx} {...item} />
              ))}
            </div>
          )}

          {projectData.trouble && (
            <div>
              <h3 className='text-2xl font-bold mt-2 mb-4'>✨ 문제 해결 </h3>
              {projectData.trouble.map((item, idx) => (
                <ToggleBox key={idx} {...item} type={true} />
              ))}
            </div>
          )}

          {projectData.remembrance && (
            <div className=''>
              <h3 className='text-2xl font-bold mt-2 mb-4'>✨ 회고</h3>
              <ul className='list-disc pl-10 text-lg'>
                {projectData.remembrance.map((item, idx) => {
                  return <li key={`feature-${idx}`}> {item}</li>
                })}
              </ul>
            </div>
          )}

          {projectData.images.length > 0 && (
            <div className=''>
              <h3 className='text-2xl font-bold mt-2 mb-4'>✨ 스크린샷</h3>

              <div className='grid grid-cols-3 gap-2 '>
                {projectData.images.map((item, idx) => {
                  return (
                    <div key={`img-${idx}`}>
                      <img src={item} alt={`${projectData.meta.name} img`} />
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  ) : (
    <></>
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
