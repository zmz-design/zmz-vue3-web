import { createStore } from 'vuex'
import vue3 from '@/store/modules/vue3.js'

export default createStore({
	state: {
		zmzTheme: localStorage.getItem('zmzTheme') || 'light', // 主题
        zmzLang: localStorage.getItem('zmzLang') || 'zh', // 语言
        zmzMobile: JSON.parse(localStorage.getItem('zmzMobile') || 'false'), // 窗口宽度
	},
	mutations: {
		setZmzTheme(state, data) {
            state.zmzTheme = data;
            localStorage.setItem('zmzTheme', data);
        },
        setZmzLang(state, data) {
            state.zmzLang = data;
            localStorage.setItem('zmzLang', data);
        },
        setZmzMobile(state, data) {
            state.zmzMobile = data;
            localStorage.setItem('zmzMobile', data);
        }
	},
	actions: {
	},
	getters: {
		getZmzTheme(state) {
            return state.zmzTheme
        },
        getZmzLang(state) {
            return state.zmzLang
        },
        getZmzMobile(state) {
            return state.zmzMobile
        },
	},
	modules: {
		vue3
	}
})
