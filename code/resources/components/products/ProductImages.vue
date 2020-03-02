<template>
    <div class="product-images">
        <div class="product-gallery">
            <img
                class="image"
                v-for="(url, idx) of product.images"
                :src="url"
                :alt="product.name"
                @click="selected = idx"
            >
        </div>

        <div class="product-cover">
            <img class="image" :src="image" :alt="product.name">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductImages',
        props: {
            /**
             * @type {{images: string[], name: string}}
             */
            product: {
                type: Object,
                required: true,
            }
        },

        data() {
            return {
                selected: 0,
            }
        },

        computed: {
            image() {
                return this.product.images[this.selected];
            },
        }
    }
</script>
