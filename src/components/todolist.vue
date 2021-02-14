<template>
  <div>
    <Todo
      v-for="content in contents"
      :key="content.id"
      :content="content"
      @showModal="showWaitModal"
    />
    <Modal v-if="showModal" @close="deleteTodo">
      <h3 slot="header">Warning notice!!</h3>
    </Modal>
  </div>
</template>

<script>
import Todo from "@/components/todo";
import Modal from "@/components/ModalView";

export default {
  data() {
    return {
      modal: false,
      showModal: false,
      id: -1,
    };
  },
  components: {
    Todo,
    Modal,
  },
  computed: {
    contents() {
      return this.$store.state.contents.contents;
    },
  },
  methods: {
    showWaitModal(id) {
      this.showModal = true;
      this.id = id;
    },
    deleteTodo() {
      this.showModal = false;
      this.$store.dispatch("A_DEL_TODO", this.id);
    },
  },
};
</script>