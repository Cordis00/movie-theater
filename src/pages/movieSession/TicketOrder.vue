<template>
	<div class="order">
		<h3 class="order-title">Обрані місця</h3>
		<ul class="head">
			<li>Ряд</li>
			<li>Місце</li>
			<li>Ціна</li>
		</ul>
		<ul class="content" v-for="(place, index) in bookPlaces" :key="index">
			<li>{{ place.row + 1 }}</li>
			<li>{{ place.col + 1 }}</li>
			<li>{{ place.price }} грн</li>
			<li @click="removeTicket(place)">X</li>
		</ul>
		<ul class="content remove-button" v-if="bookPlaces.length > 0">
			<li>Видалити все</li>
			<li @click="fullRemove">X</li>
		</ul>
		<p class="total-price">
			Всього:
			<span>{{ totalPrice }} грн</span>
		</p>
		<v-btn
			color="orange darken-4"
			class="buy-button"
			@click="dialog = true"
			:disabled="bookPlaces.length < 1"
		>
			Далі
		</v-btn>

		<v-dialog v-model="dialog" max-width="600px">
			<v-card>
				<v-card-title>
					<span class="headline">Купівля пройшла успішно</span>
				</v-card-title>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="green darken-1"
						flat
						@click="dialog = false"
						to="/"
					>
						Список фільмів
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import './movieSession.scss'

export default {
	props: {
		bookPlaces: {
			type: Array,
			default: []
		}
	},
	data: () => ({
		dialog: false
	}),
	computed: {
		totalPrice() {
			return this.bookPlaces.length > 0
				? this.bookPlaces.reduce((sum, x) => sum + x.price, 0)
				: 0
		}
	},
	methods: {
		removeTicket(place) {
			this.$emit('updateMoviePlaces', {
				row: place.row,
				col: place.col,
				value: 1
			})
		},
		fullRemove() {
			this.$emit('fullRemove')
		}
	}
}
</script>

<style>

</style>
