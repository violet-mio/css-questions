<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="link" to="/height-question/way">方式1：父元素设置`overflow:hidden`</RouterLink>
        <RouterLink class="link" to="/height-question/way2">方式2: 父元素内的末尾新增空元素，并设置清除浮动属性</RouterLink>
        <RouterLink class="link" to="/height-question/way3">方式3：父元素设置浮动</RouterLink>
        <RouterLink class="link" to="/height-question/way4">方式4：父元素末尾新增伪元素并设置`clear:both`</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 90vw;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

.link {
  display: block;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
