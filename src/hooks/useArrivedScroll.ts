import { useEffect, useRef, useState } from 'react'

export function useArrivedScroll() {
  const scrollRef = useRef<HTMLDivElement>(null) // 추적할 DOM 요소
  const [scrollEl, setScrollEl] = useState(false) // 요소가 특정 위치에 도달했는지를 나타내는 상태

  const yScrollEvent = () => {
    const scroll = scrollRef.current?.getBoundingClientRect() // 요소의 뷰포트 내 위치 계산
    if (scroll) {
      setScrollEl(scroll.top <= 500) // top이 500px 이하이면 true로 설정
    }
  }

  useEffect(() => {
    if (!scrollRef.current) return // 요소가 아직 안 잡혀있으면 리턴
    window.addEventListener('scroll', yScrollEvent) // 스크롤 이벤트 리스너 등록
    return () => {
      window.removeEventListener('scroll', yScrollEvent) // 언마운트 시 리스너 제거
    }
  }, [scrollEl]) // 상태가 변할 때마다 다시 effect 실행 (약간 비효율적)

  return { scrollRef, scrollEl } // 외부에서 사용 가능하도록 반환
}
