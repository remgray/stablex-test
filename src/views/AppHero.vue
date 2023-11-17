<script setup>
import AppTitle from '@/components/AppTitle.vue'
import AngleIcon from '@/ui/icons/AngleIcon.vue'
import AppLink from '../ui/AppLink.vue'
</script>

<template>
  <section class="hero container-full">
    <div class="container">
      <div class="content">
        <AppTitle class="main-title" tag="h1" size="medium"> {{ $t('header') }}</AppTitle>
        <AppLink href="#" linkStyle="primary">{{ $t('contact') }} <AngleIcon /></AppLink>
        <div class="bg-timeline"></div>
      </div>
    </div>
    <div class="container-full">
      <div class="bg-conveer"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  --title-width: 740px;
  padding-top: 50px;
  padding-bottom: 800px;
}
.container {
  position: relative;
}
.main-title {
  position: relative;
  max-width: var(--title-width);
  margin-bottom: 78px;
  background: radial-gradient(
    70.71% 70.71% at 50% 50%,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 2;
}
.bg-timeline {
  position: absolute;
  top: -50px;
  left: calc(var(--title-width) - 250px);
  width: 651px;
  height: 490px;
  background: url(/images/timeline.png) no-repeat center / cover;
}
.bg-conveer {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 740px;
  width: 100%;
  background: url(/images/conveer.jpg) no-repeat center / cover;
  z-index: -1;
}
@media (max-width: 1000px) {
  .hero {
    --title-width: 500px;
  }
  .bg-timeline {
    width: 500px;
    height: 390px;
    left: calc(var(--title-width) - 200px);
  }
}
@media (max-width: 768px) {
  .hero {
    padding-bottom: 400px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .bg-timeline {
    position: initial;
  }
  .bg-conveer {
    bottom: 0;
    height: 500px;
  }
}
</style>
