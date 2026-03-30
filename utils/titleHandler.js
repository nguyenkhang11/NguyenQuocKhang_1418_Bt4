module.exports = {
    ConvertTitleToSlug: function (title) {
        if (!title) return '';
        let result = title.toLowerCase();
        // Remove Vietnamese accents
        result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        result = result.replace(/[đĐ]/g, 'd');
        // Remove special characters and replace spaces with hyphens
        result = result.replace(/[^a-z0-9\s-]/g, ''); // Remove non-alphanumeric, non-space, non-hyphen
        result = result.trim().replace(/\s+/g, '-'); // Replace spaces with single hyphen
        result = result.replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
        return result;
    }
}
