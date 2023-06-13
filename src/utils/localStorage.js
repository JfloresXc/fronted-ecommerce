export function getLocalStorage(key) {
  const value = window.localStorage.getItem(key)
  return parse(value)
}

export function updateLocalStorage(key, value) {
  const json = JSON.stringify(value)
  localStorage.setItem(key, json)
}

function parse(obj) {
  try {
    return JSON.parse(obj)
  } catch {
    return obj
  }
}
