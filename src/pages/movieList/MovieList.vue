<template>
	<v-container>
		<h2 class="pageTitle">Список фільмів</h2>
		<movie-card
			v-for="movie in movieList" :key="movie.id"
			:movie="movie"
		/>
	</v-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import MovieCard from '../../components/MovieCard'

const { mapActions, mapState } = createNamespacedHelpers('movies')

export default {
	components: {
		MovieCard
	},
	computed: {
		...mapState([
			'movieList',
		])
	},
	created() {
		this.getMovieList()
	},
	methods: {
		...mapActions([
			'getMovieList',
		])
	}
}
</script>

<style lang="scss">
	.container {
		margin: 0 auto;

		.pageTitle {
			color: #6a7ec3;
			text-align: center;
			font-size: 24px;
			margin-bottom: 10px;
		}
	}
</style>
