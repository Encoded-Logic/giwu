
export const browserStore = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
};


export const getBrowserStore = (key) => {
  return localStorage.getItem(key)
};