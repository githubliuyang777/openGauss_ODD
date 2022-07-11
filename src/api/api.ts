import { request } from '@/shared/axios';
import type { AxiosResponse } from '@/shared/axios';

/**
 * 获取授权的相关回调链接
 */
export function queryUserInfo(id: string) {
  const url = `/query/lts/2203?community=opengauss&user=${id}`;
  return request.get(url, { global: true }).then((res: AxiosResponse) => res.data);
}

export function getGiteeId() {
  const url = '/oauth2/userinfo';
  return request.get(url, { global: true }).then((res: AxiosResponse) => res.data);
}
