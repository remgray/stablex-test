<script setup>
defineProps({
  linkStyle: {
    type: String,
    default: 'primary',
    validator: (value) => {
      return ['primary', 'secondary'].indexOf(value) > -1
    }
  }
})
</script>

<template>
  <a class="link" :class="linkStyle">
    <slot></slot>
  </a>
</template>

<style scoped>
.link {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 22px;
  border-radius: 100px;
  text-align: center;
  font-family: var(--secondary-font);
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
}
.link::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.2s;
  box-shadow: 0 6px 20px hsla(0, 0%, 100%, 0.4);
}
.link:hover::before {
  opacity: 1;
}
.primary {
  background-color: var(--text-color);
  color: var(--bg-color);
  box-shadow: 0px 6px 16px 0px rgba(255, 255, 255, 0.2);
}
.secondary {
  color: var(--text-color);
  border: 1px solid var(--text-color);
  background: radial-gradient(
      70.71% 70.71% at 50% 50%,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #070709;
}
</style>
