import Vue from 'vue'

export default {
	namespaced: true,
	state: {
		session: {},
	},
	actions: {
		async getSession({ commit }, query) {
			let response = await Vue.http.get('sessions/' + query.sessionId)
			commit('set', { type: 'session', value: response.body })
		}
	},
	mutations: {
		set(state, { type, value }) {
			state[type] = value
		}
	}
}
