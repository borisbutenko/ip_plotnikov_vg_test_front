<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    required: {
        type: Boolean,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    },
    children: {
        type: Array,
        required: true,
    },
})
</script>

<template>
<div
        class="
            p-[15px] w-full
            flex items-center gap-x-[20px]
            border border-solid border-gray-400
            t-tree-item
        ">
    <t-title level="4">
        {{ label }}
    </t-title>

    <span v-if="tags.length" class="inline-flex gap-x-[10px]">
        <i
                v-for="tag in tags"
                :key="tag"
                :style="{ backgroundColor: tag }"
                class="w-[15px] h-[15px] rounded-[50%]"/>
    </span>

    <t-text v-if="required" class="text-red-500">
        Обязательный
    </t-text>

    <t-text v-if="text" class="text-gray-400">
        {{ text }}
    </t-text>
</div>
</template>
