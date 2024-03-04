const encrypt = value => window.btoa(JSON.stringify(value))
const decrypt = value => JSON.parse(window.atob(value))

export const setRememberme = () => {
  localStorage.setItem('rememberme',encrypt(true))
}

const storage = () => {
  return localStorage.getItem('rememberme') ? localStorage : sessionStorage;
}

export const setItemStorage = (item, value) => {
  storage().setItem(item,encrypt(value))
} 

export const getItemStorage = (item) => {
  const val = storage().getItem(item);
  return val ? decrypt(val) : null
}

export const clearStorage = () => {
  storage().clear();
}

export const removeItem = (item) => {
  storage().removeItem(item)
}