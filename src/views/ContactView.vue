<template>
  <MainLayout :pageTitle="pageTitle">
    <section class="p-8">
      <h2 class="text-2xl font-bold mb-4">Contact Me</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            id="subject"
            v-model="form.subject"
            required
            class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            required
            class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          ></textarea>
        </div>

        <button
          type="submit"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  </MainLayout>
</template>

<script setup>
import { ref } from "vue";
import MainLayout from "../components/MainLayout.vue";
import Swal from 'sweetalert2';

const pageTitle = "Contact";
const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = () => {
  console.log("Form submitted:", form.value);
  Swal.fire({
    title: "Thank you!",
    text: "I'll get back to you as soon as possible.",
    icon: "success",
    confirmButtonText: "OK",
  });
  form.value = { name: "", email: "", subject: "", message: "" }; // Reset form
};
</script>
