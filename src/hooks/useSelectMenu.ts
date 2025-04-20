// src/hooks/useSelectMenu.ts
import { useRecoilState } from 'recoil'
import { useEffect, useRef } from 'react'

import { SelectedMenuIndex } from '@/recoil/atoms/CommonAtom.ts'

const useSelectMenu = () => {
  const careerRef = useRef<HTMLDivElement | null>(null)
  const projectRef = useRef<HTMLDivElement | null>(null)
  const educationRef = useRef<HTMLDivElement | null>(null)

  const [_, setSelectedMenu] = useRecoilState(SelectedMenuIndex)

  const sectionRefs = [
    { ref: careerRef, index: 0 },
    { ref: projectRef, index: 1 },
    { ref: educationRef, index: 2 },
  ]

  const scrollToSection = (index: number) => {
    const section = sectionRefs.find((s) => s.index === index)?.ref.current
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setSelectedMenu(index)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (visibleEntry) {
          const found = sectionRefs.find((section) => section.ref.current === visibleEntry.target)
          if (found) {
            setSelectedMenu(found.index)
          }
        }
      },
      { threshold: 0.5 }, // 50% 이상 보여야 인식
    )

    sectionRefs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  return { careerRef, projectRef, educationRef, scrollToSection }
}

export default useSelectMenu
