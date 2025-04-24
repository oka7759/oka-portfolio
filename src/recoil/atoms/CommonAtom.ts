import { ModalPropsData } from '@/types/common'
import { atom } from 'recoil'

export const SelectedMenuIndex = atom<number>({
  key: 'SelectedMenuIndex',
  default: 0,
})

export const SelectedProjectIndex = atom<number>({
  key: 'SelectedProjectIndex',
  default: 0,
})

export const ModalProps = atom<ModalPropsData>({
  key: 'ModalProps',
  default: { id: null, isOpen: false },
})
