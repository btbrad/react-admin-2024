export default {
  set(key: string, value: unknown) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  get(key: string) {
    const value = window.localStorage.getItem(key)
    if (!value) return ''
    try {
      return JSON.parse(value)
    } catch (error) {
      return value
    }
  },
  remove(key: string) {
    window.localStorage.removeItem(key)
  },
  clear() {
    window.localStorage.clear()
  }
}
