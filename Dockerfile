# Use the official Deno image as the base image
FROM denoland/deno

# Set the working directory inside the container
WORKDIR /app

# Install Java
RUN apt-get update && \
  apt-get install -y openjdk-17-jdk && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

# Copy the entire project to the working directory
COPY . .

# Expose the port your application runs on
EXPOSE 3000

# Set the default command to run your application
CMD ["task", "start"]

