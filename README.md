# Cloud Resume Challenge

## Overview

A Challenge project to build and deploy a serverless API using Google Cloud Functions and Firestore, integrated with GitHub Actions.

## Primary Goal

The primary goal of the challege is to construct an API that can serve resume data in JSON format.

Challenge Reference website: <https://www.cloudresumeapi.dev>

## GCP API/Services Used

    - Cloud Function
    - Cloud Firestore

## Technologies Used

- Language: JavaScript/Typescript
- Runtime: Nodejs

## Getting Started: How to Setup the Application

Clone the repository and navigate to the project directory.
Install dependencies with npm

```bash
   git clone https://github.com/nielvid/cloud-resume-challenge.git
   cd cloud-resume-challenge
   npm install
```

## Environment Variables

Create a .env file in the root of the project and supply the following variables.

- A .env.sample file is included to guide you to create your .env file

### Required Variables

- PROJECT_ID: the GCP project id where the services are deployed

### Optional Variables

- GOOGLE_APPLICATION_CREDENTIALS: path to you GCP service account key
You can add GOOGLE_APPLICATION_CREDENTIALS as env to the shell where you will run the project. This is optional

    ```sh
    export OOGLE_APPLICATION_CREDENTIALS='path/to/service_acount.json'
    ```

## Local Development: Run locally or in development

Start the server:

```sh
 npm run dev

 # then visit URL: http://localhost:8080/

```

## Acess the Resume

You can acess the resume using the url here: [resume](https://europe-west2-my-site-1473725610848.cloudfunctions.net/cloud-resume "url").

## CI/CD

A github action workflow is included in the project to auto deploy/update the cloud function whenever new changes are introduced to the code.

For the github action, add GCP_SERVICE_ACCOUNT_KEY and GCP_SERVICE_ACCOUNT_KEY as repository secrets in order not to expose the sensitive data in the repository/code.
