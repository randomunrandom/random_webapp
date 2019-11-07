<template lang="pug">
  div
   h2 test
   p {{aaa}}
   button(@click='test()') test
</template>

<script>
export default {
  data() {return{
    aaa: "AAAA"
  }},
  methods: {
    test() {
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
