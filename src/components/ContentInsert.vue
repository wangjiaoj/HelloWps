<template>
  <div class="content-insert">
    <h2>内容插入工具</h2>
    
    <!-- 表格插入 -->
    <div class="insert-section">
      <h3>插入表格</h3>
      <div class="form-group">
        <label>行数:</label>
        <input v-model.number="tableConfig.rows" type="number" min="1" max="20" />
      </div>
      <div class="form-group">
        <label>列数:</label>
        <input v-model.number="tableConfig.columns" type="number" min="1" max="20" />
      </div>
      <div class="form-group">
        <label>宽度:</label>
        <input v-model.number="tableConfig.width" type="number" min="100" max="800" />
      </div>
      <div class="form-group">
        <label>高度:</label>
        <input v-model.number="tableConfig.height" type="number" min="100" max="600" />
      </div>
      <button @click="insertTable" class="btn btn-primary">插入表格</button>
    </div>

    <!-- 图片插入 -->
    <div class="insert-section">
      <h3>插入图片</h3>
      <div class="form-group">
        <label>图片路径:</label>
        <input v-model="imageConfig.path" type="text" placeholder="请输入图片完整路径" />
      </div>
      <div class="form-group">
        <label>宽度:</label>
        <input v-model.number="imageConfig.width" type="number" min="50" max="800" />
      </div>
      <div class="form-group">
        <label>高度:</label>
        <input v-model.number="imageConfig.height" type="number" min="50" max="600" />
      </div>
      <button @click="insertImage" class="btn btn-primary">插入图片</button>
    </div>

    <!-- 标题插入 -->
    <div class="insert-section">
      <h3>插入标题</h3>
      <div class="form-group">
        <label>标题文本:</label>
        <input v-model="titleConfig.text" type="text" placeholder="请输入标题文本" />
      </div>
      <div class="button-group">
        <button @click="insertHeading1" class="btn btn-success">插入一级标题</button>
        <button @click="insertHeading2" class="btn btn-success">插入二级标题</button>
        <button @click="insertHeading3" class="btn btn-success">插入三级标题</button>
      </div>
    </div>

    <!-- 段落插入 -->
    <div class="insert-section">
      <h3>插入段落</h3>
      <div class="form-group">
        <label>段落文本:</label>
        <textarea v-model="paragraphConfig.text" placeholder="请输入段落文本" rows="3"></textarea>
      </div>
      <button @click="insertParagraph" class="btn btn-primary">插入段落</button>
    </div>

    <!-- 其他功能 -->
    <div class="insert-section">
      <h3>其他功能</h3>
      <div class="button-group">
        <button @click="insertPageBreak" class="btn btn-info">插入分页符</button>
        <button @click="insertHeader" class="btn btn-info">插入页眉</button>
        <button @click="insertFooter" class="btn btn-info">插入页脚</button>
        <button @click="insertTableOfContents" class="btn btn-info">插入目录</button>
      </div>
    </div>

    <!-- 快速插入示例 -->
    <div class="insert-section">
      <h3>快速插入示例</h3>
      <div class="button-group">
        <button @click="insertSampleDocument" class="btn btn-warning">插入示例文档</button>
        <button @click="insertSampleTable" class="btn btn-warning">插入示例表格</button>
        <button @click="insertSampleStructure" class="btn btn-warning">插入文档结构</button>
      </div>
    </div>

    <!-- 状态显示 -->
    <div class="status-section" v-if="statusMessage">
      <div :class="['status-message', statusType]">
        {{ statusMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import ContentInsert from './js/contentInsert.js'

export default {
  name: 'ContentInsert',
  setup() {
    const contentInsert = new ContentInsert()
    
    // 表格配置
    const tableConfig = reactive({
      rows: 3,
      columns: 3,
      width: 400,
      height: 200
    })

    // 图片配置
    const imageConfig = reactive({
      path: window.location.origin + '/images/sample-image.svg',
      width: 200,
      height: 150
    })

    // 标题配置
    const titleConfig = reactive({
      text: '示例标题'
    })

    // 段落配置
    const paragraphConfig = reactive({
      text: '这是一个示例段落，用于演示段落插入功能。'
    })

    // 状态消息
    const statusMessage = ref('')
    const statusType = ref('info')

    // 显示状态消息
    const showStatus = (message, type = 'info') => {
      statusMessage.value = message
      statusType.value = type
      setTimeout(() => {
        statusMessage.value = ''
      }, 3000)
    }

    // 插入表格
    const insertTable = () => {
      try {
        const result = contentInsert.insertTable(
          tableConfig.rows,
          tableConfig.columns,
          100,
          100,
          tableConfig.width,
          tableConfig.height
        )
        if (result) {
          showStatus('表格插入成功！', 'success')
        }
      } catch (error) {
        showStatus(`插入表格失败: ${error.message}`, 'error')
      }
    }

    // 插入图片
    const insertImage = () => {
      if (!imageConfig.path) {
        showStatus('请输入图片路径', 'warning')
        return
      }
      try {
        const result = contentInsert.insertImage(
          imageConfig.path,
          100,
          100,
          imageConfig.width,
          imageConfig.height
        )
        if (result) {
          showStatus('图片插入成功！', 'success')
        }
      } catch (error) {
        showStatus(`插入图片失败: ${error.message}`, 'error')
      }
    }

    // 插入一级标题
    const insertHeading1 = () => {
      try {
        const result = contentInsert.insertHeading1(titleConfig.text)
        if (result) {
          showStatus('一级标题插入成功！', 'success')
        }
      } catch (error) {
        showStatus(`插入一级标题失败: ${error.message}`, 'error')
      }
    }

    // 插入二级标题
    const insertHeading2 = () => {
      try {
        const result = contentInsert.insertHeading2(titleConfig.text)
        if (result) {
          showStatus('二级标题插入成功！', 'success')
        }
      } catch (error) {
        showStatus(`插入二级标题失败: ${error.message}`, 'error')
      }
    }

    // 插入三级标题
    const insertHeading3 = () => {
      try {
        const result = contentInsert.insertHeading3(titleConfig.text)
        if (result) {
          showStatus('三级标题插入成功！', 'success')
        }
      } catch (error) {
        showStatus(`插入三级标题失败: ${error.message}`, 'error')
      }
    }

    // 插入段落
    const insertParagraph = () => {
      try {
        const result = contentInsert.insertParagraph(paragraphConfig.text)
        if (result) {
          showStatus('段落插入成功！', 'success')
        }
      } catch (error) {
        showStatus(`插入段落失败: ${error.message}`, 'error')
      }
    }

    // 插入分页符
    const insertPageBreak = () => {
      try {
        const result = contentInsert.insertPageBreak()
        if (result) {
          showStatus('分页符插入成功！', 'success')
        }
      } catch (error) {
        showStatus(`插入分页符失败: ${error.message}`, 'error')
      }
    }

    // 插入页眉
    const insertHeader = () => {
      try {
        const result = contentInsert.insertHeader('文档页眉 - ' + new Date().toLocaleDateString())
        if (result) {
          showStatus('页眉插入成功！', 'success')
        }
      } catch (error) {
        showStatus(`插入页眉失败: ${error.message}`, 'error')
      }
    }

    // 插入页脚
    const insertFooter = () => {
      try {
        const result = contentInsert.insertFooter('文档页脚 - 第 {PAGE} 页')
        if (result) {
          showStatus('页脚插入成功！', 'success')
        }
      } catch (error) {
        showStatus(`插入页脚失败: ${error.message}`, 'error')
      }
    }

    // 插入目录
    const insertTableOfContents = () => {
      try {
        const result = contentInsert.insertTableOfContents()
        if (result) {
          showStatus('目录插入成功！', 'success')
        }
      } catch (error) {
        showStatus(`插入目录失败: ${error.message}`, 'error')
      }
    }

    // 插入示例文档
    const insertSampleDocument = () => {
      try {
        // 插入标题
        contentInsert.insertHeading1('示例文档')
        contentInsert.insertParagraph('这是一个示例文档，展示了各种内容的插入功能。')
        
        // 插入二级标题和段落
        contentInsert.insertHeading2('功能说明')
        contentInsert.insertParagraph('本加载项提供了丰富的文档内容插入功能，包括表格、图片、标题、段落等。')
        
        // 插入三级标题和段落
        contentInsert.insertHeading3('使用方法')
        contentInsert.insertParagraph('点击相应的按钮即可在当前位置插入对应的内容。')
        
        showStatus('示例文档插入成功！', 'success')
      } catch (error) {
        showStatus(`插入示例文档失败: ${error.message}`, 'error')
      }
    }

    // 插入示例表格
    const insertSampleTable = () => {
      try {
        // 插入标题
        contentInsert.insertHeading2('示例表格')
        
        // 插入表格
        const table = contentInsert.insertTable(4, 3, 100, 100, 500, 250)
        
        if (table) {
          showStatus('示例表格插入成功！', 'success')
        }
      } catch (error) {
        showStatus(`插入示例表格失败: ${error.message}`, 'error')
      }
    }

    // 插入文档结构
    const insertSampleStructure = () => {
      try {
        // 插入文档结构
        contentInsert.insertHeading1('文档结构示例')
        contentInsert.insertParagraph('这是一个文档结构示例，展示了标题层级的组织方式。')
        
        contentInsert.insertHeading2('第一部分')
        contentInsert.insertParagraph('这是第一部分的内容。')
        
        contentInsert.insertHeading3('第一部分的子项')
        contentInsert.insertParagraph('这是第一部分的子项内容。')
        
        contentInsert.insertHeading2('第二部分')
        contentInsert.insertParagraph('这是第二部分的内容。')
        
        contentInsert.insertHeading3('第二部分的子项')
        contentInsert.insertParagraph('这是第二部分的子项内容。')
        
        showStatus('文档结构插入成功！', 'success')
      } catch (error) {
        showStatus(`插入文档结构失败: ${error.message}`, 'error')
      }
    }

    return {
      tableConfig,
      imageConfig,
      titleConfig,
      paragraphConfig,
      statusMessage,
      statusType,
      insertTable,
      insertImage,
      insertHeading1,
      insertHeading2,
      insertHeading3,
      insertParagraph,
      insertPageBreak,
      insertHeader,
      insertFooter,
      insertTableOfContents,
      insertSampleDocument,
      insertSampleTable,
      insertSampleStructure
    }
  }
}
</script>

<style scoped>
.content-insert {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.content-insert h2 {
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 2px solid #0078d4;
  padding-bottom: 10px;
}

.insert-section {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.insert-section h3 {
  color: #495057;
  margin-bottom: 15px;
  font-size: 18px;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.form-group label {
  width: 80px;
  font-weight: 500;
  color: #495057;
}

.form-group input,
.form-group textarea {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 14px;
}

.form-group textarea {
  resize: vertical;
  min-height: 60px;
}

.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.btn-primary {
  background-color: #0078d4;
  color: white;
}

.btn-primary:hover {
  background-color: #106ebe;
}

.btn-success {
  background-color: #107c10;
  color: white;
}

.btn-success:hover {
  background-color: #0e6b0e;
}

.btn-info {
  background-color: #17a2b8;
  color: white;
}

.btn-info:hover {
  background-color: #138496;
}

.btn-warning {
  background-color: #ffc107;
  color: #212529;
}

.btn-warning:hover {
  background-color: #e0a800;
}

.status-section {
  margin-top: 20px;
}

.status-message {
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
}

.status-message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.status-message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.status-message.warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.status-message.info {
  background-color: #d1ecf1;
  color: #0c5460;
  border: 1px solid #bee5eb;
}

@media (max-width: 768px) {
  .content-insert {
    padding: 15px;
  }
  
  .form-group {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .form-group label {
    width: 100%;
    margin-bottom: 5px;
  }
  
  .button-group {
    justify-content: center;
  }
}
</style>
