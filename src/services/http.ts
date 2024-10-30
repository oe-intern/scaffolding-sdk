function convertFetchResponse(response: any) {
  const data = {
    statusCode: response.status,
    ok: response.ok,
  };

  return new Promise(resolve => response.text()
    .then((res: any) => resolve({ ...data, json: response.status === 302 ? {} : parseJSON(res) }))
    .catch((error: any) => resolve({ json: error }))
  );
}

function parseJSON(response: any) {
  let data = {};

  try {
    data = JSON.parse(response && response.responseText || response);
  } catch (error) {
    data = { error };
  }

  return data;
}

export function request(endpoint: string, options?: Record<string, any>, isIgnoreErrors?: boolean): Promise<any> {
  const defaultHeaders = { 'Content-Type': 'application/json', 'Accept': 'application/json' };

  return new Promise((resolve, reject) => {
    const optionRequest = { ...options };
    optionRequest.headers = (options && options.headers) || defaultHeaders;

    fetch(endpoint, optionRequest)
      .then(convertFetchResponse)
      .then((response: any) => {
        if (response.ok || isIgnoreErrors) {
          return resolve(response.json);
        }

        return reject(response.json);
      })
      .catch((error: Record<string, any>) => {
        reject(new Error(error.message));
      });
  });
}
