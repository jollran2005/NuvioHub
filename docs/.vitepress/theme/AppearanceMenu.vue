<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'
import VPSocialLinks from 'vitepress/dist/client/theme-default/components/VPSocialLinks.vue'
import AppearancePanel from './AppearancePanel.vue'

const { theme } = useData()
const open = ref(false)
const flyoutRef = ref(null)

const handleClickOutside = (e) => {
  if (flyoutRef.value && !flyoutRef.value.contains(e.target)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div
    ref="flyoutRef"
    class="VPFlyout nuvio-extra-flyout"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <button
      type="button"
      class="button"
      aria-haspopup="true"
      :aria-expanded="open"
      aria-label="Extra navigation"
      @click="open = !open"
    >
      <span class="vpi-more-horizontal icon" />
    </button>

    <div v-show="open" class="menu">
      <div class="VPMenu">
        <AppearancePanel />

        <!-- Social links integrated inside the single 3-dot menu on tablets/screens where top social links hide -->
        <div v-if="theme.socialLinks" class="group social-group">
          <div class="item social-links">
            <VPSocialLinks class="social-links-list" :links="theme.socialLinks" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nuvio-extra-flyout {
  display: flex !important;
  align-items: center;
  position: relative;
}

.button {
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: var(--vp-nav-height);
  color: var(--vp-c-text-1);
  transition: color 0.25s;
  background: transparent;
  border: none;
  cursor: pointer;
}

.button:hover {
  color: var(--vp-c-brand-1);
}

.icon {
  font-size: 20px;
  width: 20px;
  height: 20px;
}

.menu {
  position: absolute;
  top: calc(var(--vp-nav-height) / 2 + 16px);
  right: 0;
  z-index: var(--vp-z-index-nav);
}

.social-group {
  margin-top: 4px;
  padding-top: 6px;
  border-top: 1px solid var(--vp-c-divider);
}

.item.social-links {
  display: flex;
  justify-content: center;
  padding: 4px 12px 6px;
}

@media (min-width: 1280px) {
  .social-group {
    display: none;
  }
}
</style>
