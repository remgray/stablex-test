<script setup>
defineProps({
  tag: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => {
      return ['small', 'medium', 'large'].indexOf(value) > -1
    }
  }
})
</script>

<template>
  <component :class="size" class="title" :is="tag">
    <slot></slot>
  </component>
</template>

<style scoped>
.title {
  font-weight: 600;
}
.small {
  font-size: 46px;
}
.medium {
  font-size: 64px;
}
.large {
  font-size: 95px;
}
@media (max-width: 1000px) {
  .medium {
    font-size: 44px;
  }
  .small {
    font-size: 34px;
  }
  .large {
    font-size: 64px;
  }
}
@media (max-width: 768px) {
  .medium {
    font-size: 40px;
  }
  .small {
    font-size: 28px;
  }
  .large {
    font-size: 50px;
  }
}
@media (max-width: 400px) {
  .medium {
    font-size: 34px;
  }
  .small {
    font-size: 22px;
  }
  .large {
    font-size: 36px;
  }
}
</style>
