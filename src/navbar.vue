<template>
	<nav>
    <!--<slot></slot>-->
		<ul>
			<li><a>Home</a></li>
			<li><a>Tourneys</a></li>
			<li><a>Login</a></li>
		</ul>
	</nav>
</template>

<script>


	export default {
			name: 'navbar',
			components: {

		},  
		data: function () {
			return {
			greeting: 'GRRRR'
			}
		}
	}
</script>

<style scoped>
	p {
		font-size: 2em;
		text-align: center;
	} 
	ul {
		list-style-type: none;
		margin: 0px;
		padding: 0px;
		overflow: hidden;
		background-color: #ababab;
	}
	li {
		float: left;
	}
	li a {
		display: block;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}
</style>