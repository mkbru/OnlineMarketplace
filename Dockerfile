FROM node:alpine

RUN apk add --no-cache git

RUN apk add --no-cache openssh

WORKDIR /data

RUN git clone https://github.com/mkbru/OnlineMarketplace.git /data/app

WORKDIR /data/app/OnlineMarketplace

EXPOSE 3000

RUN addgroup -S -g 123456 notrootgroup &&\
    adduser -S -u 123456 -G notrootgroup notrootuser

USER 123456:123456

ENTRYPOINT ["npm","start"]

