import 'whatwg-fetch';
import 'setimmediate';
import dotenv from 'dotenv';

dotenv.config({
    path: '.env.test'
});

jest.mock('./src/helpers/getEnvironments', () =>({
    getEnvironments: () => ({ ...process.env })
}));