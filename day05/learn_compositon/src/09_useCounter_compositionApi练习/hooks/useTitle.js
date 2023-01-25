import {ref,watch} from 'vue'
export default function(){
  // 此处的思路：设定一个侦听器并且返回一个值，通过改变返回的值在侦听器中改变标题
  const changeTitle = (titleValue)=>{
    // document.title =val
    const title = ref(titleValue)
  watch(title,(newValue)=>{
    document.title = newValue
  },{
    immediate:true
  })
  return title
  }
  return {
    changeTitle
  }
}