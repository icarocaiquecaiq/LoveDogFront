<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <div class="flex flex-col justify-between">
        <header class="flex justify-between flex-col h-full">
        <div class="flex justify-start flex-col">
            <div class="flex items items-center
            justify-center max-lg:flex-wrap">
                <img  class="overflow-hidden min-w-16 max-md:h-24" src="../assets/DogLaranja.svg" alt="logo cachorro svg">
                <i class="text-center text-orange-600 max-xl:text-xl text-3xl font-kameron not-italic font-semibold">LoveDogs</i>
            </div>
            <nav>
                <ul class="">
                    <li class="">
                        <a href="">
                           
                            Cadastrar
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           
                            Padrinhos
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           
                            Relatórios
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           
                            Estoque
                        </a>
                    </li>
                    <li>
                        <a href="#">
                          Galeria
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           
                            Gestão
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        
        <div >
            <a >
               info
            </a>
            <a >
                config
            </a>
        </div>
        </header>
    </div>
</template>

<style scoped>


li{
    display: flex;
    justify-content: center;
    padding: 0.5rem 0px; 
}

a{
    font-size: 1rem;
    font-weight: 500;
    color: white;
    width: 150px;
}

li > a{
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 15px;
}

li > a:hover{
    color:#EA580C;
}

.read-the-docs {
  color: #888;
}
</style>
