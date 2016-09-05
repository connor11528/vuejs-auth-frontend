
<template>
	<div class='col-sm-6 col-sm-offset-3'>
		<h1>Generate Chuck Norris quote</h1>

		<button class='btn btn-primary' v-on:click='getQuote()'>Generate!</button>

		<div class='quote-area' v-if='quote'>
			<h2><blockquote>{{ quote }}</blockquote></h2>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			quote: ''
		}
	},
	methods: {
		getQuote(){
			this.$http
				.get('http://localhost:3001/api/random-quote', (data) => {
					this.quote = data;
				})
				.error((err) => console.log(err))
		}
	}
}
</script>