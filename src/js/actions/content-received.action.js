export const CONTENT_RECEIVED = 'CONTENT_RECEIVED';

export const contentReceived = (content) => {
    return {
        type: CONTENT_RECEIVED,
        content
    };
}