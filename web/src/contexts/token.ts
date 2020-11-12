// import jwtDecode from "jwt-decode";
import Cookie from "js-cookie";

export type DecodedToken = {
  readonly email: string;
  readonly exp: number;
};

export const COOKIES = { authToken: "myapp.authToken" };

export class AuthToken {
  readonly decodedToken: DecodedToken;

  constructor(readonly token?: string) {
    this.decodedToken = {
      email: "",
      exp: 0
    };

    try {
      if (token) {
      }
    } catch (e) {
      console.log(e);
    }
  }

  get authorizationString(): string {
    return `Bearer ${this.token}`;
  }

  get expiresAt(): Date {
    return new Date(this.decodedToken.exp * 1000);
  }

  get isExpired(): boolean {
    return new Date() > this.expiresAt;
  }

  get isValid(): boolean {
    return !this.isExpired;
  }

  static storeToken(token: string): void {
    Cookie.set(COOKIES.authToken, token);
  }
}
