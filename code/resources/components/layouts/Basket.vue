<template>
    <div class="basket">
        <div class="site-title t2">Твоя корзина</div>

        <div class="basket-content">
            <div class="basket-item" v-for="product of products">
                <img class="item-cover" :src="product.cover" :alt="product.name">

                <div class="item-info">
                    <div class="item-name">{{product.name}}</div>
                    <div class="item-size">{{product.size}}</div>
                    <div class="item-count">
                        <input-count v-model="product.count"/>
                        <div>{{product.price}} ₽</div>
                    </div>
                </div>

            </div>
        </div>

        <div class="basket-total">
            <span>Предварительный итог:</span>
            <span>{{basket.sum}} ₽</span>
        </div>
        <div class="site-btn type-black">Оформить заказ</div>
    </div>
</template>

<script>
    import InputCount from '../inputs/InputCount'

    export default {
        name: 'Basket',

        components: {
            InputCount,
        },

        data() {
            return {
                sum: 0,
            }
        },

        computed: {
            basket() {
                return this.$store.state.basket;
            },
            products() {
                return this.$store.state.basket.products;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../sass/mixins';

    .basket {
        display: flex;
        flex-direction: column;
        width: 548px;
        height: 100%;
        background-color: #fff;
        align-self: flex-end;
        padding: 40px;

        .basket-content {
            flex: 1;
        }

        .item-info {
            flex: 1;
        }

        .basket-item {
            display: flex;
            padding-bottom: 41px;
            margin-top: 44px;
            border-bottom: $border-separator;

            .item-cover {
                width: 79px;
                height: 114px;
                margin-right: 23px;
            }

            .item-size {
                margin-bottom: 24px;
            }

            .item-count {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }

        .basket-total {
            display: flex;
            justify-content: space-between;
            margin: 32px 0;
        }

        .site-btn {
            height: 56px;
        }

        .product-counter {
            width: 107px;
            height: 40px;
        }
    }
</style>
