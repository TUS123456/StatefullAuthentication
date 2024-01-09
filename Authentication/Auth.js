const handleStoreAllSessionKey = new Map();

function storeKey(sessionId, username) {
    handleStoreAllSessionKey.set(username, sessionId);
}

function getKey(username) {
    return handleStoreAllSessionKey.get(username);
}

module.exports = {
    storeKey,
    getKey
};
