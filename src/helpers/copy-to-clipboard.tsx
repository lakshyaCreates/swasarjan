export function copyToClipboard(content: string) {
    try {
        navigator.clipboard.writeText(content);

        return {
            response: "ok",
            message: "Copied to Clipboard!",
        };
    } catch (error) {
        return {
            response: "error",
            message: error as string,
        };
    }
}
