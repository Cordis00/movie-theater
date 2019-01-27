<template>
<v-app>
	<v-navigation-drawer
		:absolute="true"
		v-model="drawer"
		fixed
		clipped
		class="grey lighten-4"
		app
	>
		<v-list
			dense
			class="grey lighten-4"
		>
			<template v-for="(item, i) in menuItems">
				<v-layout
					v-if="item.heading"
					:key="i"
					row
					align-center
				>
					<v-flex xs6>
					<v-subheader v-if="item.heading">
						{{ item.heading }}
					</v-subheader>
					</v-flex>
				</v-layout>
				<v-divider
					v-else-if="item.divider"
					:key="i"
					dark
					class="my-3"
				></v-divider>
				<v-list-tile
					v-else
					:key="i"
					:to="item.to"
				>
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title class="grey--text">
							{{ item.text }}
						</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</template>
		</v-list>
	</v-navigation-drawer>

	<v-toolbar color="primary" app absolute clipped-left>
		<v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
		<span class="title ml-3 mr-5">Movie theater</span>
		<v-spacer></v-spacer>
	</v-toolbar>
	<v-content>
		<v-container fluid fill-height class="grey lighten-4">
			<v-layout max-width>
				<router-view></router-view>
			</v-layout>
		</v-container>
	</v-content>
</v-app>
</template>

<script>

export default {
	name: 'App',
	title: null,
	data: () => ({
		drawer: null,
		menuItems: [
			{
				icon: 'collections',
				text: 'Список фільмів',
				to: '/'
			}
		]
	}),
	created() {

	}
}
</script>

<style>
html {
    overflow: hidden !important;
    height: 100%;
}

body {
    height: 100%;
    overflow: auto;
}
</style>
