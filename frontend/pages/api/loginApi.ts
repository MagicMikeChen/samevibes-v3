import apiClient from './apiClient'
import SesssionController from '../../src/utils/sessionController';

const LoginApi = {
    login: async (email, password) => {
        try {
            const res = await apiClient.post('/api/auth-token', {
                email, password
            })
            const tokens = res.data;
            SesssionController.startSession(email, tokens.access);
            return true;
        } catch (err: any) {
            console.warn('Something went wrong', err)
            console.error(`${err.response.status} ${err.response.statusText}`);
            return false;
        }
    },
    spotifyLogin: async (code) => {
        try {
            const res = await apiClient.post('/api/login-spotify', {
                code
            })
            return res;
        } catch (err: any) {
            console.warn('spotifyLogin went wrong', err)
            return err;
        }
    }
}

export default LoginApi;