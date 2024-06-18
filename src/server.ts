"use server";

type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
type cache = 'default' | `force-cache` | `no-cache` | `no-store ` | `only-if-cached` | `reload`

type RequestBody = {
    [key: string]: any;
};

// Conditional type for FetchOptions to enforce body requirement
type FetchOptions<M extends Methods> = M extends 'POST' | 'PUT' | 'PATCH'
    ? {
        endpoint: string;
        method: M;
        token?: string;
        body: RequestBody;
        cash?: cache
        // Body is required for POST, PUT, PATCH
    }
    : {
        endpoint: string;
        method?: M;  // Optional method defaults to GET
        token?: string;
        cash?: cache
        body?: RequestBody;  // Body is optional for other methods
    };

const fetchData = async <M extends Methods>({ endpoint, method = 'GET', token, body }: FetchOptions<M>): Promise<any> => {
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const fetchOptions: RequestInit = {
        method,
        headers,
    };

    if (body) {
        fetchOptions.body = JSON.stringify(body);
    }

    const response = await fetch(endpoint, fetchOptions);

    return response.json();
};

export default fetchData