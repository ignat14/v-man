<template>
    
    <div class="navbar-wrap">

        <div class="navbar">

            <i class="fas fa-angle-left" :class="{ 'fa-angle-right' : !sidebar }" @click="sidebar = !sidebar" ></i>

            <router-link class="link" to="#" ><i class="fas fa-cog"></i></router-link>

            <router-link class="link" :to="{ name: 'projects' }" ><i class="fas fa-sliders-h"></i></router-link>

            <router-link class="link" :to="{ name: 'users' }" ><i class="fas fa-users-cog"></i></router-link>

            <i></i>

            <i class="fas fa-search" @click="userForm = !userForm" ></i>

            <i class="fas fa-power-off" @click="logout" ></i>

        </div>

    </div>

</template>

<script>

    export default {

        name: 'navbar',

        computed: {

            sidebar: {
                get() { return this.$store.state.sidebar },
                set(sidebar) { this.$store.commit('updateSidebar', sidebar) }
            },
            userForm: {
                get() { return this.$store.state.forms.user },
                set(userForm) { this.$store.commit('updateUserForm', userForm) }
            }

        },

        methods: {

            logout() {
                this.$store.dispatch('logout')
            }

        }
    }

</script>

<style scoped>

    .navbar-wrap {

        padding: 4px;
        padding-bottom: 2px;

        grid-column: 2/3;
    }

    .navbar {

        font-size: 20px;

        width: 100%;
        height: 100%;

        display: grid;
        grid-template-columns: 80px 80px 80px 80px auto 80px 80px;
        align-items: center;

        background-color: white;
    }

    .link {

        text-align: center;
    }

    .router-link-active i {

        color: var(--darkgray);
    }

</style>
