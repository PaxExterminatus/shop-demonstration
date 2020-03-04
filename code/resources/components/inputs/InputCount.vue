<template>
    <div class="product-counter">
        <icon class="counter-btn" @click.native="input--" :w="12" :h="12" name="minus"/>
        <span>{{input}}</span>
        <icon class="counter-btn" @click.native="input++" :w="12" :h="12" name="plus"/>
    </div>
</template>

<script>
export default {
    name: 'InputCount',

    props: {
        value: {
            type: Number,
            default: 1,
        },
    },

    data() {
        return {
            count: this.value,
        }
    },

    watch: {
        value(value) {
            this.count = value;
        }
    },

    computed: {
        input: {
            get () {
                return this.count;
            },
            set (value) {
                const num = !value || value < 1 ? 1 : value;

                if (this.count !== num) {
                    this.count = num;
                    this.$emit('input', num);
                    this.$forceUpdate();
                }
            }
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
