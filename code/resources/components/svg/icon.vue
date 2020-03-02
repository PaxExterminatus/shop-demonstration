<template>
    <svg :width="w" :height="h" :viewBox="`0 0 ${w} ${h}`">
        <use :href="`/icons.svg#${name}`"/>
    </svg>
</template>

<script>
    export default {
        name: "icon",

        props: {
            w: {
                type: Number,
                required: true,
            },
            h: {
                type: Number,
                required: true,
            },
            name: {
                type:String,
                required: true,
            }
        }
    }
</script>
