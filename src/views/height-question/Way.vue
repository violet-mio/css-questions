<template>
  <div class="container">
    <div class="content">content 方式1：父元素设置`overflow:hidden</div>
    <div class="side-bar">side-bar</div>
  </div>
  <div class="footer">footer</div>
</template>

<style lang="scss" scoped>
@import '../../assets/base.scss';

// 父元素添加overflow:hidden
.container {
  overflow: hidden;
}
</style>
