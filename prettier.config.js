module.exports = {
    // 一行最多80个字符
    printWidth: 80,
    // 使用4个空格缩进
    tabWidth: 4,
    // 不使用tab缩进，而使用空格
    useTabs: false,
    // 行尾需要分号结尾
    semi: true,
    // 使用单引号代替双引号
    singleQuote: false,
    // 对象的key仅在必要时使用引号
    quoteProps: "as-needed",
    // jsx不使用单引号而使用双引号
    jsxSingleQuote: false,
    // 末尾使用逗号
    trailingComma: "all",
    // 大括号的首尾进行空格隔开
    bracketSpacing: true,
    // jsx标签的反尖括号需要换行
    jsxBracketSameLine: false,
    // 箭头函数只在有一个参数的时候也需要加上括号
    arrowParens: "always",
    // 每个文件格式化的范围是文件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要写文件开头的 @prettier
    requirePragma: false,
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
    // 使用默认的折行标准
    proseWrap: "preserve",
    // 根据显示样式决定html 要不要折行
    htmlWhitespaceSensitivity: "css",
    // 换行符使用lf
    endOfLine: "auto"
}
