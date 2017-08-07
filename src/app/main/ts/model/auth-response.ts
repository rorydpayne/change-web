import {Serializable} from "./serializable";

export class AuthResponse implements Serializable<AuthResponse> {
    private accessToken: string;
    private tokenType: string;
    private refreshToken: string;
    private expiresIn: number;
    private scope: string;

    constructor() { }

    getAccessToken(): string {
        return this.accessToken;
    }

    getTokenType(): string {
        return this.tokenType;
    }

    getRefreshToken(): string {
        return this.refreshToken;
    }

    getExpiresIn(): number {
        return this.expiresIn;
    }

    getScope(): string {
        return this.scope;
    }

    serialize(): Object {
        let output = {};
        output['access_token'] = this.accessToken;
        output['token_type'] = this.tokenType;
        output['refresh_token'] = this.refreshToken;
        output['expires_in'] = this.expiresIn;
        output['scope'] = this.scope;
        return output;
    }

    deserialize(input: Object): AuthResponse {
        this.accessToken = input['access_token'];
        this.tokenType = input['token_type'];
        this.refreshToken = input['refresh_token'];
        this.expiresIn = +input['expires_in'];
        this.scope = input['scope'];
        return this;
    }
}
