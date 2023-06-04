const Welcome = () => import('./components/Welcome.vue')
const ListView = () => import('./components/category/List.vue')
const PurchaseView = () => import('./components/purchase/List.vue')
const ProductTableView = () => import('./components/product/Table.vue')
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
    },
    {
        name: 'producttableview',
        path: '/producttableview',
        component: ProductTableView
    }
]