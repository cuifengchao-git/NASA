/**
 * localStorage
 *  localStorage和sessionStorage属性允许在浏览器中存储key/value对的数据
 *  localStorage用于长期保存整个网站的数据，保存的数据没有过期时间，直至手动删除
 *  localhost的属性是只读的
 *  sessionStorage将数据保存在当前会话中
*/

/**
 * 存储localStorage
 * @param name key
 * @param content value 
*/
export const setStore = (name, content) => {
    if (!name) return
    if (typeof content !== 'string'){
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 * @param name key
*/
export const getStore = name => {
    if (!name) return
    return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 * @param name key
*/
export const removeStore = name => {
    if (!name) return
    window.localStorage.removeItem(name)
}
