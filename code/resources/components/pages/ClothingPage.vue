<template>
    <div class="page-product">
        <div class="product" v-if="model">

            <div class="product-images">
                <div class="product-gallery">
                    <img
                        class="gallery-img"
                        v-for="img of model.images"
                        :src="img"
                        :alt="model.name"
                    >
                </div>

                <div class="product-cover">
                    <img class="cover-img" :src="model.images[0]" :alt="model.name">
                </div>
            </div>

            <div class="product-info">
                <div class="site-way">Главная / Одежда/ Худи и свитшоты / Худи/ Свитшот Nike</div>
                <div class="title t1">
                    {{model.name}}
                </div>
                <div class="info-prices">
                    <div class="price-old" v-if="model.price.old">{{model.price.old}} ₽</div>
                    <div class="price-current" v-if="model.price.current">{{model.price.current}} ₽</div>
                </div>

                <div class="product-sizes">
                    <div class="product-label">Размер:</div>
                    <div class="product-btn-panel">
                        <div class="product-btn" :class="{selected: input.size === value}" v-for="value of model.sizes" @click="input.size = value">
                            {{value}}
                        </div>
                    </div>
                </div>

                <div class="product-colors">
                    <div class="product-label">Цвет:</div>
                    <div class="product-btn-panel">
                        <div class="product-btn" :class="{selected: input.color === value}" v-for="value of model.colors" @click="input.color = value">
                            {{value}}
                        </div>
                    </div>
                </div>

                <div class="product-adder" v-if="model.stock">

                    <div class="product-counter">
                        <span class="counter-btn" @click="countInp--">
                             <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="5" width="12" height="2" fill="#777777"/>
                            </svg>
                        </span>
                        {{input.count}}
                        <span class="counter-btn" @click="countInp++">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="5" width="12" height="2" fill="#777777"/>
                                <rect x="5" y="12" width="12" height="2" transform="rotate(-90 5 12)" fill="#777777"/>
                            </svg>
                        </span>
                    </div>

                    <div class="adder-btn">
                        В корзину
                    </div>
                </div>

                <div v-else class="stock-false">
                    Товар закончился
                </div>

                <div v-html="model.text"></div>
            </div>
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
    import axios from 'axios'
    export default {
        name: "ProductPage",

        data(){
            return {
                /**
                 *
                 */
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

        computed: {
            countInp: {
                get () {
                    return this.input.count;
                },
                set (val) {
                    this.input.count = !val || val < 1 ? 1 : val;
                }
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
    .stock-false {
        font-size: 20px;
        line-height: 130%;
        color: #999999;
    }
    .product-images {
        display: flex;
        gap: 40px;
    }
    .title {
        font-weight: bold;
        line-height: 120%;
        &.t2 {
            font-size: 40px;
        }
        &.t2 {
            font-size: 32px;
        }
    }

    .product {
        font-family: Aeroport, serif;
        color: #000;
        display: flex;
        .product-label {
            font-size: 18px;
        }
        .product-gallery {
            display: flex;
            flex-direction: column;
            gap: 15px;
            .gallery-img {
                width: 60px;
                height: 75px;
                object-fit: cover;
            }
        }

        .product-cover {
            width: 460px;
            max-height: 700px;
            .cover-img {
                max-width: 100%;
                max-height: 100%;
                object-fit: cover;
            }
        }

        .product-info {
            .info-prices {
                display: flex;
                gap: 16px;
                .price-old {
                    font-size: 24px;
                    line-height: 130%;
                    text-decoration-line: line-through;
                    color: #999999;
                }
                .price-current {
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 130%;
                }
            }
        }



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

        .product-sizes {
            .product-btn {
                text-transform: uppercase;
            }
        }

        .product-adder {
            display: flex;
            gap: 16px;
            & > * {
                display: flex;
                padding: 20px;
                border-radius: 8px;
            }
            .adder-btn {
                cursor: pointer;
                justify-content: center;
                align-items: center;
                background: #000;
                color: #fff;
                width: 202px;
            }
        }

        .product-counter {
            justify-content: space-between;
            width: 161px;
            background: #F4F4F4;
            .counter-btn {
                cursor: pointer;
            }
        }

        @media screen and (max-width: 1024px) {
            flex-direction: column;
            .product-images {
                justify-content: center;
            }
        }

        @media screen and (max-width: 768px) {
            .product-images {
                flex-direction: row-reverse;
            }
        }

        @media screen and (max-width: 375px) {
            .product-images {
                flex-direction: column-reverse;
            }
            .product-gallery {
                flex-direction: row;
            }
            .product-cover {
                width: 334px;
                height: 509px;
            }
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
