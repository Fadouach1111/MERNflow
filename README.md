# MERNflow: CI/CD with GitHub Actions

## Overview:
This project demonstrates the CI/CD pipeline setup for a MERN (MongoDB, Express, React, Node.js) stack application using Docker, GitHub Actions, and AWS EC2. The pipeline automates the build, test, and deployment processes, and sends email notifications on success or failure.

## Features:
- CI/CD Pipeline: Fully automated pipeline to build and deploy a MERN application.
- Dockerized Environment: Both frontend and backend are containerized using Docker for portability and consistency.
- Security Scanning: Uses Trivy to scan Docker images for vulnerabilities.
- Automated Deployment: Automatically deploys the application to AWS EC2 on push to the main branch.
- Email Notifications: Sends email notifications for successful or failed deployments.

## Prerequisites
- Docker: To build and run the containers.
- AWS EC2 Instance: To deploy the application.
- GitHub Repository Secrets: You will need to set up secrets in your GitHub repository for email configuration and AWS credentials:
  - DOCKER_USERNAME
  - DOCKER_PASSWORD
  - EMAIL_USERNAME
  - EMAIL_PASSWORD

## Screenshots
### CI/CD Pipeline: Fully automated pipeline to build and deploy a MERN application.
![Github actions job 1](https://github.com/user-attachments/assets/94e8a823-b914-4ac2-9d6e-62eb050b2ea8)
![Github actions job 2](https://github.com/user-attachments/assets/6d7fdaa5-2c95-4060-9031-d81d2d42bc26)

### Email Notifications: Sends email notifications for successful or failed deployments.
![Github actions job 3](https://github.com/user-attachments/assets/fd39da02-0230-434d-ba61-cd4d605608e5)
![success email](https://github.com/user-attachments/assets/d41b483c-9d61-4eea-a9c0-75c7963ec808)

### Dockerized Environment: Both frontend and backend are containerized using Docker for portability and consistency.
![terminal docker containers](https://github.com/user-attachments/assets/24f2527b-b59d-4d8d-938a-9e75f6442fca)
![terminal docker images](https://github.com/user-attachments/assets/3153bc55-1b86-45d4-954d-8c050ebf7d5f)

### Web Preview
![application](https://github.com/user-attachments/assets/8a49f533-8032-4369-8182-7af6fb80b435)


 

