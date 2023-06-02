import apiClient from './apiClient';
import { AxiosResponse } from 'axios';

const postsApi = {
    getPosts: async () => {
      try {
        const res: AxiosResponse = await apiClient.get('/api/posts');
        return res
      } catch (err: any) {
        return err.response
      }
    },
    submitBookDemoForm: async (inputs) => {
      try {
        const res: AxiosResponse = await apiClient.post('/api/marketing/book-demo-form', inputs);
        return res
      } catch (err: any) {
        return err.response
      }
    },
    submitFreeTrialForm: async (inputs) => {
      try {
        const res: AxiosResponse = await apiClient.post('/api/marketing/free-trial-form', inputs);
        return res
      } catch (err: any) {
        return err.response
      }
    },
  };
  
  export default postsApi;