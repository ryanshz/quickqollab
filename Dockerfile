# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and other relevant files
COPY package*.json ./
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the React application
CMD ["npm", "start"]
