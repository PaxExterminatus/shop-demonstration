<template>
    <div>
        <header class="site-header">
            <router-link to="/">
                <icon :w="78" :h="28" name="logo"/>
            </router-link>

            <nav class="nav-top">
                <router-link class="link" to="/clothing">
                    Одежда <icon :w="13" :h="8" name="arrow"/>
                </router-link>
                <router-link class="link" to="/accessories">
                    Аксессуары <icon :w="13" :h="8" name="arrow"/>
                </router-link>
                <router-link class="link" to="/collections">
                    Коллекции <icon :w="13" :h="8" name="arrow"/>
                </router-link>
            </nav>

            <div class="nav-actions">
                <icon :w="26" :h="26" name="find"/>
                <icon :w="31" :h="22" name="basket"/>
            </div>
        </header>

        <keep-alive>
            <router-view class="container"/>
        </keep-alive>
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

<style lang="scss">

    .nav-actions {

    }
</style>
