# Use Node.js for the build stage
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Use Nginx to serve the built static files
FROM nginx:alpine

# Copy the built files to Nginx's html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (standard for web servers)
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
