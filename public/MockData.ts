import {
  AboutData,
  ArchiveData,
  CareerData,
  ProjectData,
  SectionData,
  SkillData,
  SkillType,
} from '../src/types/common'

const ABOUT_ME_DATA: SectionData<AboutData[]> = {
  title: 'INTRODUCE',
  color: '#FFFFF',
  data: [
    {
      imageUrl:
        'https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg',
      title: '이름',
      icon: 'bi bi-person-square',
      content: '정억화',
    },
    {
      imageUrl:
        'https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg',
      title: '생년월일',
      icon: 'bi bi-cake2',
      content: '86.07.10',
    },
    {
      imageUrl:
        'https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg',
      title: '거주지',
      icon: 'bi bi-house-door',
      content: '경기도 수원시',
    },
    {
      imageUrl:
        'https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg',
      title: 'HP',
      icon: 'bi bi-telephone',
      content: '010-4692-7759',
    },
    {
      imageUrl:
        'https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg',
      title: 'E-Mail',
      icon: 'bi bi-envelope',
      content: 'eokhwa222@gmail.com',
    },
    {
      imageUrl:
        'https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg',
      title: '학력',
      icon: 'bi bi-mortarboard',
      content: '방송통신대 재학중\n(컴퓨터공학과)',
    },
  ],
}
const SKILLS_DATA: SectionData<SkillData[]> = {
  title: 'SKILL',
  color: '#19875440',
  data: [
    {
      type: SkillType.LANGUAGE,
      icon: 'bi bi-code',
      skill: [
        { name: 'java', color: '#007396' },
        { name: 'Kotlin', color: '#7F52FF' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'JavaScript', color: '#F7DF1E' },
      ],
    },
    {
      type: SkillType.FRONTEND,
      icon: 'bi bi-display',
      skill: [
        { name: 'ReactJs', color: '#61DAFB' },
        { name: 'NextJs', color: '#000000' },
        { name: 'Recoil', color: '#3578E5' },
        { name: 'React-Query', color: '#FF4154' },
        { name: 'HTML', color: '#E34F26' },
        { name: 'CSS', color: '#1572B6' },
        { name: 'TailWind', color: '#7F52FF' },
        { name: 'StyleComponents', color: '#DB7093' },
      ],
    },
    {
      type: SkillType.BACKEND,
      icon: 'bi bi-database',
      skill: [
        { name: 'SpringBoot', color: '#6DB33F' },
        { name: 'express', color: '#000000' },
      ],
    },
    {
      type: SkillType.ETC,
      icon: 'bi bi-cpu',
      skill: [
        { name: 'Docker', color: '#2496ED' },
        { name: 'RDB', color: '#FF9900' },
        { name: 'Git/GitHub', color: '#181717' }, // GitHub 검정
      ],
    },
  ],
}
const ARCHIVE_DATA: SectionData<ArchiveData[]> = {
  title: 'ARCHIVE',
  color: 'gray',
  data: [
    {
      imageUrl:
        'https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg',
      title: '깃허브',
      content: 'www.naver.com',
    },
    {
      imageUrl:
        'https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg',
      title: '깃허브',
      content: 'www.naver.com',
    },
    {
      imageUrl:
        'https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg',
      title: '깃허브',
      content: 'www.naver.com',
    },
  ],
}

