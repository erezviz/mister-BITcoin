import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ContactApp from '../views/ContactApp.vue'
import ContactDetails from '../views/ContactDetails.vue'
import ContactEditPage from '../views/ContactEditPage.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/contact',
            name: 'contact-app',
            component: ContactApp
        },
        {
            path: '/contact/:_id',
            name: 'contact-details',
            component: ContactDetails
        },
        {
            path: '/contact/edit/:_id?',
            name: 'contact-edit-page',
            component: ContactEditPage
        },

    ]
})

export default router