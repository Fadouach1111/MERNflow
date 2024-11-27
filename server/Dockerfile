# Build Stage
FROM node:16-slim AS build

# Set the working directory
WORKDIR /app

# Copy the package files & Install dependencies
COPY package*.json ./ 
RUN npm install

# Copy backend files
COPY . .


# Production Stage
FROM node:16-slim AS production
WORKDIR /app

# Copy files from the build stage
COPY --from=build /app /app

# Expose the port
EXPOSE 5000

# Start the backend server
CMD ["npm" , "run" , "start:dev"]
