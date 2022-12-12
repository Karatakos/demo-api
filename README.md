# Woven Demo App (API)

## Building & Testing

* Run tests: `npm test`
* Run local server: `npm start`

## Release

Simply open a Pull Request, wait for a merge and wait a couple of mins for a build / deploy cycle.

### Prerequisites

For the first release, we need to push an initial app image to the ECR repo. Follow the below steps.

## Manual Release (First Release)

For a first release, after `ResourcesStack` is created (creates ECR repo), an image needs pushing to the repo before AppStack and PipelineStack stacks can be deployed.

### Step 1. Prerequisites

Log in to AWS to get a token for ECR access replacing account and region accordingly

``` 
aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 869229378759.dkr.ecr.ap-northeast-1.amazonaws.com
```

Stack `ResourcesStack` (see CDK repo) has been deployed
 
### Step 2. Build & Verify Image

```
docker build -t 869229378759.dkr.ecr.ap-northeast-1.amazonaws.com/woven-demo-app:latest -f Dockerfile .

docker run -d -p 80:3000 869229378759.dkr.ecr.ap-northeast-1.amazonaws.com/woven-demo-app:latest
```

### Step 3. Push the container to ECR 

```
docker push 869229378759.dkr.ecr.ap-northeast-1.amazonaws.com/woven-demo-app:latest
```