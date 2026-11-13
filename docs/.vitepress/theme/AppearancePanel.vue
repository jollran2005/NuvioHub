<script setup>
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()
const isAmoled = ref(false)

const applyTheme = (mode) => {
  if (typeof document === 'undefined') return
  const el = document.documentElement

  if (mode === 'light') {
    isDark.value = false
    isAmoled.value = false
    el.classList.remove('dark', 'amoled')
    localStorage.setItem('vitepress-theme-appearance', 'light')
    localStorage.setItem('nuvio-amoled', 'false')
  } else if (mode === 'dark') {
    isDark.value = true
    isAmoled.value = false
    el.classList.add('dark')
    el.classList.remove('amoled')
    localStorage.setItem('vitepress-theme-appearance', 'dark')
    localStorage.setItem('nuvio-amoled', 'false')
  } else if (mode === 'amoled') {
    isDark.value = true
    isAmoled.value = true
    el.classList.add('dark', 'amoled')
    localStorage.setItem('vitepress-theme-appearance', 'dark')
    localStorage.setItem('nuvio-amoled', 'true')
  }
}

onMounted(() => {
  const amoledSaved = localStorage.getItem('nuvio-amoled') === 'true'
  if (amoledSaved && isDark.value) {
    isAmoled.value = true
    document.documentElement.classList.add('amoled')
  }
})
</script>

<template>
  <div class="appearance-panel">
    <div class="dropdown-header">APPEARANCE</div>

    <button
      type="button"
      class="dropdown-item"
      :class="{ selected: !isDark }"
      @click="applyTheme('light')"
    >
      <div class="item-left">
        <svg class="item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
        <span>Light</span>
      </div>
      <svg v-if="!isDark" class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </button>

    <button
      type="button"
      class="dropdown-item"
      :class="{ selected: isDark && !isAmoled }"
      @click="applyTheme('dark')"
    >
      <div class="item-left">
        <svg class="item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
        <span>Dark</span>
      </div>
      <svg v-if="isDark && !isAmoled" class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </button>

    <button
      type="button"
      class="dropdown-item"
      :class="{ selected: isDark && isAmoled }"
      @click="applyTheme('amoled')"
    >
      <div class="item-left">
        <svg class="item-icon amoled-moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          <path d="M19 3v4M21 5h-4" />
        </svg>
        <span class="amoled-text">AMOLED</span>
      </div>
      <svg v-if="isDark && isAmoled" class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.appearance-panel {
  min-width: 175px;
  padding: 4px;
}

.dropdown-header {
  padding: 6px 10px 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
}

.dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s, color 0.15s;
  text-align: left;
}

.dropdown-item:hover {
  background-color: var(--vp-c-default-soft);
  color: var(--vp-c-text-1);
}

.dropdown-item.selected {
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.item-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.item-icon {
  width: 17px;
  height: 17px;
}

.amoled-moon-icon {
  color: #7dd3fc;
}

.dropdown-item.selected .amoled-text {
  color: #7dd3fc;
}

:root.dark.amoled .dropdown-item:hover {
  background-color: #161618;
}

.check-icon {
  width: 16px;
  height: 16px;
  color: #7dd3fc;
}
</style>

