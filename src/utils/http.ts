import axios, { AxiosError } from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:9090' || '/',
  withCredentials: true
});

const errorhandler = (err: AxiosError) => {
  if (err?.response?.status === 401) {
    // history.push(`/login?origin=${window.location.pathname}`);
  }

  throw err;
};

const get = <ResponseBody>(
  url: string,
  abortSignal?: AbortSignal
): Promise<ResponseBody> =>
  client
    .get(url, { signal: abortSignal })
    .then((response) => {
      return response.data as unknown as ResponseBody;
    })
    .catch(errorhandler);

const post = <ResponseBody>(
  url: string,
  payload: Record<string, unknown>,
  abortSignal?: AbortSignal
): Promise<ResponseBody> =>
  client
    .post(url, payload, { signal: abortSignal })
    .then((response) => {
      return response.data as unknown as ResponseBody;
    })
    .catch(errorhandler);

const put = <ResponseBody>(
  url: string,
  payload: Record<string, unknown>
): Promise<ResponseBody> =>
  client
    .put(url, payload)
    .then((response) => {
      return response.data as unknown as ResponseBody;
    })
    .catch(errorhandler);

const del = <ResponseBody>(
  url: string,
  payload: any
): Promise<ResponseBody> =>
  client
    .delete(url, payload)
    .then((response) => {
      return response.data as unknown as ResponseBody;
    })
    .catch(errorhandler);

const http = {
  get,
  post,
  put,
  del
};

export default http;
