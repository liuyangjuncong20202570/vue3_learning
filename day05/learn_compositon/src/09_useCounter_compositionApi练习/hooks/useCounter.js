import {ref} from 'vue'
export default function() {
  let counter = ref(0)
  const increament = ()=>{
    // !!!!切记切记：得到的ref对象要记得解包!!!!
    counter.value++
  }
  const decrement = ()=>{
    counter.value--
  }
  return{
    counter,
    increament,
    decrement
  }
}