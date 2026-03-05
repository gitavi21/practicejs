
function Debouncing(){
  function change(e){
    
    debounce(()=>{console.log(e.target.value)},1000)()
  }
  function debounce(fn,delay){
    let timer;
    return function (...args){
      clearTimeout(timer)
      timer = setTimeout(()=>{
        fn(...args)
      },delay)
    }
  }
