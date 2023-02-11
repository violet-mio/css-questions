<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { routes } from './router/index'
import { useRoute } from 'vue-router'
import { computed, watch } from 'vue'

const route = useRoute()
const parentRoute = computed(() => {
  // 获取路由记录
  const matched = route.matched

  // 获取该记录的路由个数
  const max = matched.length

  // 获取倒数第二个路由（也就是当前路由的父级路由）
   const res = matched[max - 2]
   console.log('res', res)
   return res || []
})

</script>

<template>
  <div class="nav">
    <RouterLink class="link" v-for="item in routes" :to="item.path" :key="item.path">
      {{ item.name || item.path }} 
    </RouterLink>
  </div>
  <div class="wrapper">
    <RouterLink class="link" v-for="child in parentRoute.children" :to="child.path" :key="child.path">
      {{ child?.meta?.desc }} 
    </RouterLink>
  </div>

  <RouterView />
</template>

<style lang="scss" scoped>
.nav {
  margin-bottom: 20px;
  .link {
    padding: 6px 10px;
    border: 1px solid skyblue;
    margin-left: 10px;
    &:first-child {
      margin-left: 0;
    }
  }
  .router-link-active.link {
    color: #ca6700;
  }
  .link:not(.router-link-active) {
    color: black;
  }
}

.wrapper {
  .link {
    display: block;
  }
}



</style>
