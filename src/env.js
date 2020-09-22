// 接口环境设置
let baseURL

switch (process.env.NODE_ENV) { // process.env.NODE_ENV 是获取当前 node.js 进程中的环境变量
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api'
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api'
        break;
    case 'production':
        baseURL = 'http://mall-pre.springboot.cn/api'
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api'
        break;
}
export default {
    baseURL
}