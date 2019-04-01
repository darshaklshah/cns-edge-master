# Use base image node:latest
FROM node:latest

# Copy source code
# Copy the current directory to a new folder 'app'
COPY . /app

# Change to the working directory 'app'
WORKDIR /app

# Install dependencies
RUN npm install

# Expose API port to the outside
EXPOSE 3000

# ENV MONGODB_URL "mongodb://mongo:27017/coffeemuggers"

# Launch application
CMD ["npm","start"]
