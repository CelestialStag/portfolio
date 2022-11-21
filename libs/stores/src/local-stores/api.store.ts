import { ObservableMap, action, makeObservable, observable } from 'mobx';
import FormData from 'form-data';
import fetch from 'cross-fetch';

import { web_config } from '@lib/config';

import { BaseRootStore } from '..';

export type HTTPMethodType = 'post' | 'get' | 'patch' | 'put' | 'delete';

export type HTTPStatusCodes = 200 | 201 | 204 | 400 | 401 | 404 | 500;

export type GetParams<K> = {
  parameters?: { [x: string]: string | number | object } | K;
  headers?: { [key: string]: string | number };
};

export type PostParams<K> = GetParams<K> & {
  body?: { [key: string]: string | number | null } | K;
  formData?: { [key: string]: string | number | null } | K;
};

export type FetchOptions<K = unknown> = PostParams<K> & {
  method?: HTTPMethodType;
  customError?: boolean;
};

export type FetchClient = ReturnType<(options: FetchOptions) => Promise<Response>>;

export type FetchResponse<T> = Promise<Response & { json: Promise<T> }>;

export class Api {
  private readonly base_url: string =
    web_config.env === 'development' ? `localhost:${web_config.api_port}` : web_config.api_host;
  private readonly api_version = web_config.api_version ?? 'v1';
  public readonly api_protocol: string = web_config.env === 'development' ? 'http://' : 'https://';
  public readonly api_url: string;

  @observable loading: ObservableMap<string, boolean>;

  constructor(private readonly rootStore: BaseRootStore, readonly config?: FetchOptions) {
    makeObservable(this);
    this.api_url = [`${this.api_protocol}${this.base_url}`, 'api', this.api_version].join('/');
    this.loading = new ObservableMap();
  }

  @action isLoading = (id: string) => this.loading.get(id);

  @action toggleLoading = (id: string) => this.loading.set(id, !this.loading.get(id)).get(id);

  @action fetch = async <T = unknown, K = unknown>(
    path: string,
    { method, headers, body, formData, parameters = {}, customError = false }: FetchOptions<K> = {},
  ) => {
    const formPayload = new FormData();

    if (formData) {
      Object.keys(formData).forEach((key) => {
        formPayload.append(key, formData[key]);
      });
    }

    this.toggleLoading(path);
    const data = await (fetch(
      parameters && Object.keys(parameters).length > 0
        ? [
            [this.api_url, path].join('/'),
            Object.keys(parameters)
              .map((x) => [x, parameters[x]].join('='))
              .join('&'),
          ].join('?')
        : [this.api_url, path].join('/'),
      {
        method: method?.toUpperCase() ?? 'GET',
        headers: {
          ...(formData ? {} : { 'content-type': 'application/json' }),
          ...(this.rootStore.session.session_token
            ? { Authorization: `Basic ${this.rootStore.session.session_token}` }
            : {}),
          ...(headers ? headers : {}),
        },
        body: formData ? (formPayload as unknown as BodyInit) : body ? JSON.stringify(body) : undefined,
      },
    ) as FetchResponse<T>);
    this.toggleLoading(path);

    if (customError) {
      // if (data.status === 200) this.rootStore.toast.createToast(`Success: Ok`, 'success');
      // if (data.status === 201) this.rootStore.toast.createToast(`Success: Created`, 'success');
      // if (data.status === 400) this.rootStore.toast.createToast(`Error: Bad Request`, 'error');
      // if (data.status === 401) this.rootStore.toast.createToast(`Error: Unauthorized`, 'error');
      // if (data.status === 500) this.rootStore.toast.createToast(`Error: Internal Server Error`, 'error');
    }

    return data;
  };

  @action get = async <T, K = unknown>(
    path: string,
    { headers, parameters }: GetParams<K> = {},
  ): Promise<
    { ok: true; data: T; error: null } | { ok: false; data: null | T; error: string; status: HTTPStatusCodes }
  > => {
    const data = await this.fetch<T>(path, { method: 'get', headers, parameters });
    if (data.ok)
      return {
        ok: true,
        data: await (async () => {
          try {
            return (await data.json()) || null;
          } catch {
            return null;
          }
        })(),
        error: null,
      };
    return {
      ok: false,
      data: await (async () => {
        try {
          return (await data.json()) || null;
        } catch {
          return null;
        }
      })(),
      error: data.statusText,
      status: data.status as HTTPStatusCodes,
    };
  };

  @action post = async <T, K = unknown>(
    path: string,
    { headers, parameters, body, formData }: PostParams<K> = {},
  ): Promise<
    { ok: true; data: T; error: null } | { ok: false; data: null | T; error: string; status: HTTPStatusCodes }
  > => {
    const data = await this.fetch<T>(path, { method: 'post', headers, parameters, body, formData });
    if (data.ok)
      return {
        ok: true,
        data: await (async () => {
          try {
            return (await data.json()) || null;
          } catch {
            return null;
          }
        })(),
        error: null,
      };
    return {
      ok: false,
      data: await (async () => {
        try {
          return (await data.json()) || null;
        } catch {
          return null;
        }
      })(),
      error: data.statusText,
      status: data.status as HTTPStatusCodes,
    };
  };

  @action patch = async <T, K = unknown>(
    path: string,
    { headers, parameters, body, formData }: PostParams<K> = {},
  ): Promise<
    { ok: true; data: T; error: null } | { ok: false; data: null | T; error: string; status: HTTPStatusCodes }
  > => {
    const data = await this.fetch<T>(path, { method: 'patch', headers, parameters, body, formData });
    if (data.ok)
      return {
        ok: true,
        data: await (async () => {
          try {
            return (await data.json()) || null;
          } catch {
            return null;
          }
        })(),
        error: null,
      };
    return {
      ok: false,
      data: await (async () => {
        try {
          return (await data.json()) || null;
        } catch {
          return null;
        }
      })(),
      error: data.statusText,
      status: data.status as HTTPStatusCodes,
    };
  };

  @action delete = async <T, K = unknown>(
    path: string,
    { headers, parameters }: GetParams<K> = {},
  ): Promise<
    { ok: true; data: T; error: null } | { ok: false; data: null | T; error: string; status: HTTPStatusCodes }
  > => {
    const data = await this.fetch<T>(path, { method: 'delete', headers, parameters });
    if (data.ok)
      return {
        ok: true,
        data: await (async () => {
          try {
            return (await data.json()) || null;
          } catch {
            return null;
          }
        })(),
        error: null,
      };
    return {
      ok: false,
      data: await (async () => {
        try {
          return (await data.json()) || null;
        } catch {
          return null;
        }
      })(),
      error: data.statusText,
      status: data.status as HTTPStatusCodes,
    };
  };
}
