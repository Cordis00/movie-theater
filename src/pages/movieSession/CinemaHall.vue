<template>
	<div>
		<div class="screen">Экран</div>
		<div class="all-places">
			<span class="place-group" v-for="index_row in 10" :key="index_row">
				<span v-for="index_number in 20" :key="index_number">
					<div class="place free"
						@click="book($event, index_row, index_number)">
						<v-icon class="hide" color="white" small>perm_identity</v-icon>
					</div>
				</span>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		book(event, index_row, index_number) {
			let book = event.target.parentElement.classList.toggle('booked')
			event.target.classList.toggle('show')
			this.$emit('updateBookPlaces', {
				book: book,
				index_row: index_row,
				index_number: index_number,
				price: index_row <= 5 ? 50 : 100
			})
		}
	}
}
</script>

<style lang="scss">
	.screen {
		user-select: none;
		text-align: center;
		background-color: #e6f6fd;
		margin-top: 20px;
		border-bottom-left-radius: 30px;
		border-bottom-right-radius: 30px;
	}
	.all-places {
		margin: 70px auto 0px;
		display: table;

		.place-group {
			float: left;
			clear: both;
		}
		.place {
			float: left;
			background-color: #82bdd2;
			width: 16px;
			height: 18px;
			margin: 3px;
			border-radius: 3px;
			cursor: pointer;
			user-select: none;
		}
		.free:hover {
			background-color: #3b8fc7;
		}
		.booked {
			background-color: #e8a651;

			&:hover {
				background-color: #e8a651;
			}
		}
	}
	.hide {
		opacity: 0;
	}
	.show {
		opacity: 1;
	}
</style>
