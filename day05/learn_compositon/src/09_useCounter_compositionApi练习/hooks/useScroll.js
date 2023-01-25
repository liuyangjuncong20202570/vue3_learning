import { ref,watch } from 'vue'
export default function (){
  let scrollx = ref(0)
  let scrolly = ref(0)
  document.addEventListener('scroll',()=>{
    scrollx.value = window.scrollX
    scrollx.value = window.scrollY
    console.log(scrollx.value, scrolly.value)
  })
      
   
   return{
    scrollx,
    scrolly
   }
}