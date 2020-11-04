import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolConfig = {
	UserPoolId: 'us-east-1_MPnBfPqWx',
	ClientId: 'ngb6pkjvv43q0pgt28jjhj72s',
};

export default new CognitoUserPool(poolConfig);