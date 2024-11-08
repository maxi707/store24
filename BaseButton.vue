<template>
    <button class="btna btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'BaseButton'
}
</script>

<style scoped>
.btna {
    padding: 9px 58px;
    font-family: 'ABeeZee', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;

  --bs-btn-color: white;
  --bs-btn-bg: black;
  --bs-btn-border-color: black;
  --bs-btn-hover-color: black;
  --bs-btn-hover-bg: #e4e4e4;
  --bs-btn-hover-border-color: black;
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: white;
  --bs-btn-active-bg: #e4e4e4;
  --bs-btn-active-border-color: white;
}
</style>