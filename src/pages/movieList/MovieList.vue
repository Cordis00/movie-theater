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
import MovieCard from '../../components/MovieCard'

export default {
	components: {
		MovieCard
	},
	data: () => ({
		movieList: [
			{
				id: 1,
				name: 'Небезпечна гра Слоун',
				age_limit: '16+',
				image: 'film_1',
				date: '20 жовтня, суббота',
				type: 'CINETECH+, 2D',
				available_sessions: [
					{
						id: 1,
						time: '19:30'
					}
				]
			},
			{
				id: 2,
				name: 'Перша людина',
				age_limit: '0+',
				image: 'film_2',
				date: '20 жовтня, суббота',
				type: 'CINETECH+, 2D',
				available_sessions: [
					{
						id: 2,
						time: '11:45'
					},
					{
						id: 3,
						time: '16:10'
					},
					{
						id: 4,
						time: '18:50'
					},
					{
						id: 5,
						time: '21:30'
					}
				]
			}
		]
	})
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
