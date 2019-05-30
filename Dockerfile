FROM node:alpine

RUN apk add --no-cache git
RUN apk add --no-cache openssh

WORKDIR /app

RUN git clone https://github.com/mkbru/OnlineMarketplace.git /app

RUN addgroup -S -g 123456 notrootgroup &&\
    adduser -S -u 123456 -G notrootgroup notrootuser

USER 123456:123456

EXPOSE 3000

ENTRYPOINT ["npm","start"]

