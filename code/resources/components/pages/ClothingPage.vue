<template>
    <div class="page-product">
        <div class="product" v-if="model">

            <product-images :product="model"/>
            <product-info :product="model">
                <div class="site-way">Главная / Одежда/ Худи и свитшоты / Худи/ Свитшот Nike</div>
            </product-info>
        </div>

        <div class="see-more" v-if="more">
            <div class="title t2">Смотрите также</div>
            <div class="see-more-gallery">
                <div class="more-item" v-for="item of more">
                    <img class="more-img" :src="item.image" :alt="item.name">
                    <span class="more-name">{{item.name}}</span>
                    <span class="more-price">{{item.price}} ₽</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import ProductImages from '../products/ProductImages';
    import ProductInfo from '../products/ProductInfo';

    export default {
        name: "ProductPage",

        components: {
            ProductImages,
            ProductInfo,
        },

        data(){
            return {
                model: null,
                input: {
                    size: null,
                    color: null,
                    count: 1,
                },
                /**
                 * @type {{image: string, name: string, price: number}[]}
                 */
                more: null,
            }
        },

        created() {
            axios.get('/api/clothing')
                .then( (resp) => {
                    this.model = resp.data
                });

            axios.get('/api/more')
                .then( (resp) => {
                    this.more = resp.data
                });
        }
    }
</script>

<style lang="scss">
    @import '../../sass/mixins';

    .stock-false {
        font-size: 20px;
        line-height: 130%;
        color: #999999;
    }

    .product {
        color: #000;
        display: flex;
        padding-bottom: 74px;
        margin-bottom: 80px;
        border-bottom: $border-separator;
        .product-btn-panel {
            display: flex;
            gap: 11px;
        }

        .product-btn {
            $size: 52px;
            cursor: pointer;
            min-width: $size;
            height: $size;
            border: 1px solid #000000;
            box-sizing: border-box;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 15px 16px 16px 16px;
        }
        .product-btn.selected {
            background-color: #000;
            color: #fff;
        }

        @media screen and (max-width: 1024px) {
            flex-direction: column;
        }
    }

    .see-more {
        .see-more-gallery {
            display: flex;
            gap: 41px;
            .more-item {
                width: 359px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .more-img {
                height: 524px;
                object-fit: cover;
                max-width: 100%;
            }
            .more-name {
                font-size: 20px;
            }
            .more-price {
                font-size: 18px;
            }
        }
    }
</style>
