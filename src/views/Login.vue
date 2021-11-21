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
   <section class="show-animation login-wrapper">
      <p class="text-sm">
         Silahkan login dengan menggunakan akun anda yang telah terdaftar.
      </p>
      <!-- Form login -->
      <div class="form">
         <!-- username -->
         <div class="input-wrapper">
            <label for="username">Username</label>
            <input v-model="formLogin.username" class="w-full" type="text" name="username" id="username" placeholder="Masukkan username anda" />
         </div>
         <!-- passswod -->
         <div class="input-wrapper">
            <label for="passswod">Password</label>
            <div class="flex gap-2">
               <input v-model="formLogin.passswod" class="w-full" type="text" name="passswod" id="passswod" placeholder="Masukkan passswod anda" />
               <!-- Show or hide passswod -->
               <button type="button" class="bg-gray-500 px-3 rounded-lg text-gray-50">
                  <i class="fa fa-eye-slash"></i>
               </button>
            </div>
         </div>
         
         <!-- Alert -->
         <small v-if="isFail" class="duration-300 text-red-600">Username atau kata sandi salah</small>
         
         <!-- Button submit -->
         <button :disabled="!isFormLoginValid" @click="btnLogin" type="submit" class="btn bg-blue-500 text-gray-50 mt-6">
            <!-- default state -->
            <span v-if="!isProcess && !isSuccess" class="text-sm">
               Login
               <i class="text-xs fas fa-sign-in-alt"></i>
            </span>
            
            <!-- Loading state -->
            <span v-if="isProcess && !isSuccess">
               <i class="spinner text-xs fa fa-spinner"></i>
            </span>
            
            <!-- Success state -->
            <span v-if="isSuccess && !isProcess">
               <i class="text-xs fa fa-check"></i>
            </span>
            
         </button>
         <p class="mt-4 text-xs">
            Salah password ? atau kendala teknis lainnya, silahkan hubungi
            <a href="" class="text-blue-600 text-xs">Pusat Bantuan</a>
         </p>
      </div>
   </section>
</template>

<script setup>
   import { ref, reactive, computed } from 'vue'
   import { useRouter } from 'vue-router'
   
   //Instance 
   const router = useRouter()
   
   //Validation and util for show or hide password
   const formLogin = reactive({
      username: '',
      password: ''
   })
   
   //Handler for login progress
   const isProcess = ref(false)
   const isSuccess = ref(false)
   const isFail = ref(false)
   
   //Handler for submit form login
   const btnLogin = () => {
      setTimeout(() => {
         //Process state
         [ isProcess.value, isSuccess.value ] = [ true, false ]
         
         setTimeout(() => {
            //Fail state
            [ isProcess.value, isSuccess.value, isFail.value ] = [ false, false, true ]
            //Success state
            [ isProcess.value, isSuccess.value ] = [ false, true ]
            //Push to Home
            setTimeout(() => {
               router.push({ name: 'home' })
            }, 500)
         }, 2000)
      }, 500)
   }
</script>