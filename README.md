# Simple React App

This project is a simple React application designed to showcase basic React features and deployment. Follow the instructions below to set up and run the app on your local development environment.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js
- npm (comes with Node.js)

## Setup Instructions

### Step 1: Clone the Repository

Clone this repository to your local machine using Git:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name


### Step 2: Install Dependencies

Navigate to the project directory and install the necessary dependencies:

npm install

### Step 3: Environment Variables

Create a new file named `.env` in the root of the project and add the following environment variables:

```
REACT_APP_BASE_URL=http://localhost:3000
```

### Step 4: Run the Application

After setting up the environment variables, start the application by running:

npm start

The application should now be running at [http://localhost:3000](http://localhost:3000).

## Build for Production

To build the application for production, run:

npm run build

This will create a `build` directory containing the compiled code. You can then deploy the contents of this directory to a web server.
