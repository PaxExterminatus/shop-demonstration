<template>
    <div class="basket">
        <div class="site-title t2">Твоя корзина</div>

        <div class="basket-content">

        </div>

        <div class="basket-total">
            <span>Предварительный итог:</span>
            <span>{{summary}}</span>
        </div>
        <div class="site-btn type-black">Оформить заказ</div>
    </div>
</template>

<script>
    export default {
        name: "Basket",

        data() {
            return {
                summary: 0,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .basket {
        display: flex;
        flex-direction: column;
        width: 548px;
        height: 100vh;
        background-color: #fff;
        align-self: flex-end;
        padding: 40px;

        .basket-content {
            flex: 1;
        }

        .basket-total {
            display: flex;
            justify-content: space-between;
            margin-bottom: 32px;
        }
        .site-title {
            margin-bottom: 50px;
        }

        .site-btn {
            height: 56px;
        }
    }
</style>
