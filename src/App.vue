<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-12 col-12 mx-auto">
          <h1 class="my-5 text-center text-primary">Vuex Todos</h1>
          <b-form>
            <b-form-input
              type="text"
              placeholder="Add Tasks...."
              v-model.trim="input[0].title"
            ></b-form-input>
            <div v-if="show">
              <b-button @click="onSubmit" variant="primary" class="mt-4 px-4"
                >Add</b-button
              >
            </div>
            <div v-else>
              <b-button @click="updateList" variant="primary" class="mt-4 px-4"
                >Update</b-button
              >
            </div>
          </b-form>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-8 col-md-8 col-sm-12 col-12 mx-auto">
          <div v-for="(list, index) in allList" :key="index">
            <div class="d-flex justify-content-between my-3">
              <div>
                <p>{{ list.title }}</p>
              </div>
              <div>
                <b-button variant="danger" @click="remove(index)" class="mx-3"
                  >Remove</b-button
                >
                <b-button
                  variant="success"
                  @click="update(list, index)"
                  class="mx-3"
                  >Update</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selectId: null,
      show: true,
      input: [
        {
          title: "",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log(this.input[0].title == "");
      if (this.input[0].title == "") {
        alert("Write Something");
      } else {
        this.$store.dispatch("addList", this.input[0]);
        this.input = [
          {
            title: "",
          },
        ];
      }
    },
    remove(id) {
      this.$store.dispatch("delete", id);
    },
    update(list, index) {
      this.input[0].title = list.title;
      this.selectId = index;
      this.show = false;
    },
    updateList() {
      this.allList.splice(this.selectId, 1, this.input[0]);
      this.show = true;
      this.input = [
        {
          title: "",
        },
      ];
    },
  },
  computed: {
    allList() {
      return this.$store.getters.allList;
    },
  },
};
</script>

<style></style>
