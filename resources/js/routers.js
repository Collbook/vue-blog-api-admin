
/*BackEnd*/
// dashboard
import AdminHome from './components/backend/admin/dashboard/AdminHome.vue';

// Posts
import ListPost from './components/backend/admin/posts/List.vue';
import AddPost from './components/backend/admin/posts/Add.vue';
import EditPost from './components/backend/admin/posts/Edit.vue';

// Category
import ListCate from './components/backend/admin/category/List.vue';
import AddCate from './components/backend/admin/category/Add.vue';
import EditCate from './components/backend/admin/category/Edit.vue';

// tags
import ListTag from './components/backend/admin/tags/List.vue';

// roles
import ListRole from './components/backend/admin/roles/List.vue';

// users
import ListUser from './components/backend/admin/users/List.vue';



export const routes = [
    // Backend
    // dashboard
    {
        path: '/home',
        component: AdminHome
    },
    {
        path: '/admin/home',
        component: AdminHome
    },
    // posts
    {
        path: '/admin/posts',
        component : ListPost
    },
    {
        path: '/admin/posts/create',
        component : AddPost
    },
    {
        path: '/admin/posts/:postid',
        component: EditPost
    },
    // category
    {
        path : '/admin/category',
        component : ListCate
    },
    {
        path : '/admin/category/create',
        component : AddCate
    },
    {
        path: '/admin/category/:categoryid',
        component: EditCate
    },
    //tags
    {
        path : '/admin/tags',
        component : ListTag
    },
    // roles
    {
        path : '/admin/roles',
        component : ListRole
    },
    // users
    {
        path : '/admin/users',
        component : ListUser
    }
]