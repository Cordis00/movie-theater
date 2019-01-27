<template>
	<div class="order">
		<h3 class="order-title">Обрані місця</h3>
		<ul class="head">
			<li>Ряд</li>
			<li>Місце</li>
			<li>Ціна</li>
			<li></li>
		</ul>
		<ul class="content" v-for="(place, index) in bookPlaces" :key="index">
			<li>{{ place.row }}</li>
			<li>{{ place.col }}</li>
			<li>{{ place.price }} грн</li>
			<li @click="removeTicket(place.row, place.col)">X</li>
		</ul>
		<ul class="content remove-button">
			<li>Видалити все</li>
			<li @click="allRemove">X</li>
		</ul>
		<p class="total-price">
			Всього:
			<span>{{ totalPrice }} грн</span>
		</p>
		<v-btn
			color="orange darken-4"
			class="buy-button"
			@click="dialog = true"
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
		removeTicket(row, col) {
			this.$emit('updateBookPlaces', {
				book: false,
				index_row: row,
				index_col: col
			})
		},
		allRemove() {
			this.$emit('allRemove')
		}
	}
}
</script>

<style lang="scss">
	.order {
		width: 250px;
		margin: 35px auto 10px;

		.order-title {
			font-size: 24px;
			font-weight: 400;
			margin-bottom: 20px;
		}
		.head {
			font-size: 12px;
			padding: 8px 0px;
		}
		.content {
			padding: 5px 0;

			li:last-child {
				cursor: pointer;
				text-align: center;
				background: #e6e6e6;
				border-radius: 50%;
				width: 27px;
				margin-left: 10px;
			}
		}
		ul {
			list-style: none;
			padding: 0;
			border-bottom: 1px solid #cacaca;

			li {
				display: inline-block;
				width: 60px;
				padding: 3px;
			}
		}
		.remove-button {
			border: none;

			li:first-child {
				width: 180px;
			}
		}
		.total-price {
			margin-top: 10px;
			font-size: 20px;
			font-weight: 600;

			span {
				float: right;
			}
		}
		.buy-button {
			color: #fff;
			margin: 0 auto;
			display: block;
			width: 200px;
			border-radius: 25px;

			.v-btn__content {
				text-align: center;
				display: inline;
			}
		}
	}
	.headline {
		display: block;
		margin: 0 auto;
	}
</style>
