# Use Node.js LTS version as base image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your backend code
COPY . .

# Expose port (same as in .env or app.js)
EXPOSE 5000

# Start the server
CMD ["node", "app.js"]
