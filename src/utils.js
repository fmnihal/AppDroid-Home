/**
 * Formats large numbers (downloads, reviews) into K (thousands) or M (millions).
 * @param {number | string} num - The number to format.
 * @returns {string} The formatted string (e.g., "1.5M").
 */
export const formatNumber = (num) => {
    if (num === undefined || num === null) return 'N/A';
    if (typeof num !== 'number') num = parseFloat(num);
    if (isNaN(num)) return 'N/A';
    
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
};