const PROJECT_DATA: SectionData<ProjectData[]> = {
  title: 'PROJECT ',
  color: '#f5f5f5',
  data: [
    {
      title: '기술 블로그',
      date: '2025.03',
      description: 'Next.js를 이용한 blog',
      resource: 1,
      subtitle: '개인 기술 블로그',
      content: ['Next.js로 프론트앤드 구현', 'SpringBoot로 백엔드 구현'],
      url: 'https://blog.oka-tech.site/',
      stacks: [
        'TypeScript',
        'Java',
        'Next.js',
        'SpringBoot',
        'Tailwind',
        'Docker',
        'Azure',
        'MariaDB',
      ],
    },
    {
      title: '포트폴리오',
      date: '2025.01',
      description: '',
      resource: 1,
      subtitle: '포트폴리오 웹사이트',
      content: ['ReactJS로 프론트앤드 구현', 'SpringBoot로 백엔드 구현'],
      url: 'https://www.oka-tech.site/',
      stacks: ['TypeScript', 'React', 'Docker', 'Azure'],
    },
    {
      title: '파킹프렌즈 API 서버',
      date: '2024.08 ~ 2025.02',
      description: '',
      resource: 2,
      subtitle: '주차 예약 어플의 백엔드 서버를 구현하였습니다.',
      content: [
        'JAVA & SpringBoot 와 MyBatis 백엔드 구현',
        'PG연동, 결제 구현',
        '주차권별 예약 로직 구현',
      ],
      url: '',
      stacks: ['java', 'SpringBoot', 'Docker', 'MariaDB'],
    },
    {
      title: 'K-Word',
      date: '2023.09 ~ 2025.02 ',
      description: '',
      resource: 2,
      subtitle: '한국어 학습용앱',
      content: [
        '정기 결제 인앱 결제 구현',
        'TTS 생성 배치 개발',
        '콘텐츠 업로드 API 개발',
        'nodeJs & Express 서버개발',
        '이후 Kotlin & SpringBoot로 전환',
      ],
      url: 'https://play.google.com/store/apps/details?id=com.pracsol.touchlearn_eps01&hl=ko',
      stacks: ['TypeScript', 'Kotlin', 'Express', 'SpringBoot', 'Docker', 'GCP', 'MariaDB'],
    },
    {
      title: '영양관리 앱',
      date: '2024.09',
      description: '',
      resource: 2,
      subtitle: '노인대상 영양 상태, 배식 관리 앱 ',
      content: ['NextJs로 프론트엔드와 서버 Express로 서버 구현'],
      url: 'https://www.youngyangalgocare.com/login',
      stacks: ['TypeScript', 'Express', 'Docker', 'MariaDB'],
    },
    {
      title: '모임 페이',
      date: '2023.03 ~ 2024.06',
      description: '',
      resource: 2,
      subtitle: '동호회, 모임에게 회비결제, 커뮤니티 기능을 제공하는 서비스',
      content: ['Kotlin & SpringBoot로 서버를 구현', 'KCP 본인인증 연동', 'PG 결제 구현'],
      url: 'https://moimpay.com',
      stacks: ['Kotlin', 'SpringBoot', 'Thymeleaf', 'JPA', 'Docker', 'MariaDB'],
    },
  ],
}

const CAREER_DATA: SectionData<CareerData[]> = {
  title: 'Experience',
  color: 'white',
  data: [
    {
      name: '헥사베일',
      date: '2023.03 ~ 2025.02',
      role: '풀스텍 개발자',
      description: '다양한 고객사와 정부과제에 요구에 맞게 다양한 기술과 프로젝트 경험함.',
      img: '/img/logo_com_01.png',
    },
    {
      name: '메드소프트',
      date: '2020.09 ~ 2021.11',
      role: '웹 퍼블리셔',
      description:
        '학회, 학술대회, 논문제출 등 대학교, 대학원, 병원에 특화된 사이트 개발 전문으로 하는 업체에서 웹퍼블리셔로 근무함',
      img: '/img/logo_com_02.png',
    },
  ],
}

const HEADER_MENU_DATA = [
  { text: 'Introduce', code: 'Introduce' },
  { text: 'Skill', code: 'Skill' },
  { text: 'Project', code: 'Project' },
  { text: 'Experience', code: 'Experience' },
]

export { ABOUT_ME_DATA, SKILLS_DATA, ARCHIVE_DATA, PROJECT_DATA, CAREER_DATA, HEADER_MENU_DATA }
