# Use the official Node.js image with version 18 as the base image
FROM node:18.16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Build the TypeScript code
RUN npm run build

# Install a simple HTTP server to serve the static build files
RUN npm install -g serve

# Set environment variables (optional, can adjust based on your needs)
ENV PORT=3000
ENV NODE_ENV=production

# Expose the port the app will run on
EXPOSE 3000

# Start the application using 'serve'
CMD ["serve", "-s", "build", "-l", "3000"]
