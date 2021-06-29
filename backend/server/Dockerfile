# Uses the node base image with the latest LTS version
FROM node:16.3.0

RUN mkdir -p /usr/src/app 
RUN mkdir -p /usr/src/app/backend

WORKDIR /usr/src/app/backend

COPY package*.json ./
RUN npm install 
RUN npx prisma generate

# COPY . /usr/src/app/backend/
EXPOSE 4000

CMD ["npm", "start"]