<script setup>
import AppTitle from '@/components/AppTitle.vue'
</script>

<template>
  <section class="goods">
    <div class="container">
      <div class="goods-inner">
        <div class="content">
          <AppTitle tag="h2" size="large" class="title">
            {{ $t('financial__title') }}
          </AppTitle>
          <ul class="list">
            <li v-for="text in $tm('financial_text')" :key="text" class="item">
              {{ text }}
            </li>
          </ul>
        </div>
        <div class="bg"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.goods {
  padding: 400px 0;
}
.goods-inner {
  position: relative;
}
.title {
  margin-bottom: 40px;
}
.content {
  max-width: 700px;
}
.list {
  list-style: none;
  font-family: var(--secondary-font);
  font-weight: 300;
  line-height: 150%;
  font-size: 24px;
}
.item + .item {
  margin-top: 30px;
}
.bg {
  position: absolute;
  top: -400px;
  left: calc(50% - 200px);
  height: 1656px;
  width: 1024px;
  background: url(../images/figures.jpg) no-repeat right / 100%;
  z-index: -1;
}
@media (max-width: 1200px) {
  .goods {
    padding: 250px 0;
  }
  .bg {
    height: 1456px;
    width: 800px;
    left: calc(50% - 50px);
  }
}
@media (max-width: 1000px) {
  .goods {
    padding: 150px 0;
  }
  .bg {
    height: 1456px;
    width: 700px;
    left: calc(50% + 0px);
  }
}
@media (max-width: 768px) {
  .goods {
    padding: 100px 0;
  }
  .bg {
    height: 1000px;
    top: -100px;
    left: 0;
    opacity: 0.2;
  }
}
</style>
