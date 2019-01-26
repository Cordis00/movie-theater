import VueRouter from 'vue-router'
import MovieSessions from './pages/movieSessions/MovieSessions'

export default new VueRouter({
	mode: 'history',
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'movie_sessions',
			component: MovieSessions,
			meta: {
				title: 'Movie sessions',
			}
		}
	]
})
