# base image
FROM node:16-alpine
WORKDIR /service
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3004
CMD ["npm", "start"]