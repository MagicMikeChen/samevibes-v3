import apiClient from '../../pages/api/apiClient';

interface User {
    username: string
}

/**
 * Dummy session context provider
 * TODO: replace with better auth context framework
 */
class Session {
    private _currentUser: User | null;
    private _token: string | null;

    constructor() {
        this._currentUser = null;
        this._token = null;
    }

    startSession(user: User, token: string) {
        this._currentUser = user;
        this._token = token;

        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    get currentUser() {
        return this._currentUser;
    }

    get token() {
        return this._token;
    }

    isValid(): boolean {
        return !!this._currentUser && !!this._token;
    }

    reset(): void {
        this._currentUser = null;
        this._token = null;
        apiClient.defaults.headers.common['Authorization'] = `Bearer `;

    }
}

const SesssionController = new Session();
export default SesssionController;