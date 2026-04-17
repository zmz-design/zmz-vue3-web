let ZmzNetwork = () => {
    return new Promise((resolve) => {
        let params = {}
        const connection = navigator.connection || navigator.mozConnection || navigator
            .webkitConnection;
        if (connection) {
            params['effectiveType'] = connection.effectiveType
            params['downlink'] = connection.downlink
            params['rtt'] = connection.rtt
            params['saveData'] = connection.saveData
        }

        if (navigator.onLine) {
            params['online'] = true
        } else {
            params['online'] = false
        }
        resolve(params)
    })
}


export default ZmzNetwork
