<template>
  <div>
    <h1>Portfolio Alban</h1>
    <ColorSelector />
    <LangSelector />
    <img src="/images/monkey.webp" />
    <ul>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/projects/1">Post 1</NuxtLink></li>
      <li><NuxtLink to="/projects/2">Post 2</NuxtLink></li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.iconTest {
  font-size: 4em;
  color: cyan;
}
</style>
