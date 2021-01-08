import { createRouter, createWebHistory } from 'vue-router';
 
import TeamsList from './components/teams/TeamsList.vue';
import TeamFooter from './components/teams/TeamFooter.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { 
      name: 'team-list',
      path:'/teams', 
      // component:  TeamsList, 
      components: {
        default: TeamsList, footer: TeamFooter
      },
      children: [
        { name: 'team-members', path:':teamId', component:  TeamMembers, props: true },
      ] 
    },
    { 
      path:'/users', 
      components: {
        default: UsersList,
        footer:  UsersFooter,
      },
      beforeEnter(to ,from, next){
        console.log(to);
        console.log(from);
        next();
      },
    },
    // { path: '/:notFound(.*)', redirect: '/teams' }
    { path:'/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition){
    // to route object where we are going to and from where we are coming from.
    if(savedPosition){
      return savedPosition;
    }
    return { left: 0, top: 0 }
  },
});

router.beforeEach((to, from, next)=>{
  console.log(to, from);
  next();
});
router.afterEach(()=>{
  // send data to server 
  console.log('');
});

export default router;