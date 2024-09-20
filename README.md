# GovTech Championship App

This is a React-based web application for tracking results and managing teams in a championship setting.

Prerequisites
To run this application, ensure that the following software is installed on your machine:

Docker
Docker Compose

## Project Structure

```plaintext
Copy code
govtech-championship-app/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.tsx
│   ├── index.tsx
│   ├── ...
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## How to Run the Project

Step 1: Clone the Repository
First, you need to clone the repository to your local machine:

```bash
Copy code
git clone https://github.com/your-username/govtech-championship-app.git
cd govtech-championship-app
```

Step 2: Run the Application Using Docker Compose
With Docker and Docker Compose installed, you can easily build and run the app in a containerized environment.

Run the following command:

```bash
Copy code
docker-compose up
```

This command will build the Docker image and start the container. The app will be available at http://localhost:3000.

Step 3: Stop the Application
To stop the application, press Ctrl + C in the terminal where the docker-compose up command is running. Alternatively, you can stop the containers using:

```bash
Copy code
docker-compose down
```

This will stop and remove the containers but keep the images and volumes intact.

## Environment Variables

The app uses the following environment variables that can be modified in the docker-compose.yml or Dockerfile:

```plaintext
PORT: The port where the app is exposed (default: 3000)
NODE_ENV: Defines the environment type (default: production)
```

## Building the Image Manually (Optional)

If you want to build the Docker image manually, you can run the following commands:

Build the Docker image:

```bash
Copy code
docker build -t govtech-championship-app .
```

Run the image:

```bash
Copy code
docker run -p 3000:3000 govtech-championship-app
```

## Notes

Ensure that Docker and Docker Compose are properly installed and running on your machine before executing the commands.
The application serves the production build of the React app using a simple HTTP server (serve).
Tailwind CSS is used for styling.

I am currently also working full time as an intern an did not have time to flesh out the project very well. I hope whoever is grading this project can understand. Thank you for your time!