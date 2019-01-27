<template>
	<div>
		<div class="screen">Экран</div>
		<div class="all-places">
			<span class="place-group" v-for="index_row in 10" :key="index_row">
				<span v-for="index_col in 20" :key="index_col">
					<div class="place free" :ref="'place_' + index_row + '.' + index_col"
						@click="book($event, index_row, index_col)">
						<v-icon class="hide" color="white" small>perm_identity</v-icon>
					</div>
				</span>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'removedPlace'
	],
	watch: {
		removedPlace() {
			if(this.removedPlace.all) {
				this.removeAll()
				return
			}
			let element = this.$refs[
				'place_' +
				this.removedPlace.index_row + '.' +
				this.removedPlace.index_col][0]
			this.deleteElement(element)
		}
	},
	methods: {
		removeAll() {
			for (var key in this.$refs) {
				let element = this.$refs[key][0]
				if(!element.classList.contains('booked')) continue
				this.deleteElement(element)
			}
		},
		book(event, index_row, index_col) {
			let book = false
			if(!event.target.parentElement.classList.contains('booked')) {
				book = true
				let element = this.$refs['place_' + index_row + '.' + index_col][0]
				this.deleteElement(element)
			}
			this.$emit('updateBookPlaces', {
				book: book,
				index_row: index_row,
				index_col: index_col,
				price: index_row <= 5 ? 50 : 100
			})
		},
		deleteElement(element) {
			element.classList.toggle('booked')
			element.children[0].classList.toggle('show')
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
