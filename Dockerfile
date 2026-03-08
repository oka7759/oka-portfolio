# 1단계: 빌드 스테이지 (Node.js 환경)
FROM node:23.6.1-alpine AS build-stage
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 빌드 모드 설정
ARG MODE=production
ENV MODE=${MODE}

# 리액트 빌드 실행 (결과물은 /app/dist 또는 /app/build에 생성됨)
RUN npm run build -- --mode $MODE

# 2단계: 실행 스테이지 (Nginx 환경)
FROM nginx:stable-alpine

# 빌드 스테이지에서 생성된 정적 파일만 Nginx의 서빙 경로로 복사
# 만약 Vite를 쓴다면 /app/dist, CRA를 쓴다면 /app/build로 수정하세요.
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Nginx 기본 설정 외에 커스텀 설정이 필요하다면 아래 주석 해제 (SPA 라우팅 대응 등)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Nginx 실행 (백그라운드가 아닌 포그라운드에서 실행해야 컨테이너가 유지됨)
CMD ["nginx", "-g", "daemon off;"]