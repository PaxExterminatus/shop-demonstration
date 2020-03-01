<template>
    <div class="page">
        <template v-if="model">
            <div class="product" >
                <div class="product-gallery">
                    <img
                        class="gallery-img"
                        v-for="img of model.images"
                        :src="img"
                        :alt="model.name"
                    >
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ProductPage",

        data(){
            return {
                /**
                 * @type {{
                 *     name: string,
                 *     price: {
                 *         current: number,
                 *         old: number,
                 *     },
                 *     sizes: string[],
                 *     colors: string[],
                 *     text: string,
                 *     images: string[]
                 * }}
                 */
                model: null,
            }
        },

        created() {
            axios.get('/api/clothing')
                .then( (resp) => {
                    this.model = resp.data
                });
        }
    }
</script>

<style lang="scss">
    .product-gallery {
        display: flex;
        flex-direction: column;
        gap: 15px;
        .gallery-img {
            width: 60px;
            height: 75px;
        }
    }
</style>
