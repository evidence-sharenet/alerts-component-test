export function nf(number, decimals = 2, dec_point, thousands_sep) {
    if (isNaN(number)) {
        return;
    } else {
        number = number * 1;
    }
    let str = number.toFixed(decimals ? decimals : 0).toString().split('.');
    let parts = [];
    for (let i = str[0].length; i > 0; i -= 3) {
        parts.unshift(str[0].substring(Math.max(0, i - 3), i));
    }
    str[0] = parts.join(thousands_sep ? thousands_sep : ' ');
    return str.join(dec_point ? dec_point : '.');
}