<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  required: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const inputType = computed(() => props.type)
const baseClasses =
  'block w-full rounded-md border-0 bg-white/5 py-2.5 px-3.5 text-text-main shadow-sm ring-1 ring-inset ring-white/10 transition-colors focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
</script>

<template>
  <div>
    <label :for="name" class="block font-poppins text-sm font-semibold leading-6 text-text-main">
      {{ label }} <span v-if="required" class="text-secondary">*</span>
    </label>
    <div class="mt-2.5">
      <input
        v-if="inputType !== 'textarea'"
        :type="inputType"
        :name="name"
        :id="name"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        :required="required"
        :class="baseClasses"
      />
      <textarea
        v-else
        :name="name"
        :id="name"
        rows="4"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        :required="required"
        :class="baseClasses"
      ></textarea>
    </div>
  </div>
</template>
