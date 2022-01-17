# alpine has a sh shell
FROM node:12 as builder

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN chmod 755 ./entrypoint.sh

RUN ls -al

ENTRYPOINT ["./entrypoint.sh"]
