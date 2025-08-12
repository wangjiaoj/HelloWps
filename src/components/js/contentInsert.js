/**
 * 内容插入工具类
 * 提供插入表格、图片、标题等固定样式内容的功能
 */

class ContentInsert {
  constructor() {
    this.app = window.Application
  }

  /**
   * 插入表格
   * @param {number} rows 行数
   * @param {number} columns 列数
   * @param {number} left 左边距
   * @param {number} top 上边距
   * @param {number} width 宽度
   * @param {number} height 高度
   */
  insertTable(rows = 3, columns = 3, left = 100, top = 100, width = 400, height = 200) {
    try {
      const doc = this.app.ActiveDocument
      if (!doc) {
        throw new Error('当前没有打开任何文档')
      }

      const selection = this.app.Selection
      if (!selection) {
        throw new Error('无法获取当前选择区域')
      }

      // 创建表格
      const table = doc.Tables.Add(selection.Range, rows, columns)
      
      // 设置表格位置和大小
      table.Left = left
      table.Top = top
      table.Width = width
      table.Height = height

      // 设置表格样式
      table.Style = '网格型'
      
      // 设置表格边框
      table.Borders.Enable = true
      
      // 填充表格内容示例
      for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
          const cell = table.Cell(i, j)
          if (cell && cell.Range) {
            cell.Range.Text = `单元格${i}-${j}`
          }
        }
      }

