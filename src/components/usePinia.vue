<template>
  <div>{{ useUserStore.name }}</div>
</template>

<script lang='ts' setup>
import { useUserStore } from "@/store/user";

const userStore = useUserStore();

</script>

<style scoped>

</style>
