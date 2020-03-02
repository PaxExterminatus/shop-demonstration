<template>
    <div>
        <header class="site-header">
            <router-link to="/">
                <icon :w="78" :h="28" name="logo"/>
            </router-link>

            <nav class="nav-top">
                <router-link to="/clothing">
                    Одежда <icon :w="13" :h="8" name="arrow"/>
                </router-link>
                <router-link to="/accessories">
                    Аксессуары <icon :w="13" :h="8" name="arrow"/>
                </router-link>
                <router-link to="/collections">
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
    .site-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 121px;
        border: solid 1px;
        margin-bottom: 41px;
        padding: 0 45px;
    }
    .nav-top {

    }
    .nav-actions {

    }
</style>
