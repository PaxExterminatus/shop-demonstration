<template>
    <div class="product-info">
        <slot></slot>
        <div class="site-title t1">
            {{product.name}}
        </div>

        <div class="info-prices">
            <div class="price-old" v-if="product.price.old">{{product.price.old}} ₽</div>
            <div class="price-current" v-if="product.price.current">{{product.price.current}} ₽</div>
        </div>

        <div class="product-sizes">
            <div class="product-label">Размер:</div>
            <div class="product-btn-panel">
                <div class="product-btn" :class="{selected: size === value}" v-for="value of product.sizes" @click="size = value">
                    {{value}}
                </div>
            </div>
        </div>

        <div class="product-colors">
            <div class="product-label">Цвет:</div>
            <div class="product-btn-panel">
                <div class="product-btn" :class="{selected: color === value}" v-for="value of product.colors" @click="color = value">
                    {{value}}
                </div>
            </div>
        </div>

        <div class="product-adder" v-if="product.stock">
            <input-count v-model="count"/>

            <div class="site-btn type-black" @click="addProduct">
                В корзину
            </div>
        </div>

        <div v-else class="stock-false">
            Товар закончился
        </div>

        <div v-html="product.text"></div>
    </div>
</template>

<script>
    import InputCount from '../inputs/InputCount'
    export default {
        name: 'ProductInfo',

        components: {
            InputCount
        },

        props: {
            /**
             * @type {{
             * name: string,
             * text: string,
             * price: {current: number, old: number},
             * sizes: string[],
             * colors: string[],
             * stock: boolean,
             * }}
             */
            product: {
                type: Object,
                required: true,
            }
        },

        data() {
            return {
                size: null,
                color: null,
                count: 1,
            }
        },

        computed: {
            basket() {
                return this.$store.state.basket;
            },
        },

        methods: {
            addProduct() {
                this.basket.addProduct(this.product);
            }
        }
    }
</script>
