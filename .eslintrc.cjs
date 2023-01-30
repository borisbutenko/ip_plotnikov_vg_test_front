module.exports = {
    root: true,

    env: {
        node: true,
    },

    parser: "vue-eslint-parser",

    parserOptions: {
        parser: "@typescript-eslint/parser",
    },

    plugins: [
        "@typescript-eslint/eslint-plugin",
    ],

    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-strongly-recommended",
        "plugin:vue/vue3-recommended",
        "plugin:vue/vue3-essential",
        "@logux/eslint-config/esm",
        ".eslintrc-auto-import.json",
    ],

    ignorePatterns: [
        "auto-imports.d.ts",
        "components.d.ts",
    ],

    rules: {
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/await-thenable": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-invalid-this": "off",
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unnecessary-condition": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",

        "@typescript-eslint/naming-convention": ["error",
            {
                selector: "default",
                format: ["UPPER_CASE", "PascalCase", "camelCase"],
                filter: {
                    regex: "^(_?_)",
                    match: false,
                },
            },
            {
                selector: "variable",
                modifiers: ["const"],
                format: ["UPPER_CASE"],
            },
            {
                selector: "objectLiteralProperty",
                format: null,
            },
        ],

        "consistent-return": "off",
        "no-eval": "off",
        "no-invalid-this": "off",
        "no-new-func": "off",
        "no-return-assign": "off",
        "no-void": "off",
        "n/no-unpublished-require": "off",
        "n/no-unsupported-features/es-syntax": "off",
        "n/no-unsupported-features/es-builtins": "off",
        "n/no-unsupported-features/node-builtins": "off",

        semi: "error",

        "eol-last": "error",
        "key-spacing": "error",
        "no-param-reassign": "error",
        "no-multiple-empty-lines": "error",

        curly: ["error", "multi", "consistent"],
        indent: ["error", 4, { SwitchCase: 1 }],
        quotes: ["error", "double"],

        "arrow-parens": ["error", "as-needed"],
        "comma-dangle": ["error", "always-multiline"],
        "object-curly-spacing": ["error", "always"],
        "quote-props": ["error", "as-needed"],

        "sort-imports": ["error", {
            allowSeparatedGroups: true,
            ignoreCase: false,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: [
                "none",
                "all",
                "multiple",
                "single",
            ],
        }],

        "max-len": ["error", {
            code: 120,
            ignoreComments: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
        }],

        "operator-linebreak": ["error", "after", {
            overrides: {
                "?": "before",
                ":": "before",
            },
        }],

        "space-before-function-paren": ["error", {
            anonymous: "always",
            named: "never",
            asyncArrow: "always",
        }],

        "import/extensions": "off",
        "import/no-named-default": "off",

        "import/order": ["error", {
            "newlines-between": "always-and-inside-groups",
            warnOnUnassignedImports: true,
            groups: [
                "builtin",
                "external",
                "internal",
                "parent",
                "sibling",
                "index",
                "object",
                "type",
            ],
        }],

        "vue/multi-word-component-names": "off",
        "vue/require-name-property": "off",
        "vue/require-default-prop": "off",
        "vue/require-prop-types": "off",
        "vue/no-v-text-v-html-on-component": "off",
        "vue/no-v-html": "off",

        "vue/block-tag-newline": "error",
        "vue/match-component-file-name": "error",
        "vue/no-empty-component-block": "error",
        "vue/no-potential-component-option-typo": "error",
        "vue/prop-name-casing": "error",
        "vue/no-reserved-component-names": "error",
        "vue/no-restricted-component-options": "error",
        "vue/order-in-components": "error",
        "vue/padding-line-between-blocks": "error",
        "vue/html-self-closing": "error",
        "vue/singleline-html-element-content-newline": "error",

        "vue/component-name-in-template-casing": ["error", "kebab-case"],

        "vue/script-indent": ["error", 4, {
            baseIndent: 0,
            switchCase: 1,
        }],

        "vue/html-indent": ["error", 4, {
            attribute: 2,
            baseIndent: 0,
            closeBracket: 0,
            alignAttributesVertically: true,
        }],

        "vue/html-closing-bracket-spacing": ["error", {
            startTag: "never",
            endTag: "never",
            selfClosingTag: "never",
        }],

        "vue/html-closing-bracket-newline": ["error", {
            singleline: "never",
            multiline: "never",
        }],

        "vue/max-attributes-per-line": ["error", {
            singleline: { max: 3 },
            multiline: { max: 1 },
        }],

        "vue/multiline-html-element-content-newline": ["error", {
            ignoreWhenEmpty: true,
            allowEmptyLines: true,
        }],
    },
}
