<script setup>
defineProps({
    tag: {
        type: String,
        default: "div",
    },
})
</script>

<template>
<component :is="tag" class="mx-auto max-w-[1376px] t-block">
    <slot/>
</component>
</template>
