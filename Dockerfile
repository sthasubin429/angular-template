FROM node:18.15

# install and cache app dependencies
COPY package.json package-lock.json ./
RUN npm ci
RUN npm install -g @angular/cli@15.2.0

# set working directory
WORKDIR /angular-template

# add app
COPY . .
