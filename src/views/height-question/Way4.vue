<template>
  <div class="container">
    <div class="content">content 方式4：父元素末尾新增伪元素并设置`clear:both`</div>
    <div class="side-bar">side-bar</div>
  </div>
  <div class="footer">footer</div>
</template>

<style lang="scss" scoped>
@import '../../assets/base.scss';
.container::after {
  display: block;
  content: '';
  clear: both;
  height: 0;
}
</style>
