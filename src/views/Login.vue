<style scoped>
   .login-wrapper {
      @apply px-3 py-2 mt-20;
   }
   
   .form {
      @apply mt-5;
   }
   
   .input-wrapper {
      @apply w-full mt-3;
   }
   
   .input-wrapper label {
      @apply text-sm font-semibold block mb-1;
   }
   
   .input-wrapper input::placeholder {
      font-size: .8rem;
   }
   
   .input-wrapper input {
      @apply text-sm bg-gray-50 p-3 rounded-lg border-2 border-gray-300;
   }
</style>

<template>
   <section class="login-wrapper">
      <p class="text-sm">
         Silahkan login dengan menggunakan akun anda yang telah terdaftar.
      </p>
      <!-- Form login -->
      <form class="form">
         <!-- username -->
         <div class="input-wrapper">
            <label for="username">Username</label>
            <input  class="w-full" type="text" name="username" id="username" placeholder="Masukkan username anda" />
         </div>
         <!-- passswod -->
         <div class="input-wrapper">
            <label for="passswod">Password</label>
            <div class="flex gap-2">
               <input  class="w-full" type="text" name="passswod" id="passswod" placeholder="Masukkan passswod anda" />
               <!-- Show or hide passswod -->
               <button type="button" class="bg-gray-500 px-3 rounded-lg text-gray-50">
                  <i class="fa fa-eye-slash"></i>
               </button>
            </div>
         </div>
         <!-- Button submit -->
         <button type="submit" class="btn bg-blue-500 text-gray-50 mt-6">
            Login
            <i class="text-sm fas fa-sign-in-alt"></i>
         </button>
         <p class="mt-4 text-xs">
            Salah password ? atau kendala teknis lainnya, silahkan hubungi
            <a href="" class="text-blue-600 text-xs">Pusat Bantuan</a>
         </p>
      </form>
   </section>
</template>