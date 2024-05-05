# Use official Node.js image as the base image for frontend build
FROM node:alpine AS build_frontend

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install frontend dependencies
RUN npm install

# Copy the entire frontend project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Use NGINX to serve the built React app
FROM nginx:alpine AS frontend

# Copy the built React app from the previous stage to the NGINX HTML directory
COPY --from=build_frontend /app/build /usr/share/nginx/html

# Expose port 80 for the frontend
EXPOSE 80

# Command to run NGINX for the frontend
CMD ["nginx", "-g", "daemon off;"]

# Stage 3: Build Flask backend
FROM python:alpine AS build_backend

# Set the working directory in the container for backend
WORKDIR /backend

# Copy the backend files to the working directory
COPY . .

# Install backend dependencies
RUN pip install -r requirements.txt

# Expose port 5000 for the Flask backend
EXPOSE 5000

# Command to run Flask backend
CMD ["python", "app.py"]
