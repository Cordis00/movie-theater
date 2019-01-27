<template>
	<v-container>
		<h2 class="pageTitle">Сеанс {{ session.time }} на фільм - {{ session.movie.name }}</h2>
		<v-layout>
			<v-flex md7>
				<cinema-hall
					:removedPlace="removedPlace"
					@updateBookPlaces="updateBookPlaces"
				/>
			</v-flex>
			<v-flex md4>
				<ticket-order
					:bookPlaces="bookPlaces"
					@updateBookPlaces="updateBookPlaces"
					@allRemove="allRemove"
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
		bookPlaces: [],
		removedPlace: null
	}),
	created() {
		this.session = this.getSession({
			sessionId: this.$route.params.sessionId
		})
	},
	methods: {
		allRemove() {
			this.removedPlace = {
				all: true
			}
			this.bookPlaces = []
		},
		updateBookPlaces(place) {
			if(place.book) {
				this.bookPlaces.push({
					row: place.index_row,
					col: place.index_col,
					price: place.price
				})
			} else {
				this.removedPlace = place
				this.bookPlaces = this.bookPlaces.filter(
					item => item.row != place.index_row ||
							item.col != place.index_col
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
