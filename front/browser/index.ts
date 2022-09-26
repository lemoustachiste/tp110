enum SERVER_METHODS {
  GET = 'GET'
}

async function request(url: string, method: SERVER_METHODS): Promise<any> {
  const data = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json());
  return data;
}

async function init (): Promise<void> {
  const data = await request('http://0.0.0.0:3333/read', SERVER_METHODS.GET);
  console.log(data);
}

init();
