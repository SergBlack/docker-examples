FROM node:16-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

EXPOSE 3010

# Bundle app source
COPY . .
CMD npm run start:dev

#docker run -p 8000:3010 -d -v "$(PWD)/data:/app/data" <IMAGE_ID>
