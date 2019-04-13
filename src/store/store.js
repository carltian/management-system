const STORAGE_KEY = 'data_set'//名字
export default {
    fetch() {//定义获取数据的方法
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY)
         || '[]')
    },
    save(items) {//定义保存数据的方法
        window.localStorage.getItem(STORAGE_KEY, JSON.stringify(items))
    }
}
