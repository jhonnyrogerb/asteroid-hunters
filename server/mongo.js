var { MongoClient } = require('mongodb')

let client = null

exports.connect = async url => {
    try {
        if (client) return;

        const connection = await MongoClient.connect(url, {
            poolSize: 10,
            autoReconnect: true,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 1000,
            bufferMaxEntries: 0
        })

        client = connection
        return;
    } catch (err) {
        throw err;
    }


}

exports.getConnection = () => {
    return client
}

exports.close = async () => {
    if (client) {
        try {
            return await client.close()
        } catch (err) {
            throw err;
        }
    }

    return;
}