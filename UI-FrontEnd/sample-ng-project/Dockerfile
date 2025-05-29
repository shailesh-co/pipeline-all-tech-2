# Use Node.js image to build the Angular app
FROM node:18 AS build

WORKDIR /app
COPY . .

# Install dependencies
RUN npm install

# Build the Angular project (use the correct project name here)
RUN npm run build -- --configuration production

# Use Nginx to serve the Angular app
FROM nginx:alpine

# Replace 'sample-ng-project' with the actual Angular dist folder name (it should match project name in angular.json)
COPY --from=build /app/dist/sample-ng-project /usr/share/nginx/html/

# Optional: Use custom Nginx config if needed
# Make sure nginx.conf exists in the project folder
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
