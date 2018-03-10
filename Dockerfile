FROM node:8.2.1

RUN mkdir /q-a-service

WORKDIR /q-a-service

COPY . /q-a-service

RUN npm install

EXPOSE 3004

CMD ["npm", "start"]


