<template lang="pug">
  div
   h2 test
   button(@click='test()') test
   display {{"\t" + clicks}}
</template>

<script>
export default {
  data() {return{
    clicks: 0
  }},
  methods: {
    test() {
      this.clicks += 1
      class dog {
        constructor(name) {
          this.name = name;
        }
        say_name() {
          console.log(this.name)
        }
      }

      let d = new dog('Alex');
      d.say_name();
    }
  }
}
</script>

<style lang="scss" scoped>
  * {
    background: red;
  }
</style>
