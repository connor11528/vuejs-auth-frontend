<template>
	<div class='col-sm-4 col-sm-offset-4'>
		<h2>Signup</h2>
		<p>Create an account to get some great quotes.</p>		
		<div class="alert alert-danger" v-if="error">
	        <p>{{ error }}</p>
	    </div>
		<div class="form-group">
			<input
			  type="text"
			  class="form-control"
			  placeholder="Enter a username"
			  v-model="credentials.username">
		</div>
		<div class="form-group">
			<input
			  type="password"
			  class="form-control"
			  placeholder="Enter a password"
			  v-model="credentials.password">
		</div>
		<!-- @click is the same as v-on:click -->
		<button class="btn btn-success" @click="submit()">Create</button>
	</div>
</template>

<script>
import auth from '../auth'
export default {
	data(){
		return {
			credentials: {
				username: '',
				password: ''
			},
			error: ''
		}
	},
	methods: {
		submit(){
			var credentials = {
				username: this.credentials.username,
				password: this.credentials.password
			}

			auth.signup(this, credentials, 'secretquote')
		}
	}
}
</script>














