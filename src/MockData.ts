import {
  InterviewData,
  SkillData,
  CareerData,
  ProjectData,
  EduData,
  SideBtnData,
} from '@/types/common'

const SKILL_DATA: SkillData[] = [
  { position: 'Front-End', skill: ['JS', 'TS', 'REACT_JS', 'NEXT_JS', 'HTML', 'CSS', 'TAILWIND'] },
  { position: 'Back-End', skill: ['JAVA', 'SPRING_BOOT', 'MARIADB'] },
  { position: 'Tool', skill: ['DOCKER', 'VSCODE', 'INTELLIJ'] },
]

const INTERVIEW_DATA: InterviewData[] = [
  {
    question: '퍼블리셔에서 개발자로 전향한 이유?',
    answer:
      '웹퍼블리셔로 일하면서 UI에 대한 이해를 쌓았고, 이를 기반으로 더 깊이 있는 기능 구현과 창의적인 문제 해결에 매력을 느껴 개발자로 전향하게 되었습니다.',
  },
  {
    question: '퍼블리셔 경험이 개발에 어떻게 도움이 되었나?',
    answer:
      'UI/UX에 대한 이해도가 높아 사용자 중심의 개발에 강점을 가지고 있습니다. 디자이너와의 소통도 원활해, 협업 과정에서 발생하는 시행착오를 줄이는 데 큰 도움이 되었습니다.',
  },
  {
    question: '개발자로 전향하면서 가장 어려웠던 점은 무엇인가?',
    answer:
      '시각적 결과가 바로 보이던 퍼블리싱과 달리, 개발은 논리 구조와 디버깅에 많은 시간이 소요되어 처음에는 어려웠지만, 점차 문제를 해결해 나가는 과정에서 큰 성취감을 느꼈습니다.',
  },
]

const CAREER_DATA: CareerData[] = [
  {
    due: '2023-03 ~ 2025-02',
    name: 'Hexaveil',
    position: 'Fullstack Developer',
    working: [
      '고객사의 다양한 요구에 맞춰 여러 개발 환경과 언어로 프로젝트를 수행',
      '개발부터 배포까지 전 과정을 경험',
      '기획자, 디자이너, 고객사와의 원활한 커뮤니케이션을 통해 프로젝트를 개발',
      '자사 및 다수의 외부 프로젝트 유지보수 경험',
    ],
    skills: ['JAVA', 'SPRING_BOOT', 'JS', 'TS', 'REACT_JS', 'NEXT_JS', 'DOCKER'],
  },
  {
    due: '2020-09 ~ 2021-11',
    name: 'MedSoft',
    position: 'Web Publisher',
    working: [
      '다수의 학회, 학술대회 UX/UI를 구현함',
      '클라이언트와 직접 소통하고 응대하여 프로젝트를 완성',
    ],
    skills: ['HTML', 'CSS', 'JS'],
  },
]

const EDU_DATA: EduData[] = [
  {
    due: '2025년 3월 ~',
    name: '한국방송통신대학 ',
    disc: '컴퓨터 과학과 3학년 ',
    skills: [],
  },
  {
    due: '2022-06 ~ 2022-09',
    name: '위코드 부트캠프',
    disc: '프론트엔드 개발자 교육과정',
    skills: ['JS', 'REACT_JS'],
  },
  {
    due: '2019-12 ~ 2020-06',
    name: '이젠컴퓨터아카데미',
    disc: '웹 UI/UX 콘텐츠 디자인 교육과정',
    skills: ['HTML', 'CSS', 'JS'],
  },
]

const PROJECT_DATA: ProjectData[] = [
  {
    type: 0,
    img: 'https://kr.object.ncloudstorage.com/oka-tech/images/next.png',
    name: '파킹프렌즈 앱',
    desc: '유료 주차장 예약앱',
    tags: ['앱', '백엔드', 'PG'],
  },
  {
    type: 0,
    img: 'https://kr.object.ncloudstorage.com/oka-tech/images/next.png',
    name: '영양알고케어',
    desc: '독고노인, 고령자들의 식단, 건강진단을 제공하는 웹',
    tags: ['프론트', '백엔드', 'PWA'],
  },
  {
    type: 0,
    img: 'https://kr.object.ncloudstorage.com/oka-tech/images/next.png',
    name: 'K-WORD BOOST, Touch Learn',
    desc: '외국어 학습을 위한 글로벌앱',
    tags: ['백엔드', 'TTS', 'BATCH', 'Azure'],
  },
  {
    type: 0,
    img: 'https://kr.object.ncloudstorage.com/oka-tech/images/next.png',
    name: '모임페이',
    desc: '동호회의 회비결제, 커뮤니티, 회비납부 웹',
    tags: ['백엔드', '프론트', 'PG', '본인인증'],
  },
  {
    type: 1,
    img: 'https://kr.object.ncloudstorage.com/oka-tech/images/next.png',
    name: '개인 포트폴리오',
    desc: '그동안 프로젝트를 정리한 포트롤리오 사이트',
    tags: ['포트폴리오', 'Docker', 'NCloud'],
  },
  {
    type: 1,
    img: 'https://kr.object.ncloudstorage.com/oka-tech/images/next.png',
    name: '개인 기술블로그',
    desc: '그동안 프로젝트를 정리한 포트롤리오 사이트',
    tags: ['백엔드', '프론트', 'SSR', 'Docker', 'NCloud'],
  },
]

const SIDE_BUTTON_DATA: SideBtnData[] = [
  {
    icon: 'bi bi-envelope-fill',
    tooltipText: '이메일 복사',
    tooltipId: 'emailBtn',
    actionKey: 'copyEmail',
    link: 'eokhwa222@gmail.com',
  },
  {
    icon: 'bi bi-github',
    tooltipText: '깃헙 이동',
    tooltipId: 'gitBtn',
    actionKey: 'goToGithub',
    link: 'https://github.com/oka7759',
  },
  {
    icon: 'bi bi-chevron-bar-up',
    tooltipText: '위로 이동',
    tooltipId: 'topBtn',
    actionKey: 'goToTop',
    link: '',
  },
]

export { SKILL_DATA, INTERVIEW_DATA, CAREER_DATA, PROJECT_DATA, EDU_DATA, SIDE_BUTTON_DATA }
