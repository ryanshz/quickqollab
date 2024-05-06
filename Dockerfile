# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and other relevant files
COPY package*.json ./
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build the React application
RUN npm run build

# Install serve to serve the app on port 3000
RUN npm install -g serve
CMD ["npm", "start"]

# Make port 3000 available outside this container
EXPOSE 3000
