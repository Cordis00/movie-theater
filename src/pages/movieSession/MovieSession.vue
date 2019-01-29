<template>
	<v-container>
		<h2 class="pageTitle">
			Сеанс {{ session.time }} на фільм - {{ session.movie ? session.movie.name : '' }}
		</h2>
		<v-layout>
			<v-flex md7>
				<cinema-hall
					:moviePlaces="moviePlaces"
					@updateMoviePlaces="updateMoviePlaces"
				/>
			</v-flex>
			<v-flex md4>
				<ticket-order
					:bookPlaces="bookPlaces"
					@updateMoviePlaces="updateMoviePlaces"
					@fullRemove="fullRemove"
				/>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import CinemaHall from './CinemaHall'
import TicketOrder from './TicketOrder'

const { mapActions, mapState } = createNamespacedHelpers('sessions')

export default {
	components: {
		CinemaHall,
		TicketOrder
	},
	data: () => ({
		bookPlaces: [],
		moviePlaces: [],
		row_number: 10,
		col_number: 20
	}),
	computed: {
		...mapState([
			'session',
		]),
	},
	created() {
		this.moviePlaces = this.generateFreePlaces()
		this.getSession({
			sessionId: this.$route.params.sessionId
		})
	},
	methods: {
		...mapActions([
			'getSession',
		]),
		updateMoviePlaces(place) {
			// Drawing places
			let newRow = this.moviePlaces[place.row].slice(0)
			newRow[place.col] = place.value == 0 ? 1 : 0
			this.$set(this.moviePlaces, place.row, newRow)

			if(place.value == 0) {
				this.bookPlaces.push({
					row: place.row,
					col: place.col,
					price: place.price
				})
			} else {
				this.bookPlaces = this.bookPlaces.filter(
					item => item.row != place.row ||
							item.col != place.col
				)
			}
		},
		generateFreePlaces() {
			let places = []
			for(let i = 0; i < this.row_number; i++) {
				let row = []
				for(let j = 0; j < this.col_number; j++) {
					row[j] = 0
				}
				places.push(row)
			}
			return places
		},
		fullRemove() {
			this.moviePlaces = this.generateFreePlaces()
			this.bookPlaces = []
		}
	}
}
</script>

<style>

</style>
