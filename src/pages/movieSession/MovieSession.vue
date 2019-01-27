<template>
	<v-container>
		<h2 class="pageTitle">Сеанс {{ session.time }} на фільм - {{ session.movie.name }}</h2>
		<v-layout>
			<v-flex md7>
				<cinema-hall
					@updateBookPlaces="updateBookPlaces"
				/>
			</v-flex>
			<v-flex md4>
				<ticket-order
					:bookPlaces="bookPlaces"
				/>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import CinemaHall from './CinemaHall'
import TicketOrder from './TicketOrder'

export default {
	components: {
		CinemaHall,
		TicketOrder
	},
	data: () => ({
		session: {},
		bookPlaces: []
	}),
	created() {
		this.session = this.getSession({
			sessionId: this.$route.params.sessionId
		})
	},
	methods: {
		updateBookPlaces(place) {
			if(place.book) {
				this.bookPlaces.push({
					row: place.index_row,
					number: place.index_number,
					price: place.price
				})
			} else {
				this.bookPlaces = this.bookPlaces.filter(
					item => item.row != place.index_row &&
							item.number != place.index_number
				)
			}
		},
		getSession(id) {
			return {
				id: id,
				hall_number: 2,
				time: '19:30',
				date: new Date(),
				movie: {
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
				}
			}
		}
	}
}
</script>

<style>

</style>
