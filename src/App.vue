<script setup>
import locale from "element-plus/es/locale/lang/ru"

import documentsData from "~/data/documents.json"

let documents = reactive(documentsData)
</script>

<template>
<el-config-provider :locale="locale">
    <t-layout-site>
        <template #header>
            <t-block>
                <t-title level="3">
                    Документы
                </t-title>
            </t-block>
        </template>

        <t-block tag="section">
            <t-tree :data="documents"/>
        </t-block>
    </t-layout-site>
</el-config-provider>
</template>

<style lang="sass" src="~/styles/index"/>
