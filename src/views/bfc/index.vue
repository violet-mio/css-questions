<template>
  <div>
    <div class="box box1"></div>
    <div class="parent">
      <div class="box box2"></div>
      <div class="free">free</div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.box{
  width: 100px;
  height: 100px;
}

.box1 {
  background-color: green;
  margin-bottom: 50px;
}
.parent {
  width: 100px;
  // // 方案1
  // overflow: hidden;
  // 方案2
  position: relative;
  &:before {
    display: table;
    content: '';
  }
  .free {
    position: absolute;
    top: 20px;
    right: -50px;
  }

  .box2 {
    background-color: chocolate;
    margin-top: 100px;
  }
}
</style>