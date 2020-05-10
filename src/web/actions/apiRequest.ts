import fetch from 'isomorphic-fetch';
import { join as joinPaths } from 'path';
import { resolve as urlResolve } from 'url';
import { ApiUrl } from '@env';

export function buildUrl(path: string, urlBase?: string) {
  console.log(urlBase, ApiUrl, path, joinPaths((urlBase || ApiUrl), path));
  
  return joinPaths((urlBase || ApiUrl), path);
}

export async function handleResponse(response: Response) {
  console.log(response);

  if (!response.ok) {
    const responseText = await response.text();
    alert(`Something went wrong. Response: ${responseText}`); // TODO: add real error handling
  }
}

export async function getRequest<T>(path: string, urlBase?: string) {
  const response = await fetch(buildUrl(path, urlBase), {
    method: 'GET',
  });

  await handleResponse(response);

  return await response.json() as T;
}

export async function postRequest<T>(path: string, body: any, urlBase?: string) {
  const response = await fetch(buildUrl(path, urlBase), {
    method: 'POST',
    body,
  });

  await handleResponse(response);

  return await response.json() as T;
}
