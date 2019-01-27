<template>
	<v-layout row class="card">
		<v-flex md3>
			<div
				class="movieImage"
				:style="'background-image: url(' + imageUrl + ')'"
			/>
		</v-flex>
		<v-flex md9>
			<h3 class="movieTitle">
				{{ movie.name }} ({{ movie.age_limit }})
			</h3>
			<p>{{ movie.date }}</p>
			<span class="movieType">{{ movie.type }}</span>
			<ul class="sessionList">
				<li v-for="(session, i) in movie.available_sessions" :key="i">
					<router-link :to="{ name: 'session', params: { sessionId: session.id }}">
						{{ session.time }}
					</router-link>
				</li>
			</ul>
		</v-flex>
	</v-layout>
</template>

<script>
export default {
	props: {
		movie: {
			type: Object,
			default: {}
		}
	},
	computed: {
		imageUrl() {
			return require('../assets/images/' + this.movie.image + '.png')
		}
	}
}
</script>

<style lang="scss">
	.card {
		margin-bottom: 10px;
		background-color: #e2e2e2;
		height: 250px;
		padding: 25px 0px;

		.movieImage {
			height: 200px;
			width: 150px;
			margin: 0 auto;
			background-position: center;
			background-size: contain;
		}
		.movieTitle {
			color: #58a3d1;
			cursor: pointer;
			margin-bottom: 5px;

			&:hover {
				text-decoration: underline;
			}
		}
		.movieType {
			float: left;
			margin-top: 10px;
		}
		.sessionList {
			margin-top: 10px;
			list-style: none;
			padding: 0;
			float: left;

			li {
				display: inline;
				background-color: #59a3d5;
				padding: 4px 9px;
				margin: 0px 13px;
				border-radius: 3px;
				cursor: pointer;

				&:hover {
					background-color: #3b8fc7;
				}

				a {
					color: #fff;
					text-decoration: none;
				}
			}
		}
	}
</style>
