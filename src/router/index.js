import Vue from 'vue'
import Router from 'vue-router'
import Rank from 'components/rank/rank'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Search from 'components/search/search'
import SingerDetail from 'components/singer-detail/singer-detail'
import Sheet from 'components/sheet/sheet'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/',
  		redirect:'/recommend'
  	},
  	{
  		path:'/recommend',
  		component:Recommend,
      children:[
        {
          path: ':id',
          component: Sheet
        }
      ]
  	},
  	{
  		path:'/rank',
  		component:Sheet
  	},
  	{
      path:'/singer',
      component:Singer,
      children:[
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
  	{
  		path:'/Search',
  		component:Search
  	}
  ]
})
