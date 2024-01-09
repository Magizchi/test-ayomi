FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy only the package.json file to leverage Docker caching
COPY client/package*.json .

RUN npm install -force

COPY client/ .

EXPOSE 5173

CMD ["npm", "run", "dev"]
