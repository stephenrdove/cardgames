import fetch from 'isomorphic-fetch';
// import { join as joinPaths } from 'path';
import { resolve as urlResolve } from 'url';
import { ApiUrl } from '@env';

export function buildUrl(path: string, urlBase?: string) {
  console.log(urlBase, ApiUrl, path, urlResolve((urlBase || ApiUrl), path));

  return urlResolve((urlBase || ApiUrl), path);
}

export async function handleResponse<T>(response: Response) {
  console.log(response);

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(responseText);
  } else {
    return await response.json() as T;
  }
}

export async function getRequest<T>(path: string, urlBase?: string) {
  const response = await fetch(buildUrl(path, urlBase), {
    method: 'GET',
  });

  return handleResponse<T>(response);
}

export async function postRequest<T>(path: string, body: any, urlBase?: string) {
  const response = await fetch(buildUrl(path, urlBase), {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return handleResponse<T>(response);
}
