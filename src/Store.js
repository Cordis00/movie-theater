import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import colors from "vuetify/es5/util/colors";

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {

	}
})

Vue.use(Vuetify, {
	theme: {
		primary: colors.indigo.lighten3,
	}
})

export default store
