import VueRouter from 'vue-router'
import MovieList from './pages/movieList/MovieList'

export default new VueRouter({
	mode: 'history',
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'movieList',
			component: MovieList,
			meta: {
				title: 'MovieList',
			}
		}
	]
})
