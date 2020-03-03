<template>
<div class="popup-full-screen" v-if="value && component" @mousedown.self="close">
    <div class="popup-container">
        <div class="popup-component">
            <component :is="component"/>
        </div>
    </div>
</div>
</template>

<script>
    const bodyScrollLock = require('body-scroll-lock');
    const disableBodyScroll = bodyScrollLock.disableBodyScroll;
    const enableBodyScroll = bodyScrollLock.enableBodyScroll;

    export default {
        props: {
            component: {
                type: String,
                default: '',
            },
            value: {
                type: Boolean,
                default: false,
            }
        },

        watch: {
            value(val) {
                if (val) {
                    disableBodyScroll(document.body);
                } else {
                    enableBodyScroll(document.body);
                }
            }
        },

        methods:{
            close() {
                this.$emit('input', false);
            },
        },
    }
</script>

<style lang="scss" scoped>
    .popup-full-screen {
        padding: 5px;
        width: 100vw;
        height: 100%;
        position: fixed;
        background-color: rgba(0, 0, 0, .5);
        z-index: 999;
        display: flex;
        align-items: center;
        flex-direction: column;
        overflow-y: auto;

        .popup-actions {
            position: sticky;
            top: 0;
        }

        .popup-container {
            margin: auto auto;
        }

        .popup-component {
            background-color: #ffffff;
            .grid-cards {
                justify-content: center;
            }
        }
    }

</style>
