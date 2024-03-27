// 金额格式化
export const formatMoney = (num: number | string, currency: string = 'CNY') => {
  return Number(num).toLocaleString('zh-CN', { style: 'currency', currency })
}
