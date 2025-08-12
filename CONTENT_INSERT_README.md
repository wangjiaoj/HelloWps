# WPS加载项 - 内容插入功能说明

## 概述

本项目在原有WPS加载项基础上，新增了丰富的内容插入功能，包括表格、图片、标题、段落等固定样式内容的插入。

## 新增功能

### 1. 内容插入工具类 (ContentInsert)

位置：`src/components/js/contentInsert.js`

提供以下核心功能：

#### 表格插入
- `insertTable(rows, columns, left, top, width, height)`
- 支持自定义行数、列数、位置和大小
- 自动填充示例内容
- 应用网格型样式

#### 图片插入
- `insertImage(imagePath, left, top, width, height)`
- 支持本地和网络图片路径
- 可设置图片大小和位置
- 自动设置四周型环绕

#### 标题插入
- `insertHeading1(title)` - 插入一级标题
- `insertHeading2(title)` - 插入二级标题  
- `insertHeading3(title)` - 插入三级标题
- 自动应用对应标题样式

#### 段落插入
- `insertParagraph(text)` - 插入正文段落
- 自动应用正文样式

#### 其他功能
- `insertPageBreak()` - 插入分页符
- `insertHeader(headerText)` - 插入页眉
- `insertFooter(footerText)` - 插入页脚
- `insertTableOfContents()` - 插入目录

### 2. 内容插入界面组件 (ContentInsert.vue)

位置：`src/components/ContentInsert.vue`

提供用户友好的操作界面：

- **表格插入区域**：配置行数、列数、宽度、高度
- **图片插入区域**：设置图片路径、尺寸
- **标题插入区域**：输入标题文本，选择标题级别
- **段落插入区域**：输入段落内容
- **其他功能区域**：分页符、页眉页脚、目录等
- **快速插入示例**：一键插入示例文档、表格、结构

### 3. 路由配置

新增路由：`/content-insert`

```javascript
{
  path: '/content-insert',
  name: '内容插入',
  component: () => import('../components/ContentInsert.vue')
}
```

### 4. Ribbon按钮集成

在ribbon.js中新增按钮：

- 按钮ID：`btnContentInsert`
- 标签：内容插入
- 图标：`images/4.svg`
- 功能：打开内容插入任务窗格

## 使用方法

### 1. 通过Ribbon按钮

1. 在WPS中加载该加载项
2. 点击"内容插入"按钮
3. 在任务窗格中使用各种插入功能

### 2. 通过代码调用

```javascript
import ContentInsert from './js/contentInsert.js'

const contentInsert = new ContentInsert()

// 插入3x3表格
contentInsert.insertTable(3, 3, 100, 100, 400, 200)

// 插入图片
contentInsert.insertImage('/path/to/image.jpg', 100, 100, 200, 150)

// 插入标题
contentInsert.insertHeading1('文档标题')
contentInsert.insertHeading2('章节标题')
```

### 3. 快速插入示例

- **插入示例文档**：包含标题、段落等完整结构
- **插入示例表格**：4x3的示例表格
- **插入文档结构**：展示标题层级组织方式

## 技术特点

### 1. 错误处理
- 完善的try-catch错误处理
- 用户友好的错误提示
- 操作状态反馈

### 2. 响应式设计
- 支持移动端和桌面端
- 自适应布局
- 美观的UI设计

### 3. 配置灵活
- 支持自定义参数
- 实时预览配置
- 参数范围限制

## 文件结构

```
src/
├── components/
│   ├── js/
│   │   └── contentInsert.js      # 内容插入工具类
│   ├── ContentInsert.vue         # 内容插入界面组件
│   └── ribbon.js                 # 更新的ribbon配置
├── router/
│   └── index.js                  # 更新的路由配置
└── ...
public/
└── images/
    ├── 4.svg                     # 内容插入按钮图标
    └── sample-image.svg          # 示例图片
```

## 注意事项

1. **文档要求**：使用前需要先打开WPS文档
2. **图片路径**：图片插入需要提供有效的图片路径
3. **样式依赖**：标题样式依赖于WPS内置样式
4. **权限要求**：某些操作可能需要文档编辑权限

## 扩展建议

1. **更多内容类型**：可添加图表、公式、超链接等
2. **模板系统**：支持保存和加载常用插入配置
3. **批量操作**：支持批量插入多个元素
4. **样式自定义**：允许用户自定义插入内容的样式

## 兼容性

- WPS版本：支持WPS Office 2019及以上版本
- 浏览器：支持现代浏览器（Chrome、Firefox、Edge等）
- 操作系统：Windows、macOS、Linux

## 更新日志

- v1.0.0：初始版本，包含基础内容插入功能
- 支持表格、图片、标题、段落等插入
- 提供完整的用户界面和操作反馈


