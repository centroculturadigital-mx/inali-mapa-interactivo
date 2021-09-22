FROM node:11
    

RUN mkdir /usr/src/app

COPY . /usr/src/app/

WORKDIR /usr/src/app

RUN npm install

ENV PORT=4000
EXPOSE 4000


CMD ["node", "__sapper__/build"]
