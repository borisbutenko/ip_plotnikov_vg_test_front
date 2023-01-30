<script setup>
let props = defineProps({
    level: {
        type: [String, Number],
        required: true,
        validator: val => [1, 2, 3, 4, 5].includes(Number(val)),
    },
})

let classes = {
    1: "text-[64px] leading-[64px]",
    2: "text-[48px] leading-[48px]",
    3: "text-[32px] leading-[32px]",
    4: "text-[24px] leading-[24px]",
    5: "text-[16px] leading-[16px]",
}

let tTitleComponent = computed(() => "h" + props.level)
let tTitleClass = computed(() => `${classes[props.level]} font-bold t-title`)
</script>

<template>
<component :is="tTitleComponent" :class="tTitleClass">
    <slot/>
</component>
</template>

<style lang="sass" scoped>
.t-title :deep(.t-link)
    --el-link-font-size: inherit
    --el-link-font-weight: inherit
    --el-link-text-color: inherit
</style>
