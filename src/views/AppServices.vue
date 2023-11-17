<script setup>
import AppTitle from '@/components/AppTitle.vue'
import AppLink from '../ui/AppLink.vue'
import ThreeBoxes from '../components/ThreeBoxes.vue'
</script>

<template>
  <section class="services">
    <div class="container">
      <div class="services-top">
        <AppTitle class="services-title" tag="h2" size="small">
          {{ $t('second_header') }}
        </AppTitle>
        <AppLink href="#" link-style="secondary" class="services-link">{{ $t('contact') }}</AppLink>
      </div>
      <ThreeBoxes />
    </div>
  </section>
</template>

<style scoped>
.services {
  max-width: 1000px;
  margin: 0 auto;
}
.services-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 30px;
  margin-bottom: 24px;
}
.services-link {
  flex-shrink: 0;
}
.services-title {
  max-width: 700px;
}
@media (max-width: 768px) {
  .services-top {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
