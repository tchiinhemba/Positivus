# Official Node.js image
FROM node:21

# Working Directory inside container
WORKDIR /app

# Copy package.json and package-lock.json to WORKDIR (/app)
COPY package*.json ./

# Install Dependencies
RUN npm install

# Copy all files from project to WORKDIR (/app)
COPY . .

# Expose the port
EXPOSE 5173

# Command to start the application
CMD ["npm", "run", "dev"]