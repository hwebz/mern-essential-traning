# Pull Docker Hub base image
FROM node:14-alpine

# Set working directory
WORKDIR /usr/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app to container
COPY . .

# Run the "dev" script in package.json
CMD ["npm", "run", "dev"]
