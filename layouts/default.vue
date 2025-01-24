<template>
  <div class="layout">
    <header>
      <nav>
        <h1>My App</h1>
      </nav>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  padding: 10px;
  background: #007bff;
  color: white;
}

main {
  flex: 1;
  padding: 20px;
}
</style>
