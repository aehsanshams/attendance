# Use the official Node.js image as a base image
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json from content path
COPY content/package.json content/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code from the content path
COPY content/ ./

# Expose port 5173 (default Vite dev server port)
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]
