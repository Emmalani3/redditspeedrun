// src/auth/signin.js
export const CLIENT_ID = '83ovv-jVwug1M5SbctzL9A'; // <— your client_id goes here
export const REDIRECT_URI = 'https://emmalani3.github.io/redditspeedrun/auth.html';
export const SCOPES = 'read';

export function loginToReddit() {
  const state = crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
  localStorage.setItem('reddit_oauth_state', state);

  const authURL = new URL('https://www.reddit.com/api/v1/authorize');
  authURL.search = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: 'token',      // implicit flow (no secret needed)
    state,
    redirect_uri: REDIRECT_URI,
    duration: 'temporary',       // can be 'permanent' if you later add refresh
    scope: SCOPES
  }).toString();

  location.href = authURL.toString();
}
