export const MARKDOWN_RECEIVED = 'MARKDOWN_RECEIVED';

export const markdownReceived = (markdown) => {
    return {
        type: MARKDOWN_RECEIVED,
        markdown
    };
}