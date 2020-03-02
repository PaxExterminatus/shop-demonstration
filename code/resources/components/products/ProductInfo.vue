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
                <div class="product-btn" :class="{selected: input.size === value}" v-for="value of product.sizes" @click="input.size = value">
                    {{value}}
                </div>
            </div>
        </div>

        <div class="product-colors">
            <div class="product-label">Цвет:</div>
            <div class="product-btn-panel">
                <div class="product-btn" :class="{selected: input.color === value}" v-for="value of product.colors" @click="input.color = value">
                    {{value}}
                </div>
            </div>
        </div>

        <div class="product-adder" v-if="product.stock">
            <div class="product-counter">
                <icon class="counter-btn" @click.native="countInput--" :w="12" :h="12" name="minus"/>
                {{input.count}}
                <icon class="counter-btn" @click.native="countInput++" :w="12" :h="12" name="plus"/>
            </div>

            <div class="adder-btn">
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
export default {
    name: "ProductInfo",

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
            input: {
                size: null,
                color: null,
                count: 1,
            },
        }
    },

    computed: {
        countInput: {
            get () {
                return this.input.count;
            },
            set (val) {
                this.input.count = !val || val < 1 ? 1 : val;
            }
        }
    },
}
</script>
