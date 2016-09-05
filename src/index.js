import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// components
import App from './components/App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import SecretQuote from './components/SecretQuote.vue'

// services
import auth from './auth'

Vue.use(VueResource)
Vue.use(VueRouter)

// Check the users auth status when the app starts
auth.checkAuth()

// export so we can use in components
export var router = new VueRouter()

// define routes
router.map({
	'/home': {
		component: Home
	},
	'/login': {
		component: Login
	},
	'/signup': {
		component: Signup
	},
	'/secretquote': {
		component: SecretQuote
	}
})

// fallback route
router.redirect({
	'*': '/home'
})

// expose the whole thing on element with 'app' as an id
router.start(App, '#app')