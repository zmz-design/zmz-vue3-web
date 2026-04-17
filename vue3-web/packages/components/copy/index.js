let ZmzCopy = (data) => {
    return new Promise((resolve) => {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(data).then(() => {
                resolve(true)
            }).catch(() => {
                resolve(false)
            });
        } else {
            var inp = document.createElement('textarea');
            document.body.appendChild(inp);
            inp.value = data;
            inp.select();
            try {
                document.execCommand('copy', false);
                resolve(true)
            } catch (e) {
                resolve(false)
            }
            inp.remove();
        }
    })
}

export default ZmzCopy
