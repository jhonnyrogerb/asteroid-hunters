const createAxiosTypes = type => {
    const request = `${type}_REQUEST`;
    const success = `${type}_SUCCESS`;
    const fail = `${type}_FAILURE`;
    return {
        request,
        success,
        fail,
        types: () => [request, success, fail]
    }
};

export { createAxiosTypes };
