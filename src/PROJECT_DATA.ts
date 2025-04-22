import { Project } from './types/common'

const POJECT_DATA: Project[] = [
  {
    meta: {
      type: 0,
      img: 'https://kr.object.ncloudstorage.com/oka-tech/images/next.png',
      name: '파킹프렌즈 앱',
      desc: '유료 주차장 예약앱 ',
      tags: ['앱', '백엔드', 'PG'],
    },
    due: '2024.08 ~ 2025.02',
    member: '프론트앤드 : 5명, 백엔드: 2인 / 본인 역활: 백엔드 50%',
    description: '가까운 주차장을 검색, 주차권 예약, 보유한 주차장 공유하는 추차앱 ',
    keyFeatures: [
      '주차장을 검색하고 주차권 구매',
      '공지사항 이벤트 게시판',
      '소셜 회원가입, 본인인증 회원가입',
    ],
    language: ['JAVA', 'SpringBoot', 'MyBatis', 'MariaDB'],
    contribution: [
      {
        title: '종일권, 시간권 등 다양한 주차권에 대한 로직 구현',
        text: ['주차권별 구매시간등을 고려하여 구매가능 시간에 노출'],
      },
      {
        title: '다양한 결제방식으로 PG연결',
        text: ['신용카드, 간편결제등으로 결제 서비스 구현 '],
      },
      {
        title: '본인인증, 소셜 아이디 회원 가입 구현',
        text: ['KCP 본인인증 연결', '소셜 아이디 콜벡 가입 구현'],
      },
    ],
    trouble: [
      {
        text: 'PG 앱 연결 문제',
        contents: [
          '고객사의 요구로 특정 PG사를 연동 하였으나 업데이트 대응이 늦어 일부 기능이 PG사에서 제공하는 SDK로만 간편결제를 구현 할수 없었음.',
          '신용카드와 간편결제를 모두 지원하는 웹으로 페이지를 만들어 웹뷰로 구현.',
          '단순히 SDK로 프론트에서 구현하고 데이터만 백에서 처리할수 있었으나 프론트의 고충에 마춰 백엔드에서 구현 하였고 협업의 의미와 다양한 방법으로 문제를 해결을 경험.',
        ],
      },
      {
        text: 'Kotlin -> Java , JPA -> MyBatis',
        contents: [
          '고객사와 커뮤니케이션 문제로 프로젝트가 일부 진행된 사항에서 코틀린에서 자바로 프로젝트를 변경해야 했음',
          'JPA에서 마이바티스로 전환하기 위해 간편한 jpa코드를 모두 SQL로 작성함.',
        ],
      },
    ],
    images: [''],
  },
  {
    meta: {
      type: 0,
      img: 'https://kr.object.ncloudstorage.com/oka-tech/images/next.png',
      name: '영양알고케어',
      desc: '독고노인, 고령자들의 식단, 건강진단을 제공하는 웹',
      tags: ['프론트', '백엔드', 'PWA'],
    },
    due: '2024.08 ~ 2024.09',
    member: '프론트앤드: 1명, 백엔드 :1명 , 본인 역활 : 프론트 100%, 백엔드 50%',
    description: '독고 노인, 센터에 소속된 노인 대상으로 영양상태를 파악하고 배식을 관리하는 PWA앱',
    keyFeatures: [
      '고객의 건강상태 설문 & 점수환산',
      '배식 식단표 제공',
      '센터, 고객 관리 관리자페이지',
    ],
    language: ['Next.js', 'Express', 'MariaDB'],
    images: [''],
    urls: { deployment: '' },
  },
  {
    meta: {
      type: 0,
      img: 'https://kr.object.ncloudstorage.com/oka-tech/images/next.png',
      name: 'K-WORD BOOST, Touch Learn',
      desc: '외국어 학습을 위한 글로벌앱',
      tags: ['백엔드', 'TTS', 'BATCH', 'Azure'],
    },
    due: '2023.09 ~ 2025.02',
    member: '프론트앤드: 1명, 백엔드 :1명 , 본인 역활 : 백엔드 100%',
    description: '글로벌 서비스중인 외국어 학습 앱',
    keyFeatures: ['인앱 원타임, 구독 결제', 'TTS 생성 배치'],
    language: ['Kotlin', 'SpringBoot', 'Azure', 'NodeJS'],
    contribution: [
      {
        title: '국가별 TTS 분기 생성 배치 구현',
        text: ['일본어, 영어, 네팔 등등 언어에 마춰 분기하여 TTS 생성'],
      },
      {
        title: '인앱 결제 페이지, 결제 API구현',
        text: ['Flutter로 인앱 페이지 구현, 각 스토어 결제데이터 구독 API 처리 로직 구현'],
      },
    ],
    remembrance: [
      '여러번에 컨셉 변경으로 장기간에 걸쳐 리펙토링 등이 이루어 졌고 그로인해 10개 이상의 앱을 등록,심사를 경험하여 앱출시에 대한 전문적인 지식을 얻음',
      '한앱에 몇천건의 음성파일을 생성하고 클라우드스토리지에 업로드, 수백건의 DB로우를 벌크로 없데이트를 구현해보고 성능개선에 대해 고민하는 경험을 함',
    ],
    images: [''],
    urls: {
      git: '',
      deployment:
        'https://apps.apple.com/kr/developer/pracsol-inc/id1684893377?see-all=i-phonei-pad-apps',
    },
  },
  {
    meta: {
      type: 0,
      img: 'https://kr.object.ncloudstorage.com/oka-tech/images/next.png',
      name: '모임페이',
      desc: '동호회의 회비결제, 커뮤니티, 회비납부 웹',
      tags: ['백엔드', '프론트', 'PG', '본인인증'],
    },
    due: '2023.03 ~ 2025.06',
    member: '프론트/백 엔드:총 2명 본인 역활 :프론트 50%, 백엔드 50%',
    description: '동호회, 모임에게 회비결제, 커뮤니티 기능을 재공하는 웹 서비스',
    keyFeatures: ['회비 결제 기능', '본인인증 회원 가입', '결제, 공지사항등 동호회 안내문자 발송'],
    language: ['Kotlin', 'SpringBoot', 'Thymeleaf'],
    contribution: [
      { title: 'KCP 본인인증 연동', text: ['KCP 본인인증으로 문자, PASS본인 인증을 구현함'] },
      {
        title: '동호회 / 모임 생성',
        text: ['모임장이 모임을 생성하고 각 모임별로 별도의 커뮤니티 게시판 생성'],
      },
      {
        title: '행정 서류 접수 기능 구현',
        text: ['각 모임의 행정등록을 위해 서류를 받아 스토리지에 업로드 기능 구현'],
      },
    ],
    remembrance: [
      '신입 개발자로 입사하여 첫 백엔드 역활을 맡아 백엔드 지식 없이 첫 프로젝트를 처음부터 끝까지 완성해보는 경험을 함',
    ],
    images: [''],
    urls: { deployment: 'https://moimpay.com' },
  },
  {
    meta: {
      type: 1,
      img: 'https://kr.object.ncloudstorage.com/oka-tech/images/next.png',
      name: '개인 포트폴리오',
      desc: '그동안 프로젝트를 정리한 포트롤리오 사이트',
      tags: ['포트폴리오', 'Docker', 'NCloud'],
    },
    due: '2025.04',
    description: '그동안 프로젝트를 정리한 포트롤리오 사이트',
    language: ['React.js', 'Docker', 'NCloud'],
    images: [''],
    urls: { git: '', deployment: 'https://www.oka-tech.site/' },
  },
  {
    meta: {
      type: 1,
      img: 'https://kr.object.ncloudstorage.com/oka-tech/images/next.png',
      name: '개인 기술블로그',
      desc: '그동안 프로젝트를 정리한 포트롤리오 사이트',
      tags: ['백엔드', '프론트', 'SSR', 'Docker', 'NCloud'],
    },
    due: '2025.03',
    description: '그동안 프로젝트를 정리한 포트롤리오 사이트',
    language: ['Nextjs', 'Docker', 'NCloud'],
    remembrance: [
      '최신 기술 앱라우팅으로 사용하고 익히는 경험을 함.',
      '클라우드 서버 환경을 구축하고 도메인과 SSL인증서를 적용하는 일련의 과정을 온전히 혼자 구축해보는 경험을 함.',
    ],
    images: [''],
    urls: { git: '', deployment: 'https://blog.oka-tech.site/' },
  },
]
