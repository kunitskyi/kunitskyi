import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  public getCookie(name: string): string | undefined | void {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
  }

  public setCookie(
    name: string,
    value: string,
    expires = 24 * 60 * 60,
    path = '/',
    domain = '',
    secure = false,
    samesite: 'none' | 'lax' | 'strict' = 'strict',
  ) {
    const domainAttribute = domain === `` ? `` : `domain=${domain};`;
    const expiresCompute = new Date(Date.now() + expires);
    const expiresAttribute = expiresCompute.toUTCString();
    const SecureAttribute = secure ? 'secure;' : '';
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=${path}; ${domainAttribute} expires=${expiresAttribute}; ${SecureAttribute} samesite=${samesite}`;
    return name;
  }
}
