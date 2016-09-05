
<template>
	<nav class='navbar navbar-default'>
		<div class='container'>
			<ul class='nav navbar-nav'>
				<li><a v-link="'home'">Home</a></li>
          		<li><a v-link="'login'">Login</a></li>
          		<li><a v-link="'signup'">Sign Up</a></li>
          		<li><a v-link="'secretquote'">Secret Quote</a></li>
          		<li><a v-link="'login'">Logout</a></li>
			</ul>
		</div>
	</nav>
	<div class='container'>
		<!-- Routes rendered here -->
		<router-view></router-view>
	</div>
</template>