<template>
	<div>
		<div class="screen">Экран</div>
		<div class="hall">
			<span class="place-group" v-for="(row, index_row) in moviePlaces" :key="index_row">
				<span v-for="(col, index_col) in row" :key="index_col">
					<div :class="['place', col == 0 ? 'free' : 'booked' ]"
						@click="book(index_row, index_col, col)">
						<v-icon v-if="col == 1" color="white" small>perm_identity</v-icon>
					</div>
				</span>
			</span>
		</div>
	</div>
</template>

<script>
import './movieSession.scss'

export default {
	props: [
		'moviePlaces',
	],
	methods: {
		book(row, col, value) {
			this.$emit('updateMoviePlaces', {
				row,
				col,
				value,
				price: row <= 5 ? 50 : 100
			})
		}
	}
}
</script>

<style>

</style>
