<template>
  <div>
    <div class="shadow-lg p-1 mb-2 bg-body rounded d-flex input-group-sm">
      <input
        class="form-check-input me-1"
        type="checkbox"
        v-model="content.checked"
        @change="todoChecked"
      />
      <span
        class="p-1 flex-grow-1"
        :class="content.checked ? 'checked' : ''"
        :style="content.checked ? 'text-decoration: line-through; ' : ''"
        >{{ content.title }}
      </span>
      <button class="btn btn-danger" id="show-modal" @click="todoDelWait">
        del
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: Object },
  },
  data() {
    return {};
  },
  methods: {
    todoDelWait() {
      this.$emit("showModal", this.content.id);
    },
    todoDel() {
      // this.$emit("del-button", this.content);
      // this.$store.commit("DEL_TODO", this.content.id);
      this.$store.dispatch("A_DEL_TODO", this.content.id);
    },
    todoChecked() {
      // this.$emit("todo-Checked", this.content.id, this.content.checked);
      // this.$store.commit("CHECKED_TODO", this.content.id, this.content.checked);
      this.$store.dispatch(
        "A_CHECKED_TODO",
        this.content.id,
        this.content.checked
      );
    },
  },
};
</script>