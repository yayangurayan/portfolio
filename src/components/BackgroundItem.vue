<script setup>
defineProps({
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  points: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <li class="relative pb-8">
    <!-- Garis Timeline (jika bukan item terakhir) -->
    <span class="absolute left-[5px] top-5 -ml-px h-full w-0.5 bg-text-main/10" aria-hidden="true"></span>

    <div class="relative flex items-start space-x-4">
      <div>
        <!-- Titik Timeline -->
        <span
          class="absolute -left-1 top-[22px] flex h-2.5 w-2.5 items-center justify-center rounded-full bg-primary"
        ></span>
      </div>
      <div class="min-w-0 flex-1 pl-6">
        <!-- Tanggal -->
        <span class="font-mono text-sm uppercase tracking-wider text-secondary">{{ date }}</span>
        <!-- Judul -->
        <h3 class="mt-1 font-poppins text-lg font-semibold text-text-main">{{ title }}</h3>
        <!-- Subjudul/Perusahaan -->
        <p class="mt-1 text-base text-text-main/70">{{ subtitle }}</p>
        <!-- Poin-poin Deskripsi -->
        <ul v-if="points.length > 0" class="mt-4 list-disc space-y-2 pl-5">
          <li v-for="(point, index) in points" :key="index" class="text-sm text-text-main/90">
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>
