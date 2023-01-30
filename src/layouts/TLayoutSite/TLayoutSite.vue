<template>
<el-container class="min-h-screen text-primary leading-none font-poppins">
    <el-header>
        <slot name="header"/>
    </el-header>

    <el-main class="overflow-x-hidden">
        <slot/>
    </el-main>

    <el-footer>
        <slot name="footer"/>
    </el-footer>
</el-container>
</template>
