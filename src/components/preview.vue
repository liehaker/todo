<template>
  <div>
    <label style="font-size: 10px" for=""> preView : {{ preText }} </label>
  </div>
</template>

<script>
export default {
  props: {
    preText: {
      type: String,
    },
  },
};
</script>
