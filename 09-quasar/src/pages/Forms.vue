<template>
    <q-page class="q-ma-md">
      
        <span class="text-h3">Forms</span>
        <q-separator spaced/>
  
        <div class="row justify-center">
                <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-xs col-sm-12 col-xs-12 col-md-6 q-pt-xl"
                >
                <q-input
                    filled
                    v-model="userForm.email"
                    label="Correo electrónico"
                    lazy-rules
                    type="email"
                    :rules="[ 
                        val => val && val.length > 0 || 'Este campo es obligatorio',
                        isValidEmail // val => isValidEmail(val) 
                    ]"
                />

                <q-input
                    filled
                    type="password"
                    v-model="userForm.password1"
                    label="Contraseña"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Este campo es obligatorio']"
                />

                <q-input
                    filled
                    type="password"
                    v-model="userForm.password2"
                    label="Repetir contraseña"
                    lazy-rules
                    :rules="[ 
                        val => val && val.length > 0 || 'Este campo es obligatorio',
                        isSamePassword
                    ]"
                />

                <q-checkbox
                  v-model="userForm.conditions"
                  label="Acepto las condiciones y términos de uso"
                  :style="userForm.errorInConditions
                    && !userForm.conditions 
                    && 'color: #c71111; font-weight: bold;'"
                />
            
                <div class="row justify-end">
                    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                    <q-btn unelevated label="Submit" type="submit" color="primary"/>
                </div>
                </q-form>
            </div>
    </q-page>
  </template>
  
<script>
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
    name: 'FormsPage',
    setup(){
        const $q = useQuasar()

        const userForm = ref({
            email: '',
            password1: '',
            password2: '',
            conditions: false,
            errorInConditions: false
        })

        const triggerErrorInCondition = () => {
            $q.notify({
                type: 'negative',
                message: 'Debe aceptar los términos y condiciones'
            })
        }
        return{
            userForm,

            onSubmit(){
                userForm.value.errorInConditions = false

                if(!userForm.value.conditions){
                    userForm.value.errorInConditions = true
                    triggerErrorInCondition()
                    return
                }
            },
            onReset(){
                userForm.value = {
                    email: '',
                    password1: '',
                    password2: '',
                    conditions: false,
                    errorInConditions: false
                }
            },
            isValidEmail(val)  {
                const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
                return emailPattern.test(val) || 'El correo no parece ser válido';
            },
            isSamePassword(val){
                return (val === userForm.value.password1) || 'Las contraseñas deben coincidir'
            },
        }
    }
})
</script>