<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChatLineRound, Document, Setting } from '@element-plus/icons-vue'
import SearchDialog from '@/components/SearchDialog.vue'

const showSearchDialog = ref(false)

// Ctrl+K 打开搜索对话框
const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    showSearchDialog.value = false
  }
  if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
    event.preventDefault()
    showSearchDialog.value = true
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="home-page">
    <!-- 头部 -->
    <header class="header">
      <span class="logo">LLM Chat</span>
    </header>

    <!-- 主体 -->
    <main class="main-content">
      <div class="hero">
        <!-- 大标题 -->
        <h1 class="hero-title">
          与 AI 轻松对话
        </h1>

        <!-- 描述 -->
        <p class="hero-desc">
          基于大语言模型，提供自然流畅的智能问答体验
        </p>

        <!-- 特性卡片 -->
        <div class="features">
          <div class="feature-card">
            <div class="feature-icon">
              <el-icon :size="28"><ChatLineRound /></el-icon>
            </div>
            <h3>智能对话</h3>
            <p>自然流畅的上下文理解</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <el-icon :size="28"><Document /></el-icon>
            </div>
            <h3>文件支持</h3>
            <p>多格式文件上传增强交互</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <el-icon :size="28"><Setting /></el-icon>
            </div>
            <h3>灵活配置</h3>
            <p>自定义模型参数适配场景</p>
          </div>
        </div>

        <!-- CTA 按钮 -->
        <router-link to="/chat" class="cta-button">
          开始对话
          <span class="arrow">→</span>
        </router-link>

        <!-- 快捷键提示 -->
        <p class="hint">
          按 <kbd>Ctrl + K</kbd> 快速搜索
        </p>
      </div>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <span>LLM Chat</span>
    </footer>

    <!-- 搜索对话框 -->
    <Transition name="fade">
      <div v-if="showSearchDialog" class="overlay" @click.self="showSearchDialog = false">
        <div class="dialog-wrapper">
          <SearchDialog />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
}

// ---- Header ----
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 32px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  .logo {
    font-size: 18px;
    font-weight: 600;
    color: #171717;
    letter-spacing: -0.3px;
    user-select: none;
  }
}

// ---- Hero ----
.main-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
}

.hero {
  text-align: center;
  max-width: 680px;
}

.hero-title {
  font-size: 48px;
  font-weight: 300;
  color: #171717;
  margin: 0 0 16px;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.hero-desc {
  font-size: 18px;
  color: #888;
  margin: 0 0 64px;
  line-height: 1.6;
}

// ---- Features ----
.features {
  display: flex;
  gap: 24px;
  margin-bottom: 56px;

  .feature-card {
    flex: 1;
    padding: 32px 24px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 12px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    }

    .feature-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 52px;
      height: 52px;
      border-radius: 12px;
      background: rgba(63, 122, 241, 0.08);
      color: #3f7af1;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 16px;
      font-weight: 600;
      color: #171717;
      margin: 0 0 8px;
    }

    p {
      font-size: 14px;
      color: #999;
      margin: 0;
      line-height: 1.5;
    }
  }
}

// ---- CTA Button ----
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 40px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background: #3f7af1;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.15s ease;

  &:hover {
    background: #2563eb;
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.98);
  }

  .arrow {
    font-size: 18px;
    transition: transform 0.2s ease;
  }

  &:hover .arrow {
    transform: translateX(4px);
  }
}

// ---- Hint ----
.hint {
  margin-top: 28px;
  font-size: 13px;
  color: #bbb;

  kbd {
    display: inline-block;
    padding: 1px 6px;
    font-size: 12px;
    font-family: inherit;
    color: #999;
    background: #f0f0f0;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
  }
}

// ---- Footer ----
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  font-size: 13px;
  color: #bbb;
}

// ---- Overlay & Dialog ----
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  z-index: 1000;
}

.dialog-wrapper {
  margin-top: 12vh;
  width: 640px;
  max-width: 90vw;
}

// ---- Transition ----
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
