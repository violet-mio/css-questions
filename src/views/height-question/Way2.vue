<template>
  <div class="container">
    <div class="content">content 方式2: 父元素内的末尾新增空元素，并设置清除浮动属性</div>
    <div class="side-bar">side-bar</div>

    <!-- 方式二：父元素内，末尾新增空子元素 -->
    <div class="tail"></div>
  </div>
  <div class="footer">footer</div>
</template>

<style lang="scss" scoped>
@import '../../assets/base.scss';
.tail {
  clear: both;
}
</style>
