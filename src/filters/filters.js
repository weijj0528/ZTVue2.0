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

export function moneyRecordWay(value) {
    switch(value){
        case -1:
            return '短信消费';
        case 1:
            return '支付宝充值';
        case 2:
            return '微信充值';
        default:
            return '其他';
    }
}

export function moneyRecordStatus(value) {
    switch(value){
        case 0:
            return '初始';
        case 1:
            return '成功';
        case 2:
            return '失败';
        case 3:
            return '未知';
        default:
            return '未知';
    }
}

export function activityAType(value) {
    switch(value){
        case 'register':
            return '注册';
        case 'firstPay':
            return '首次充值';
        default:
            return '其他';
    }
}

export function activityAwardType(value) {
    switch(value){
        case 'sms':
            return '免费短信';
        case 'money':
            return '奖励金';
        default:
            return '其他';
    }
}