import VueRouter from 'vue-router';
import Index from './components/index';
import About from './components/about';
import Certifications from './components/certifications';
import Teams from './components/teams';
import Categories from './components/categories';
import Contact from './components/contact';
import Posts from './components/posts';
import Post from './components/post';
import Projects from './components/projects';
import Project from './components/project';
import Login from './components/user/loginorregister';
import Profile from './components/user/profile';
import NotFound from './components/layouts/notfound';

import store from './store'

const routes=[
    {path:"/",name:"index",component:Index},
    {path:"/notfound",name:"notfound",component:NotFound},
    {path:"/about",name:"about",component:About},
    {path:"/certifications",name:"certifications",component:Certifications},
    {path:"/teams",name:"teams",component:Teams},
    {path:"/projects",name:"projects",component:Projects},
    {path:"/project/:slug",name:"project",component:Project},
    {path:"/categories",name:"categories",component:Categories},
    {path:"/contactus",name:"contactus",component:Contact},
    {path:"/posts",name:"posts",component:Posts},
    {path:"/post/:slug",name:"post",component:Post},
    {path:"/loginorregister",name:"loginorregister",component:Login,beforeEnter: (to, from, next) => {
        if (store.getters['auth/authenticated']) {
            return next({
                name:'profile',
            })
        }
        next();
    }},
    {path:"/profile",name:"profile",component:Profile,beforeEnter: (to, from, next) => {
        if (!store.getters['auth/authenticated']) {
            return next({
                name:'loginorregister',
            })
        }
        next();
    }}
];

const router=new VueRouter({
    mode:"history",
    base:process.env.BASE_URL,
    routes,
});

export default router;

