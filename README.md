# Ajax
Through this facade, get all XHR events on promises or callbacks

## Which is?
The XMLHttpRequest object can be used to exchange data with a server behind the scenes. This means that it is possible to update parts of a web page without having to reload the entire page, therefore, without interrupting what the user is doing.


## Interface
```javascript
Ajax(
    url: String,
    {
        async?: boolean = true,
        body?: (ArrayBuffer | ArrayBufferView | Blob | BufferSource | Document | FormData | ReadableStream | string | URLSearchParams | null) = null,
        headers?: (Headers | { [ string: string ]: string }) = {},
        method?: ('CONNECT' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE') = 'GET',
        mimeType?: string = 'text/plain', // type/subtype;parameter=value
        password?: (string | null) = null,
        responseType?: ('Arraybuffer' | 'Blob' | 'Document' | 'JSON' | 'text') = 'text',
        timeout?: number = 0, // Time in milliseconds
        user?: (string | null) = null,
        withCredentials?: boolean = false,
        aborted?: (timestamp: bigint) => void,
        end?: (timestamp: bigint) => void,
        error?: ({readyState: 1 | 2 | 3 | 4, status: number, statusText: string, timestamp: bigint, type: string, XHR: XMLHttpRequest}) => void,
        progress?: ({lengthComputable: boolean, loaded: number, total: number, timestamp: bigint}) => void,
        readystate?: ({readyState: 1 | 2 | 3 | 4, status: number, statusText: string, timestamp: bigint}) => void,
        start?: (timestamp: bigint) => void,
        success?: ({readyState: 1 | 2 | 3 | 4, status: number, statusText: string, timestamp: bigint, getAllResponseHeaders: () => XMLHttpRequest.getAllResponseHeaders(), getResponseHeader: (header: string) => XMLHttpRequest.getResponseHeader(header), response: XMLHttpRequest.response, XHR: XMLHttpRequest}) => void,
        timeouted?: (timestamp: bigint) => void,
        XHR?: ({abort: () => XMLHttpRequest.abort(), XHR: XMLHttpRequest}) => void
    }?
): Promise<resolve(success: any), reject(error: any)>
```

