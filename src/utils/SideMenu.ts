import { SideBtnData } from '@/types/common'

const handleButtonClick = (button: SideBtnData) => {
  switch (button.actionKey) {
    case 'goToTop':
      return () => goToTop()
    case 'copyEmail':
      return () => copyEmail(button.link) // email을 인자로 넘기기
    case 'goToGithub':
      return () => goToGithub(button.link)
    default:
      return () => console.log('Unknown action')
  }
}

const goToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

const goToGithub = (url: string) => {
  window.open(url)
}

const copyEmail = (email: string) => {
  navigator.clipboard.writeText(email).then(() => {
    alert('이메일 주소가 복사되었습니다!')
  })
}
export { handleButtonClick }
