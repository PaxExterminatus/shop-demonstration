<template>
<div class="popup-full-screen" v-if="value && component" @mousedown.self="close">
    <component :is="component"/>
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
        width: 100vw;
        height: 100%;
        position: fixed;
        background-color: rgba(0, 0, 0, .5);
        z-index: 999;
        display: flex;
        align-items: center;
        flex-direction: column;
        overflow-y: auto;

        @media screen and (max-width: 375px) {
            margin-top: 60px;
        }
    }

</style>
