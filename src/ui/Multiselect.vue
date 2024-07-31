<script setup lang="ts">
import { computed, ref } from 'vue';
import ChevronDownIcon from './icons/ChevronDownIcon.vue';
import CloseIcon from './icons/CloseIcon.vue';
import { testStringMatch } from '@/utils/testStringMatch';

type OptionType = {
  name: string
  id: number
}


const props = defineProps<{
  options: OptionType[] //Array of options with unique value
  placeholder?: string
  maxSelected: number //Max amount of selected items
}>()


const searchVal = ref("")
const selectedValues = defineModel<OptionType[]>()
const inputRef = ref<HTMLParagraphElement | null>(null)


function handleSelectOption(option: OptionType) {
  if (selectedValues.value && selectedValues.value?.length < props.maxSelected) {
    searchVal.value = ""
    selectedValues.value?.push(option)
  }
}

function handleDeselectOption(option: OptionType) {
  selectedValues.value = selectedValues.value?.filter(o => o.id !== option.id)
}

function handleClear() {
  selectedValues.value = []
}


function handleFocus() {
  setTimeout(() => inputRef.value?.focus(), 300)
}


const optionsToShow = computed(() => {
  return props.options.filter(option => {
    return !selectedValues.value?.find(o => {
      return o.id === option.id
    }) &&  testStringMatch(option.name, searchVal.value)
  })
})




</script>

<template>

  <div class="multiselect relative pb-[16px] cursor-pointer">

    <div @click="handleFocus"
      class="min-h-12 gap-2 flex flex-wrap items-center p-3 border border-blue-dark rounded font-['Inter']">

      <p v-for="{ name, id } in selectedValues" :key="id"
        class="flex gap-1 items-center bg-blue-light py-[1px] pl-[4px] pr-[1px]">{{ name }}
        <button class="bg-transparent p-0" @click="() => handleDeselectOption({ name, id })">
          <CloseIcon />
        </button>
      </p>



      <input ref="inputRef" :class="searchVal ? 'z-20' : ''" class="bg-transparent relative z-10 outline-none"  v-model="searchVal" type="text">

      <p v-if="!selectedValues?.length" class="absolute z-10 font-medium leading-6 inline-block">{{
        placeholder }}</p>


      <button class="bg-transparent p-0 ml-auto" v-if="!!selectedValues?.length" @click="handleClear">
        <CloseIcon />
      </button>
      <ChevronDownIcon v-else class="ml-auto" />
    </div>

    <div v-if="optionsToShow.length"
      class="multiselect-menu absolute top-full inset-x-0 white p-3 border border-blue-dark rounded">
      <p v-for="{ name, id } in optionsToShow" :key="id"
        class="hover:bg-blue-light py-[9px] px-[11px] mb-1 rounded pointer"
        @click="() => handleSelectOption({ name, id })">
        {{ name }}
      </p>
    </div>

  </div>

</template>


<style scoped>
.multiselect:hover .multiselect-menu {
  display: block;
}

.multiselect-menu {
  display: none;
}


</style>