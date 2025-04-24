FROM node:23.6.1
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 빌드 모드 ARG 추가 (기본값 production)
ARG MODE=production
ENV MODE=${MODE}

# production 모드로 빌드
RUN npm run build -- --mode $MODE

EXPOSE 5173
CMD ["npm", "start"]