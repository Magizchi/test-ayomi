FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy only the package.json file to leverage Docker caching
COPY client/package.json .

RUN npm install

COPY client/ .

EXPOSE 5173

CMD ["npm", "run", "dev"]
