# Build Stage
FROM node:16-slim AS build

# Set the working directory
WORKDIR /app

# Copy the package files & Install dependencies
COPY package*.json ./
RUN npm install

# Copy the frontend files
COPY . .

# Build the frontend
RUN npm run build && ls -al /app/build


# Production Stage
FROM nginx:alpine

# Copy the built app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Run nginx
CMD ["nginx" , "-g" , "daemon off;"]
