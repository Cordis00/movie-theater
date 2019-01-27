import Vue from 'vue'

export default {
	namespaced: true,
	state: {
		movieList: [],
	},
	actions: {
		async getMovieList({ commit }) {
			let response = await Vue.http.get('movie-list')
			commit('set', { type: 'movieList', value: response.body })
		}
	},
	mutations: {
		set(state, { type, value }) {
			state[type] = value
		}
	}
}
