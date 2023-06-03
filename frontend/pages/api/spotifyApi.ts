import apiClient from './apiClient'

const SpotifyApi = {

    getMyTop: async () => {
        try {
            const res = await apiClient.get('/api/spotify/get-my-top')
            return res;
        } catch (err: any) {
            console.warn('spotifyLogin went wrong', err)
            return err;
        }
    }
}

export default SpotifyApi;