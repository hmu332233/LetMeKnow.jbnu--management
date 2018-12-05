FROM node:8
MAINTAINER minung.han <hmu332233@gmail.com>

# 앱 디렉토리 생성
RUN mkdir -p /app
WORKDIR /app

# 앱 의존성 설치
COPY package*.json ./
RUN  npm install --production

# 앱 소스 복사
COPY . .

# 포트 맵핑 및 환경변수
EXPOSE 3000
ENV NODE_ENV production

# 타임존 변경
RUN bash -c 'echo "Asia/Seoul" > /etc/timezone' && rm /etc/localtime && \
    dpkg-reconfigure -f noninteractive tzdata

CMD npm run-script start-server