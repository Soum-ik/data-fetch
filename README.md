# data-fatch-ts

## Description
`data-fatch-ts` is a TypeScript-based library for making HTTP requests with support for different methods (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`). It simplifies fetching data from APIs by providing a unified interface for various HTTP methods and optional token-based authentication.

## Installation
To install `data-fatch-ts`, run the following command:
```bash
npm install data-fatch-ts

```
```bash
bun install data-fatch-ts

```

## Dependencies
This package does not have any external dependencies.

## Changelog

# v1.0.0

- Initial release with support for GET, POST, PUT, DELETE, and PATCH methods.

## Benefits
- **TypeScript Support**: Strong typing ensures better code quality and fewer runtime errors.
- **Unified Interface**: Simplifies HTTP requests by providing a single function to handle various methods.
- **Token-based Authentication**: Easily include authorization tokens in your requests.
- **Flexible Options**: Support for optional body and headers, making it adaptable to different API requirements.
- **Caching Control**: Allows specifying caching strategies for improved performance.

## API Doc

`fetchData`

# Parameters

- `endpoint` : `string` -  The URL endpoint to send the request to.
- `method` : `Methods` -  The HTTP method to use (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`). Default is `GET`
- `token` : `string` -  (optional) - The token for authorization (if required).
- `body` : `string` -  (optional) - The body of the request. Required for `POST`, `PUT`, and `PATCH` methods.
- `cash` : `cache` -  (optional) - The caching mode to use.

# Returns
- `Promise<any>` - A promise that resolves with the response data in JSON format.

## Usecase
Here is an example of using the fetchData function to fetch and log the length of the data:


# Simple Get Request

``` bash
import fetchData from 'data-fatch-ts';

const data = async () => {
    const endpoint = 'https://jsonplaceholder.typicode.com/todos';
    const res = await fetchData({ endpoint });
    console.log(res.length);
};

data();
```
# Post Request

``` bash 
import fetchData from 'data-fatch-ts';

const data = async () => {
    const endpoint = 'https://jsonplaceholder.typicode.com/todos';
    const body = { 'name' : 'soumik', 'email' : `01754759169`, };
    const res = await fetchData({ endpoint, method : 'POST', body });
    console.log(res.length);
}

```
when you use post request the body required 

# PUT Request

``` bash 
import fetchData from 'data-fatch-ts';

const data = async () => {
    const endpoint = 'https://jsonplaceholder.typicode.com/todos';
    const body = { 'name' : 'soumik', 'email' : `01754759169`, 'age' : '19' };
    const token = 'dsjlfjalkfjdalskdfjaskldfjklutwiueiweojflaskdjfasdfjsdfk_jsldfjskldfj' 
    const res = await fetchData({ endpoint, method : 'PUT', body, token });
    console.log(res.length);
}

```
If a token is required, you don't need to do a lot of work; just pass the token. <b> Authorization </b> and <b> Bearer </b> are already set, so you just need to pass the token.



## Recive your token

``` bash 
# extract token from headers
const extractToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (authHeader) {
        const token = authHeader.split(' ')[1]; // Assuming 'Bearer <token>'
        req.token = token; // Attach the token to the request object
    } else {
        req.token = null;
    }

    next();
};
```


## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## Maintainers
Soumik Sarkar - ```ratulsarkar216@gmail.com ```

## Like 
If you like this package, please give it a star.