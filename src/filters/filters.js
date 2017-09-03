/**
 * Created by aresn on 16/7/4.
 */
/**
* 千位分隔符
* */
export function amountFormat(value) {
    return value.toString().replace(/\B(?=(\d{3})+$)/g,',');
}
// 客户端
export function client(value) {
    switch(value){
        case 0:
            return 'PC';
        case 1:
            return 'PC';
        case 2:
            return 'Android';
        case 3:
            return 'Weixin';
        case 4:
            return 'iOS';
        default:
            return 'Other';
    }
}