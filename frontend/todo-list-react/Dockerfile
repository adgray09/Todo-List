# pull official base image
FROM node:13.12.0-alpine

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/fronted

WORKDIR /usr/src/app/frontend
# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "start"]