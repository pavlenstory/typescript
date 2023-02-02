function strip(x: string | number) {
    if (typeof x === 'number') {
        x.toFixed(2)
    }else {
        return x.trim()
    }
}

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    reason = 'error message'
}

function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    }else {
        return {
            info: res.header + res.reason
        }
}
}