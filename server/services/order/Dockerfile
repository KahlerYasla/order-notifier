# base image
FROM node:16.3.0-alpine3.11
WORKDIR /service
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3005
CMD ["npm", "start"]