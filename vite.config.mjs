import { join } from "node:path"
import { cwd } from "node:process"

import { defineConfig } from "vite"

import autoprefixer from "autoprefixer"
import tailwindcss from "tailwindcss"

import Vue from "@vitejs/plugin-vue"

import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

import DynamicImport from "vite-plugin-dynamic-import"
import VueInheritAttrs from "vite-plugin-vue-setup-inherit-attrs"

export default defineConfig({
    css: {
        postcss: {
            plugins: [
                tailwindcss,
                autoprefixer,
            ],
        },
    },

    resolve: {
        alias: [
            {
                find: "~",
                replacement: join(cwd(), "src"),
            },
        ],
        extensions: [
            ".mjs",
            ".vue",
            ".sass",
            ".scss",
        ],
    },

    plugins: [
        AutoImport({
            eslintrc: {
                enabled: true,
            },
            imports: [
                "vue",
            ],
            resolvers: [
                ElementPlusResolver(),
            ],
        }),
        Components({
            dirs: [
                "src/components",
                "src/layouts",
            ],
            resolvers: [
                ElementPlusResolver({
                    importStyle: "sass",
                }),
            ],
        }),
        DynamicImport(),
        Vue(),
        VueInheritAttrs(),
    ],
})
