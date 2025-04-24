import { ModalProps } from '@/recoil/atoms/CommonAtom'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

export const useModal = (id: number | null) => {
  const [modalProps, setModalProps] = useRecoilState(ModalProps)
  const openModal = () => {
    setModalProps({ id, isOpen: true })
  }

  const closeModal = () => {
    setModalProps({ id: null, isOpen: false })
  }

  const openScroll = () => {
    document.body.style.removeProperty('overflow')
  }

  const lockScroll = () => {
    document.body.style.overflow = 'hidden'
  }

  useEffect(() => {
    if (modalProps.isOpen) {
      lockScroll()
    } else {
      openScroll()
    }
  }, [modalProps, id])

  return {
    openModal,
    closeModal,
  }
}
