import fetch from 'isomorphic-fetch';
import { resolve as urlResolve } from 'url';
import { ApiUrl } from '@env';

export function buildUrl(path: string, urlBase?: string) {
  return urlResolve((urlBase || ApiUrl), path);
}

export async function handleResponse<T = null>(response: Response) {
  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(responseText);
  } else {
    try {
      return await response.json() as T;
    } catch {
      return null;
    }
  }
}

async function sendRequest<T = null>(path: string, config: RequestInit, urlBase?: string) {
  const response = await fetch(buildUrl(path, urlBase), config);

  return handleResponse<T>(response);
}

export function getRequest<T>(path: string, urlBase?: string) {
  return sendRequest<T>(path, { method: 'GET' }, urlBase);
}

export function postRequest<T>(path: string, body: any, urlBase?: string) {
  return sendRequest<T>(path, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }, urlBase);
}

export function putRequest<T>(path: string, body: any, urlBase?: string) {
  return sendRequest<T>(path, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }, urlBase);
}

export function deleteRequest<T>(path: string, urlBase?: string) {
  return sendRequest<T>(path, { method: 'DELETE' }, urlBase);
}
