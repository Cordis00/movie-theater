import VueRouter from 'vue-router'
import MovieList from './pages/movieList/MovieList'
import MovieSession from './pages/movieSession/MovieSession'

export default new VueRouter({
	mode: 'history',
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'movieList',
			component: MovieList,
			meta: {
				title: 'Movie list',
			}
		},
		{
			path: '/session/:sessionId',
			name: 'session',
			component: MovieSession,
			meta: {
				title: 'Movie session',
			}
		}
	]
})
