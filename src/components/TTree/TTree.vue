<script setup>
defineProps({
    data: {
        type: Array,
        required: true,
    },
})

let search = ref("")
let treeRef = ref(null)

watch(search, val => treeRef.value?.filter(val))

function filterNode(val, data) {
    return !val || data.label.includes(val)
}
</script>

<template>
<t-tree-search
        v-model="search"
        class="max-w-[350px]"/>

<el-tree
        :ref="treeRef"
        :data="data"
        :allow-drop="allowDrop"
        :filter-node-method="filterNode"
        class="t-tree"
        default-expand-all
        draggable>
    <template #default="{ data: node }">
        <t-tree-item v-bind="node"/>
    </template>
</el-tree>
</template>

<style lang="sass" scoped>
.t-tree
    :deep(.el-tree-node__content)
        height: auto

    //:deep(.el-tree-node__children) .t-tree-item
    //    border-top: 0
    //    border-bottom: 0

    //:deep(.el-tree-node) + .el-tree-node .t-tree-item
    //    border-top: 0
</style>
