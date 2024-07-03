import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  public getCookie(name: string): string | void {
    let cookieValue;

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${encodeURIComponent(name)}=`);

    if (parts.length === 2) cookieValue = parts.pop()?.split(';').shift();
    if (typeof cookieValue === 'string') return decodeURIComponent(cookieValue);
  }

  public setCookie(
    name: string,
    value: string,
    expires = 24 * 60 * 60,
    path = '/',
    domain = '',
    secure = false,
    sameSite: 'none' | 'lax' | 'strict' = 'strict',
  ) {
    const domainAttribute = domain === `` ? `` : `domain=${domain};`;
    const expiresCompute = new Date(Date.now() + expires);
    const expiresAttribute = expiresCompute.toUTCString();
    const SecureAttribute = secure ? 'secure;' : '';
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=${path}; ${domainAttribute} expires=${expiresAttribute}; ${SecureAttribute} samesite=${sameSite}`;
    return name;
  }
}
