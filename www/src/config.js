// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "",     // CognitoClientID
  "api_base_url": "API_BASE_URL",                                     // TodoFunctionApi
  "coginto_hosted_domain": "COGNITO_HOSTED_DOMAIN",                   // CognitoDomainName
  "redirect_url": "REDIRECT_URL"                                      // AmplifyURL
};

export default config;
