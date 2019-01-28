<template>
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
</template>

<script>
export default {
	props: {
		value: {
			type: Boolean,
			default: false
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
