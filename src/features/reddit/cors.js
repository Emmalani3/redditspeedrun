// src/lib/reddit.js
export function getRedditToken() {
  return localStorage.getItem('reddit_access_token');
}

export async function redditFetch(pathWithQuery) {
  const token = getRedditToken();
  if (!token) throw new Error('Not signed in');

  const res = await fetch(`https://oauth.reddit.com${pathWithQuery}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    // optional: if token expired, clear it so UI shows "Sign in" again
    if (res.status === 401) localStorage.removeItem('reddit_access_token');
    throw new Error(`Reddit error ${res.status}`);
  }
  return res.json();
}
