import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@stylistic': stylistic,
      vue: pluginVue,
    },
    rules: {
      'no-unused-vars': 'warn',
      '@stylistic/indent': ['error', 2], // 將 tabWidth 設定為 2
      '@stylistic/semi': ['error', 'always'], // 句尾使用分號
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'], // 強制使用單引號
      '@stylistic/max-len': [
        'error',
        {
          code: 80, // 最大長度為80
          ignoreComments: true, // 忽略註解
          ignoreUrls: true, // 忽略包含URL
          ignoreStrings: true, // 忽略包含字串
          ignorePattern: '^\\s*class\\s*=\\s*".*"$', // 忽略class属性
        },
      ],
      '@stylistic/object-curly-spacing': ['error', 'always'], // 在物件的前後加空格
      '@stylistic/object-property-newline': [
        'error',
        { allowAllPropertiesOnSameLine: false },
      ], // 物件屬性必須換行
      'vue/html-indent': ['error', 2], // Vue 文件的縮排設定
      'vue/max-attributes-per-line': ['error', { singleline: 1,
        multiline: 1 }], // 控制 Vue 文件中每行屬性的數量
      // 'vue/multi-word-component-names': 'off',
    },
    ignores: ['src/components/ui/**/*'],
  },
  // JavaScript 推薦設定
  {
    ...pluginJs.configs.recommended,
  },
  // TypeScript 推薦設定
  {
    ...tseslint.configs.recommended[0],
    rules: {
      ...tseslint.configs.recommended[0].rules,
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  // Vue 推薦設定
  ...pluginVue.configs['flat/essential'],

  // 對 Vue 文件使用特定的解析器
  {
    files: ['src/**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  // 忽略sandcn-vue建立的檔案
  {
    files: ['src/components/ui/**/*.{js,vue}'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': 'off',
    },
  },
];
