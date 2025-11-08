/**
 * API 配置文件
 * 
 * 在这里修改后端服务器地址
 */

const BACKEND_PORT = '8002';

/**
 * 根据当前浏览器 host 动态拼接后端地址，并将 3000 端口替换为后端端口
 */
const backendHost = window.location.host.includes(':3000')
  ? window.location.host.replace(':3000', `:${BACKEND_PORT}`)
  : `${window.location.hostname}:${BACKEND_PORT}`;

export const API_CONFIG = {
  /**
   * 后端 API 基础地址
   * 
   * 开发环境：http://127.0.0.1:8002
   * 生产环境：修改为实际的后端服务器地址，例如：
   * - http://your-server-ip:8002
   * - https://api.your-domain.com
   */
  BASE_URL: `${window.location.protocol}//${backendHost}`,
};

export default API_CONFIG;
