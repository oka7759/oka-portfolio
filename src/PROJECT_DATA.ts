import { Project } from './types/common'

export const PROJECT_DETAIL_DATA: Project[] = [
  {
    id: 0,
    meta: {
      type: 0,
      img: 'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/00.png',
      name: '한국어 동영상학습 앱/웹',
      desc: '숏츠 영상으로 한국어를 공부하는 앱/웹 ',
      tags: ['웹/앱', '백엔드', '기획', '디자인'],
    },
    due: '2025.10 ~ 2025.12',
    member: '기획, 디자인, 앱, 웹, 백엔드 ',
    description: '유튜브 숏츠 영상으로 한국어를 공부하는 앱/웹 ',
    keyFeatures: ['짧은 영상 무한 추천', '단어장, 사전 기능', '퀴즈, 퍼즐 기능'],
    language: ['Flutter', 'React', 'AWS', 'GooglePlayConsole'],
    contribution: [
      {
        title: '간략한 아이디어 받아 기획, 디자인, 구현함 ',
        text: ['유튜브 숏츠같은 짧은 영상으로 한국어를 학습시키고 싶은 회사의 니즈를 실제 구현'],
      },
      {
        title: '선행 웹개발후 앱으로 확장',
        text: ['1차 적으로 웹으로 서비스를 구현후 회사의 추가 개발 요구로 앱으로 이식'],
      },
      {
        title: '단순한 숏츠 영상 외에 다양한 학습 방법 추가(퀴즈, 퍼즐)',
        text: ['한국어학습을 위해 퀴즈, 퍼즐 기능 구현'],
      },
    ],
    trouble: [
      {
        title: '개획에 없던 앱개발',
        text: ['갑작스런 앱개발이 필요한 사항', '언어부터 프레임워크까지 처음부터 학습하여 해결'],
      },
      {
        title: '중국 구형 디바이스 에러 발생',
        text: [
          '주 학생층인 중국인이 사용하는 중국산 디바이스의 다양한 오류 발생',
          '중국 개발 커뮤니티를 번역하여 해결',
        ],
      },
    ],
    images: [
      'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/00-01.png',
      'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/00-02.png',
      'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/00-03.png',
      'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/00-04.png',
      'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/00-05.png',
    ],
    urls: {
      deployment: 'https://play.google.com/store/apps/details?id=kr.co.hanzhi.hanzzy_korean',
    },
  },
  {
    id: 1,
    meta: {
      type: 0,
      img: 'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/01.png',
      name: '한국어 말하기대회 시스템',
      desc: '온라인 한국어 말하기대회 시스템 고도화 ',
      tags: ['웹', '백엔드', '기획'],
    },
    due: '2025.06 ~ 2025.8',
    member: '프론트, 백엔드 ',
    description: '한국어 음성을 녹음하고 서버에 전송후 채점, 성적표, 상장등을 제공하는 서비스',
    keyFeatures: ['음성저장', '채점 모델 api연결', '성적표, 상장 제공', '다국어 제공'],
    language: ['React', 'AWS', 'SpringBoot'],
    contribution: [
      {
        title: '학생이 녹음한 음성을 서버에 전달',
        text: ['학생이 웹에서 녹음한 파일을 mp3로 저용량 압축하여 서버에 전달'],
      },
      {
        title: '채점api에 음성 전달후 채점 결과 수신',
        text: ['음성을 STT작업후 채점모델 api에 전달하여 채점 결과를 서버에 저장'],
      },
      {
        title: '성적표, 상장 출력',
        text: ['서버의 저장된 채점 데이터로 그래프, 피드백을 생성하여 성적표, 상장을 생성'],
      },
    ],
    trouble: [
      {
        title: '고용량 음성파일을 mp3로변환시 오류',
        text: [
          '구형 디바이스에서 컨버터 라이브러리 작독 오류',
          '컨버터 라이브러리를 디바이스에 저장하여 온디바이스에서 처리 ',
        ],
      },
    ],
    images: [],
  },
  {
    id: 2,
    meta: {
      type: 0,
      img: 'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/02.png',
      name: '학원 상담, 정산, 등록 시스템 웹',
      desc: '학생의 등록상담, 선생님 배정, 급여관리 프로그램',
      tags: ['프론트', '백엔드', '기획', '디자인'],
    },
    due: '2025.11 ~ 2025.12',
    member: '프론트, 백엔드, 기획, 디자인',
    description:
      '학생의 상담부터 금액제안, 선생님 배정, 선생님 수업 관리, 정산관리등 전반적인 학원 운영 시스템',
    keyFeatures: ['학생 상담관리', '선생님 배정', '학생 평가', '선생님 급여 정산'],
    language: ['React', 'AWS', 'Springboot'],
    contribution: [
      {
        title: '오프라인 학생의 상담 시작부터 히스토리 기록',
        text: ['기존 엑셀로 관리하던 학원 직접 방문, sns상담을 시스템으로 저장'],
      },
      {
        title: '선생님 배정, 수업진행 상항 저장 기능',
        text: ['학생과 선생님 배정, 수업시 총수업 차감, 정산 처리 구현'],
      },
    ],

    images: [],
  },
  {
    id: 3,
    meta: {
      type: 0,
      img: 'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/03.png',
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
        title: 'PG 앱 연결 문제',
        text: [
          '고객사의 요구로 특정 PG사를 연동 하였으나 업데이트 대응이 늦어 일부 기능이 PG사에서 제공하는 SDK로만 간편결제를 구현 할수 없었음.',
          '신용카드와 간편결제를 모두 지원하는 웹으로 페이지를 만들어 웹뷰로 구현.',
          '단순히 SDK로 프론트에서 구현하고 데이터만 백에서 처리할수 있었으나 프론트의 고충에 마춰 백엔드에서 구현 하였고 협업의 의미와 다양한 방법으로 문제를 해결을 경험.',
        ],
      },
      {
        title: 'Kotlin -> Java , JPA -> MyBatis',
        text: [
          '고객사와 커뮤니케이션 문제로 프로젝트가 일부 진행된 사항에서 코틀린에서 자바로 프로젝트를 변경해야 했음',
          'JPA에서 마이바티스로 전환하기 위해 간편한 jpa코드를 모두 SQL로 작성함.',
        ],
      },
    ],
    images: [
      'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/03-01.png',
      'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/03-02.png',
      'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/03-03.png',
      'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/03-04.png',
    ],
    urls: {
      deployment: 'https://play.google.com/store/apps/details?id=com.misconct.parkingfriends',
    },
  },
  {
    id: 4,
    meta: {
      type: 0,
      img: 'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/04.png',
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
    images: [
      'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/04-01.png',
      'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/04-02.png',
    ],
    urls: { deployment: 'https://www.youngyangalgocare.com/' },
  },
  {
    id: 5,
    meta: {
      type: 0,
      img: 'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/05.png',
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
    images: [
      'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/05-01.png',
      'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/05-02.png',
      'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/05-03.png',
    ],
    urls: {
      deployment:
        'https://apps.apple.com/kr/developer/pracsol-inc/id1684893377?see-all=i-phonei-pad-apps',
    },
  },
  {
    id: 6,
    meta: {
      type: 0,
      img: 'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/06.png',
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
    images: [],
  },
  {
    id: 7,
    meta: {
      type: 1,
      img: 'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/07.png',
      name: '개인 포트폴리오',
      desc: '그동안 프로젝트를 정리한 포트롤리오 사이트',
      tags: ['포트폴리오', 'Docker', 'NCloud'],
    },
    due: '2025.04',
    description: '그동안 프로젝트를 정리한 포트롤리오 사이트',
    language: ['React.js', 'Docker', 'NCloud'],
    images: [],
    urls: {
      git: 'https://github.com/oka7759/oka-portfolio',
      deployment: 'https://www.oka-dev.xyz/',
    },
  },
  {
    id: 8,
    meta: {
      type: 1,
      img: 'https://oka-dev-images.s3.ap-northeast-2.amazonaws.com/08.jpg',
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
    images: [],
    urls: { git: 'https://github.com/oka7759/blog_api', deployment: 'https://blog.oka-tech.site/' },
  },
]
