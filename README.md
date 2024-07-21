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

    ```bash
 npm run dev

 #then visit URL: http://localhost:8080/

    ```

## Acess the Resume

You can acess the resume using the url here: [resume](https://europe-west2-my-site-1473725610848.cloudfunctions.net/cloud-resume "url").

## CI/CD

A github action workflow is included in the project to auto deploy/update the cloud function whenever new changes are introduced to the code.

For the github action, add GCP_PROJECT_ID and GCP_SERVICE_ACCOUNT_KEY as repository secrets in order not to expose the sensitive data in the repository/code.

## SERVICE ACCOUNT ROLES

The service account being used for deployment should have the required run.services.setIamPolicy permission on the specified resource. This permission is necessary to set IAM policies for Google Cloud Functions, which is part of the deployment process.

The roles typically required for deploying a Google Cloud Function include:

- Cloud Functions Developer (roles/cloudfunctions.developer)
- Cloud Run Admin (roles/run.admin)
- IAM Service Account User (roles/iam.serviceAccountUser)

Assign these roles to the service account using the Google Cloud Console or the gcloud command-line tool.

### Using Google Cloud Console

<ol>
<li>Go to the IAM & Admin page in the Google Cloud Console.</li>
<li>Find your service account in the list.</li>
<li>Click on the pencil icon to edit the roles for the service account.</li>
<li>Click on "Add another role" and add the following roles:
<ul>
 <li>Cloud Functions Developer</li>
 <li>Cloud Run Admin</li>
 <li>IAM Service Account User</li>

</li>
</ol>
### Using gcloud Command-Line Tool

You can also use the gcloud command-line tool to assign these roles to the service account:

    ```bash
#Replace YOUR_PROJECT_ID and YOUR_SERVICE_ACCOUNT_EMAIL with your details

PROJECT_ID="YOUR_PROJECT_ID"
SERVICE_ACCOUNT_EMAIL="YOUR_SERVICE_ACCOUNT_EMAIL"

#Add Cloud Functions Developer role

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member "serviceAccount:$SERVICE_ACCOUNT_EMAIL" \
  --role "roles/cloudfunctions.developer"

# Add Cloud Run Admin role

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member "serviceAccount:$SERVICE_ACCOUNT_EMAIL" \
  --role "roles/run.admin"

# Add IAM Service Account User role

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member "serviceAccount:$SERVICE_ACCOUNT_EMAIL" \
  --role "roles/iam.serviceAccountUser"

    ```

***PS*** I wrote an article on the things i learnt in this challenge, you can read it here [Article](https://dev.to/instanceofgod/cloud-resume-api-challenge-with-gcp-c1j "url")