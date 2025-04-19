import { useEffect, useState } from 'react'

type UseIsVisibleReturnType = [(node: HTMLElement | null) => void, boolean]

interface UseIsVisiblePropsType {
  options: {
    threshold: number // 교차점이 어느정도 보여지는지에 따라
    rootMargin: string // 어느시점부터 관찰을 시작할 것인지 기본값은 0px;
  }
  initialVisible: boolean // 관찰대상의 초기 값 보인다면 true, 보이지 않는다면 false
}
const useIsVisible = (props: UseIsVisiblePropsType): UseIsVisibleReturnType => {
  const { options, initialVisible } = props
  const [visibleRef, setVisibleRef] = useState<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(initialVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, options)

    if (visibleRef) {
      observer.observe(visibleRef)
      return
    }

    return () => {
      if (visibleRef) {
        observer.unobserve(visibleRef)
      }
    }
  }, [visibleRef])

  const setRefCallback = (node: HTMLElement | null) => {
    setVisibleRef(node)
  }

  return [setRefCallback, isVisible]
}

export default useIsVisible