      return table
    } catch (error) {
      console.error('插入表格失败:', error)
      alert(`插入表格失败: ${error.message}`)
      return null
    }
  }

  /**
   * 插入图片
   * @param {string} imagePath 图片路径
   * @param {number} left 左边距
   * @param {number} top 上边距
   * @param {number} width 宽度
   * @param {number} height 高度
   */
  insertImage(imagePath, left = 100, top = 100, width = 200, height = 150) {
    try {
      const doc = this.app.ActiveDocument
      if (!doc) {
        throw new Error('当前没有打开任何文档')
      }

      const selection = this.app.Selection
      if (!selection) {
        throw new Error('无法获取当前选择区域')
      }

      // 插入图片
      const shape = doc.InlineShapes.AddPicture(
        imagePath,
        false,
        true,
        selection.Range
      )

      // 转换为浮动形状以便设置位置和大小
      const floatingShape = shape.ConvertToShape()
      
      // 设置位置和大小
      floatingShape.Left = left
      floatingShape.Top = top
      floatingShape.Width = width
      floatingShape.Height = height

      // 设置图片环绕方式
      floatingShape.WrapFormat.Type = 1 // 四周型环绕

      return floatingShape
    } catch (error) {
      console.error('插入图片失败:', error)
      alert(`插入图片失败: ${error.message}`)
      return null
    }
  }

  /**
   * 插入一级标题
   * @param {string} title 标题文本
   */
  insertHeading1(title = '一级标题') {
    try {
      const doc = this.app.ActiveDocument
      if (!doc) {
        throw new Error('当前没有打开任何文档')
      }

      const selection = this.app.Selection
      if (!selection) {
        throw new Error('无法获取当前选择区域')
      }

      // 插入标题文本
      selection.TypeText(title)
      
      // 应用一级标题样式
      selection.Style = '标题 1'
      
      // 换行
      selection.TypeParagraph()
      
      return true
    } catch (error) {
      console.error('插入一级标题失败:', error)
      alert(`插入一级标题失败: ${error.message}`)
      return false
    }
  }

  /**
   * 插入二级标题
   * @param {string} title 标题文本
   */
  insertHeading2(title = '二级标题') {
    try {
      const doc = this.app.ActiveDocument
      if (!doc) {
        throw new Error('当前没有打开任何文档')
      }

      const selection = this.app.Selection
      if (!selection) {
        throw new Error('无法获取当前选择区域')
      }

      // 插入标题文本
      selection.TypeText(title)
      
      // 应用二级标题样式
      selection.Style = '标题 2'
      
      // 换行
      selection.TypeParagraph()
      
      return true
    } catch (error) {
      console.error('插入二级标题失败:', error)
      alert(`插入二级标题失败: ${error.message}`)
      return false
    }
  }

  /**
   * 插入三级标题
   * @param {string} title 标题文本
   */
  insertHeading3(title = '三级标题') {
    try {
      const doc = this.app.ActiveDocument
      if (!doc) {
        throw new Error('当前没有打开任何文档')
      }

      const selection = this.app.Selection
      if (!selection) {
        throw new Error('无法获取当前选择区域')
      }

      // 插入标题文本
      selection.TypeText(title)
      
      // 应用三级标题样式
      selection.Style = '标题 3'
      
      // 换行
      selection.TypeParagraph()
      
      return true
    } catch (error) {
      console.error('插入三级标题失败:', error)
      alert(`插入三级标题失败: ${error.message}`)
      return false
    }
  }

  /**
   * 插入正文段落
   * @param {string} text 段落文本
   */
  insertParagraph(text = '这是一个正文段落。') {
    try {
      const doc = this.app.ActiveDocument
      if (!doc) {
        throw new Error('当前没有打开任何文档')
      }

      const selection = this.app.Selection
      if (!selection) {
        throw new Error('无法获取当前选择区域')
      }

      // 插入段落文本
      selection.TypeText(text)
      
      // 应用正文样式
      selection.Style = '正文'
      
      // 换行
      selection.TypeParagraph()
      
      return true
    } catch (error) {
      console.error('插入段落失败:', error)
      alert(`插入段落失败: ${error.message}`)
      return false
    }
  }

  /**
   * 插入分页符
   */
  insertPageBreak() {
    try {
      const doc = this.app.ActiveDocument
      if (!doc) {
        throw new Error('当前没有打开任何文档')
      }

      const selection = this.app.Selection
      if (!selection) {
        throw new Error('无法获取当前选择区域')
      }

      // 插入分页符
      selection.InsertBreak(2) // 2 表示分页符
      
      return true
    } catch (error) {
      console.error('插入分页符失败:', error)
      alert(`插入分页符失败: ${error.message}`)
      return false
    }
  }

  /**
   * 插入页眉
   * @param {string} headerText 页眉文本
   */
  insertHeader(headerText = '文档页眉') {
    try {
      const doc = this.app.ActiveDocument
      if (!doc) {
        throw new Error('当前没有打开任何文档')
      }

      // 获取页眉
      const header = doc.Sections(1).Headers(1)
      
      // 插入页眉文本
      header.Range.Text = headerText
      
      return true
    } catch (error) {
      console.error('插入页眉失败:', error)
      alert(`插入页眉失败: ${error.message}`)
      return false
    }
  }

  /**
   * 插入页脚
   * @param {string} footerText 页脚文本
   */
  insertFooter(footerText = '文档页脚') {
    try {
      const doc = this.app.ActiveDocument
      if (!doc) {
        throw new Error('当前没有打开任何文档')
      }

      // 获取页脚
      const footer = doc.Sections(1).Footers(1)
      
      // 插入页脚文本
      footer.Range.Text = footerText
      
      return true
    } catch (error) {
      console.error('插入页脚失败:', error)
      alert(`插入页脚失败: ${error.message}`)
      return false
    }
  }

  /**
   * 插入目录
   */
  insertTableOfContents() {
    try {
      const doc = this.app.ActiveDocument
      if (!doc) {
        throw new Error('当前没有打开任何文档')
      }

      const selection = this.app.Selection
      if (!selection) {
        throw new Error('无法获取当前选择区域')
      }

      // 插入目录
      const toc = doc.TablesOfContents.Add(
        selection.Range,
        true, // 使用标题样式
        1,    // 起始级别
        3,    // 结束级别
        false, // 不显示页码
        false, // 不右对齐页码
        '|',   // 制表符前导符
        true,  // 使用超链接
        false  // 不显示大纲级别
      )

      return toc
    } catch (error) {
      console.error('插入目录失败:', error)
      alert(`插入目录失败: ${error.message}`)
      return null
    }
  }
}

export default ContentInsert


