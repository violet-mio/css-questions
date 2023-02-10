<template>
  <div class="container">
    <div class="content">content 方式3：父元素设置浮动，不一定效果，可能会遮挡后面的元素</div>
    <div class="side-bar">side-bar</div>
  </div>
  <div class="footer">footer</div>
</template>

<style lang="scss" scoped>
@import '../../assets/base.scss';
.container {
  float: left;
}
</style>
