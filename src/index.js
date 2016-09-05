import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

// export so we can use in components
export var router = new VueRouter()

router.map({
	'/home': {
		component: Home
	}
})

router.redirect({
	'*': '/home'
})

// expose the whole thing on element with 'app' as an id
router.start(App, '#app')