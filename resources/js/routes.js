
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ContactsPage from './pages/ContactsPage';
import PostDetails from './pages/PostDetails';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogPage
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsPage
        },
        {
            path: '/blog/:id',
            name: 'PostDetails',
            component: PostDetails
        }
    ]

})

export default router;