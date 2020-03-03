<template>
    <div class="application">
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
            <router-view class="page container"/>
        </keep-alive>

        <footer class="footer-main">

            <div class="container">
                <div class="footer-main-info">
                    <div class="footer-main-links">
                        <label>Информация</label>
                        <a>Доставка</a>
                        <a>Оплата</a>
                        <a>Возврат</a>
                        <a>О нас</a>
                        <a>Контакты</a>
                    </div>

                    <div class="footer-main-links">
                        <label>O Nike</label>
                        <a>Новости</a>
                        <a>Карьера</a>
                        <a>Инвесторам</a>
                        <a>Забота об окружающей среде</a>
                    </div>

                    <div class="footer-main-icons">
                        <div class="icons">
                            <icon :w="40" :h="40" name="instagram"/>
                            <icon :w="31" :h="18" name="vk"/>
                            <icon :w="40" :h="40" name="facebook"/>
                        </div>
                    </div>
                </div>

                <div class="footer-main-copy">
                    <div class="copy-rights">© Nike, Inc., 2020 Все права защищены.</div>
                    <div>Каталог</div>
                    <div>Условия использования</div>
                    <div>Условия продажи</div>
                    <div>Конфиденциальность и файлы cookie</div>
                </div>
            </div>

        </footer>
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
