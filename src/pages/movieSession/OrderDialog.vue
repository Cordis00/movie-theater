<template>
	<v-dialog v-model="dialog" max-width="600px" persistent>
		<v-card>
			<v-card-title>
				<span class="headline">Оплата пройшла успішно</span>
			</v-card-title>
			<v-card-text>
				Дякуємо, що выбрали саме нас.
				Загальна сума - {{ totalPrice }} грн
			</v-card-text>
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
</template>

<script>
export default {
	props: {
		value: {
			type: Boolean,
			default: false
		},
		totalPrice: {
			type: Number,
			default: 0
		}
	},
	computed: {
		dialog: {
			get() {
				return this.value
			},
			set(value) {
				this.$emit('input', value)
			}
		}
	}
}
</script>

<style>

</style>
