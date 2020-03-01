<template>
    <div>
        <nav class="nav-main">
            <router-link to="/" :class="{'is-selected': path === '/'}">home</router-link>
            <router-link to="/product" :class="{'is-selected': path === '/product'}">product</router-link>
        </nav>

        <router-view class="content"/>
    </div>
</template>

<script>
    export default {
        name: "App",

        computed: {
            path() {
                return this.$route.path;
            }
        }
    }
</script>

<style scoped>

</style>
