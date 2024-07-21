#!/bin/bash

 gcloud functions deploy cloud-resume \
            --region europe-west2 \
            --runtime nodejs20 \
            --trigger-http \
            --allow-unauthenticated \
            --entry-point resume \
            --source . \
            --update-env-vars PROJECT_ID=$PROJECT_ID


