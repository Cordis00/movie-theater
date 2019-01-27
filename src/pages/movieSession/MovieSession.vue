<template>
	<v-container>
		<h2 class="pageTitle">Сеанс {{ session.time }} на фільм - {{ session.movie ? session.movie.name : '' }}</h2>
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
		removedPlace: null
	}),
	computed: {
		...mapState([
			'session',
		])
	},
	created() {
		this.getSession({
			sessionId: this.$route.params.sessionId
		})
	},
	methods: {
		...mapActions([
			'getSession',
		]),
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
		}
	}
}
</script>

<style>

</style>
