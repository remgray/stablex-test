<script setup></script>

<template>
  <div class="boxes">
    <div class="box">
      <span class="text"
        >StableX<br />
        solution</span
      >
      <img class="img" src="/images/users.png" alt="" />
    </div>
    <div class="box">
      <img class="img" src="/images/code.png" alt="" />
    </div>
    <div class="box">
      <img class="img" src="/images/lock.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.boxes {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 36px;
  grid-row-gap: 36px;
}
.box {
  display: flex;
  gap: 20px;
  border-radius: 16px;
  overflow: hidden;
}
.box:nth-child(1) {
  position: relative;
  grid-area: 1 / 1 / 2 / 3;
  border-radius: 16px;
  background: radial-gradient(
      70.71% 70.71% at 50% 50%,
      rgba(46, 48, 56, 0.4) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    radial-gradient(70.71% 70.71% at 50% 50%, rgba(112, 220, 211, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
    #0d0e12;
}
.box:nth-child(2) {
  grid-area: 2 / 1 / 3 / 2;
}
.box:nth-child(3) {
  grid-area: 2 / 2 / 3 / 3;
}
.text,
.img {
  flex: 2;
}
.text {
  padding-top: 3%;
  padding-left: 5%;
  background: linear-gradient(180deg, #94d8d9 0%, #587e8d 49.65%, #4f5265 92.77%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 72px;
  font-weight: 600;
  letter-spacing: -1.44px;
  line-height: 105%;
  font-family: var(--secondary-font);
}

@media (max-width: 768px) {
  .boxes {
    display: flex;
    flex-direction: column;
  }
  .box {
    flex-direction: column;
  }
  .text {
    font-size: 50px;
  }
}
</style>
