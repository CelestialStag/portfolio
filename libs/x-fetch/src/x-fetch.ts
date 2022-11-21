import FormData from 'form-data';
import fetch from 'cross-fetch';

export type HTTPMethodType = 'post' | 'get' | 'patch' | 'put' | 'delete';

export type HTTPStatusCodes = 200 | 201 | 204 | 400 | 401 | 404 | 500;

type FetchPayload = { [x: string | number]: string | number | FetchPayload };

export type GetParams<K> = {
  parameters?: FetchPayload | K;
  headers?: { [key: string]: string | number };
};

export type PostParams<K> = GetParams<K> & {
  body?: string | FetchPayload | K;
  formData?: FetchPayload | K;
};

export type XFetchParams<K = unknown> = PostParams<K> & {
  method?: HTTPMethodType;
};

export type FetchClient = ReturnType<(options: XFetchParams) => Promise<Response>>;

export type FetchResponse<T> = Promise<Response & { json: Promise<T> }>;

export type XFetchConfig = {
  protocol?: 'http' | 'https';

  base_url: string;
  base_path?: string;

  api_key?: string;
  api_version?: string;
};

export class XFetch {
  private readonly protocol: 'http' | 'https';

  private readonly base_url: string;
  private readonly base_path?: string;

  private readonly api_key?: string;
  private readonly api_version?: string;

  private readonly api_url: string;

  constructor(private readonly config: XFetchConfig) {
    this.protocol = config.protocol ?? 'https';

    this.base_url = config.base_url;
    this.base_path = config.base_path;

    this.api_key = config.api_key;
    this.api_version = config.api_version;

    this.api_url = [`${this.protocol}://${this.base_url}`, this.base_path, this.api_version]
      .filter((x) => !!x)
      .join('/');
  }

  public fetch = async <T = unknown, K = unknown>(
    path: string,
    { method, headers, body, formData, parameters = {} }: XFetchParams<K> = {},
  ) => {
    const formPayload = new FormData();

    if (formData) {
      Object.keys(formData).forEach((key) => {
        formPayload.append(key, formData[key]);
      });
    }

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
          ...(this.api_key ? { Authorization: `Basic ${this.api_key}` } : {}),
          ...(headers ? headers : {}),
        },
        body: formData
          ? (formPayload as unknown as BodyInit)
          : body
          ? typeof body === 'string'
            ? body
            : JSON.stringify(body)
          : undefined,
      },
    ) as FetchResponse<T>);

    return data;
  };

  post = async <T, K = unknown, R = unknown>(
    path: string,
    { headers, parameters, body, formData }: PostParams<K> = {},
  ): Promise<
    { ok: true; data: T; error: null } | { ok: false; data: null | T | R; error: string; status: HTTPStatusCodes }
  > => {
    const data = await this.fetch<T>(path, { method: 'post', headers, parameters, body, formData });

    if (data.ok)
      return {
        ok: true,
        data: await (async () => {
          try {
            return (await data.clone().json()) || null;
          } catch {
            try {
              return (await data.clone().text()) || null;
            } catch {
              return null;
            }
          }
        })(),
        error: null,
      };
    return {
      ok: false,
      data: await (async () => {
        try {
          return (await data.clone().json()) || null;
        } catch {
          try {
            return (await data.clone().text()) || null;
          } catch {
            return null;
          }
        }
      })(),
      error: data.statusText,
      status: data.status as HTTPStatusCodes,
    };
  };

  public get = async <T, K = unknown, R = unknown>(
    path: string,
    { headers, parameters }: GetParams<K> = {},
  ): Promise<
    { ok: true; data: T; error: null } | { ok: false; data: null | T | R; error: string; status: HTTPStatusCodes }
  > => {
    const data = await this.fetch<T>(path, { method: 'get', headers, parameters });
    if (data.ok)
      return {
        ok: true,
        data: await (async () => {
          try {
            return (await data.clone().json()) || null;
          } catch {
            try {
              return (await data.clone().text()) || null;
            } catch {
              return null;
            }
          }
        })(),
        error: null,
      };
    return {
      ok: false,
      data: await (async () => {
        try {
          return (await data.clone().json()) || null;
        } catch {
          try {
            return (await data.clone().text()) || null;
          } catch {
            return null;
          }
        }
      })(),
      error: data.statusText,
      status: data.status as HTTPStatusCodes,
    };
  };

  patch = async <T, K = unknown, R = unknown>(
    path: string,
    { headers, parameters, body, formData }: PostParams<K> = {},
  ): Promise<
    { ok: true; data: T; error: null } | { ok: false; data: null | T | R; error: string; status: HTTPStatusCodes }
  > => {
    const data = await this.fetch<T>(path, { method: 'patch', headers, parameters, body, formData });
    if (data.ok)
      return {
        ok: true,
        data: await (async () => {
          try {
            return (await data.clone().json()) || null;
          } catch {
            try {
              return (await data.clone().text()) || null;
            } catch {
              return null;
            }
          }
        })(),
        error: null,
      };
    return {
      ok: false,
      data: await (async () => {
        try {
          return (await data.clone().json()) || null;
        } catch {
          try {
            return (await data.clone().text()) || null;
          } catch {
            return null;
          }
        }
      })(),
      error: data.statusText,
      status: data.status as HTTPStatusCodes,
    };
  };

  delete = async <T, K = unknown, R = unknown>(
    path: string,
    { headers, parameters }: GetParams<K> = {},
  ): Promise<
    { ok: true; data: T; error: null } | { ok: false; data: null | T | R; error: string; status: HTTPStatusCodes }
  > => {
    const data = await this.fetch<T>(path, { method: 'delete', headers, parameters });
    if (data.ok)
      return {
        ok: true,
        data: await (async () => {
          try {
            return (await data.clone().json()) || null;
          } catch {
            try {
              return (await data.clone().text()) || null;
            } catch {
              return null;
            }
          }
        })(),
        error: null,
      };
    return {
      ok: false,
      data: await (async () => {
        try {
          return (await data.clone().json()) || null;
        } catch {
          try {
            return (await data.clone().text()) || null;
          } catch {
            return null;
          }
        }
      })(),
      error: data.statusText,
      status: data.status as HTTPStatusCodes,
    };
  };
}
