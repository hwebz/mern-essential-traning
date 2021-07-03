# Pull Docker Hub base image
FROM node:14-alpine

# Set working directory
WORKDIR /usr/app

# Install app dependencies
#RUN npm install -g nodemon
COPY package*.json .//
RUN npm install

# Copy app to container
COPY . .

# Run "dev" script in the package.json
CMD ["npm", "run", "dev"]