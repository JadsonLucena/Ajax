function Ajax(url, {
    async = true,
    body = null,
    headers = {},
    method = 'GET',
    mimeType = 'text/plain',
    password = null,
    responseType = 'text',
    user = null,
    aborted = e => console.log('aborted', e),
    end = e => console.log('end', e),
    error = e => console.log('error', e),
    readystate = e => console.log('readystate', e),
    start = e => console.log('start', e),
    success = e => console.log('success', e),
    XHR = e => console.log('XHR', e)
} = {}) {

    let xhr = new XMLHttpRequest();

    xhr.open(method, url, async, user, password);

    headers = new Headers(headers);
    for (let header of headers.keys()) {

        xhr.setRequestHeader(header, headers.get(header));

    }

    xhr.overrideMimeType(mimeType);

    xhr.responseType = responseType;

    xhr.onloadend = e => end(e.timeStamp);

    xhr.onloadstart = e => start(e.timeStamp);

    let _state = e => ({ readyState: xhr.readyState, status: xhr.status, statusText: xhr.statusText, timeStamp: e.timeStamp });

    xhr.onreadystatechange = e => readystate(_state(e));

    xhr.send(body);

    let _success = e => ({ ..._state(e), getAllResponseHeaders: () => xhr.getAllResponseHeaders(), getResponseHeader: (header) => xhr.getResponseHeader(header), response: xhr.response, XHR: xhr }),
        _error = e =>   ({ ..._state(e), type: e.type, XHR: xhr });

    xhr.onabort = e => { aborted(e.timeStamp); };
    xhr.onerror = e => { error(_error(e)); };
    xhr.onload = e => { success(_success(e)); };

    XHR({ abort: () => xhr.abort(), XHR: xhr });

};