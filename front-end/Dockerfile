FROM node:16-alpine3.11

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# setup and install packages
COPY package.json /app
COPY package-lock.json /app

# install packages inside docker container
RUN npm install

# copy everything to /app
COPY . /app
