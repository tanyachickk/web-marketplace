<template lang="pug">
  label.checkbox(@click="$emit('click')")
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class BasicCheckbox extends Vue {}
</script>

<style lang="scss" scoped>
.checkbox {
}
</style>
