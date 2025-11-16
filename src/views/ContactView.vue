<script setup>
import { ref, computed } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import FormField from '@/components/FormField.vue'
import { useLang } from '@/composable/useLang' // PERBAIKAN: Path

const { lang } = useLang()

// Data Kontak dari CV
const contactDetailsData = {
  id: [
    {
      name: 'Email',
      value: 'andriandareen@gmail.com',
      href: 'mailto:andriandareen@gmail.com',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />`,
    },
    {
      name: 'Telepon',
      value: '0813 9681 5717',
      href: 'tel:+6281396815717',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.63C11.23 13.5 9.5 11.77 8.18 9.143l1.293-.97c.363-.271.527-.734.417-1.173L9.09 2.766c-.125-.501-.575-.852-1.091-.852H6.75A2.25 2.25 0 004.5 4.125v2.625z" />`,
    },
  ],
  en: [
    {
      name: 'Email',
      value: 'andriandareen@gmail.com',
      href: 'mailto:andriandareen@gmail.com',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />`,
    },
    {
      name: 'Phone',
      value: '+62 813 9681 5717',
      href: 'tel:+6281396815717',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.63C11.23 13.5 9.5 11.77 8.18 9.143l1.293-.97c.363-.271.527-.734.417-1.173L9.09 2.766c-.125-.501-.575-.852-1.091-.852H6.75A2.25 2.25 0 004.5 4.125v2.625z" />`,
    },
  ],
}
const contactDetails = computed(() => contactDetailsData[lang.value])

// PERBAIKAN: Ikon SVG untuk social links
const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/yayangurayan',
    icon: `<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />`,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/andrian-kho-947a97264',
    icon: `<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />`,
  },
]

// State untuk form
const formState = ref({
  name: '',
  email: '',
  message: '',
})

// Endpoint Formspree kamu
const formspreeEndpoint = 'https://formspree.io/f/mqawyvyy'

// Teks dinamis
const t = computed(() => {
  return {
    span: lang.value === 'id' ? 'Hubungi Saya' : 'Contact Me',
    title: lang.value === 'id' ? 'Mari Berkolaborasi' : "Let's Collaborate",
    desc:
      lang.value === 'id'
        ? 'Saya selalu terbuka untuk mendiskusikan proyek baru, peluang *freelance*, atau ide menarik lainnya. Jangan ragu untuk mengirim saya pesan.'
        : 'I am always open to discussing new projects, freelance opportunities, or other interesting ideas. Feel free to send me a message.',
    follow: lang.value === 'id' ? 'Follow saya:' : 'Follow me:',
    formTitle: lang.value === 'id' ? 'Kirim saya pesan' : 'Send me a message',
    labelName: lang.value === 'id' ? 'Nama Lengkap' : 'Full Name',
    labelEmail: lang.value === 'id' ? 'Email' : 'Email',
    labelMessage: lang.value === 'id' ? 'Pesan' : 'Message',
    btnSend: lang.value === 'id' ? 'Kirim Pesan' : 'Send Message',
  }
})
</script>

<template>
  <main>
    <div class="relative isolate overflow-hidden py-24 sm:py-32">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-16 px-6 lg:grid-cols-2 lg:px-8">
        <!-- Kolom Teks (Kiri) -->
        <div class="max-w-xl lg:max-w-lg">
          <span class="font-mono text-sm uppercase text-primary">{{ t.span }}</span>
          <h1
            class="mt-2 font-poppins text-4xl font-bold tracking-tight text-text-main sm:text-5xl"
          >
            {{ t.title }}
          </h1>
          <p class="mt-4 text-lg leading-8 text-text-main/70">
            {{ t.desc }}
          </p>

          <!-- Info Kontak (WDD 3.1) -->
          <div class="mt-10 space-y-6">
            <a
              v-for="detail in contactDetails"
              :key="detail.name"
              :href="detail.href"
              class="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-white/5"
            >
              <div
                class="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  v-html="detail.icon"
                ></svg>
              </div>
              <div>
                <dt class="font-poppins font-semibold text-text-main">{{ detail.name }}</dt>
                <dd class="font-mono text-text-main/70">{{ detail.value }}</dd>
              </div>
            </a>
          </div>

          <!-- Social Links (WDD 3.1) -->
          <div class="mt-10 flex items-center gap-x-6 border-t border-white/10 pt-8">
            <span class="font-mono text-sm text-text-main/50">{{ t.follow }}</span>
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-text-main/70 transition-colors hover:text-primary"
            >
              <span class="sr-only">{{ social.name }}</span>
              <!-- PERBAIKAN: Ikon SVG Asli -->
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" v-html="social.icon"></svg>
            </a>
          </div>
        </div>

        <!-- Kolom Form (Kanan) (WDD 3.1) -->
        <form
          :action="formspreeEndpoint"
          method="POST"
          class="space-y-6 rounded-xl border border-white/10 bg-background/50 p-6 shadow-xl shadow-black/20 lg:p-8"
        >
          <h2 class="font-poppins text-2xl font-semibold text-text-main">{{ t.formTitle }}</h2>
          <FormField
            v-model="formState.name"
            :label="t.labelName"
            name="name"
            type="text"
            required
          />
          <FormField
            v-model="formState.email"
            :label="t.labelEmail"
            name="email"
            type="email"
            required
          />
          <FormField
            v-model="formState.message"
            :label="t.labelMessage"
            name="message"
            type="textarea"
            required
          />

          <!-- Tombol Kirim (WDD 3.2: micro-interaction) -->
          <BaseButton type="submit" variant="primary" class="w-full">
            {{ t.btnSend }}
          </BaseButton>
        </form>
      </div>
    </div>
  </main>
</template>
