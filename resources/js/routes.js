const Welcome = () => import('./components/Welcome.vue')
const ListView = () => import('./components/category/List.vue')
const PurchaseView = () => import('./components/purchase/List.vue')
export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'listview',
        path: '/listview',
        component: ListView
    },
    {
        name: 'purchaseview',
        path: '/purchaseview',
        component: PurchaseView
    }
]