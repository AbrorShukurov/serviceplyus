export const localizePath = (language, path = "/") => {
    if (!path.startsWith("/")) {
        path = `/${path}`;
    }

    // agar allaqachon /uz yoki /ru bilan boshlangan bo‘lsa
    if (path.startsWith("/uz") || path.startsWith("/ru")) {
        return path;
    }

    // root uchun
    if (path === "/") {
        return `/${language}`;
    }

    return `/${language}${path}`;
};