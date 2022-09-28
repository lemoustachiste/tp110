export enum SERVER_METHODS {
  GET = 'GET'
}

export default async function request (url: string, method: SERVER_METHODS): Promise<any> {
  const data = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json());
  return data;
}
