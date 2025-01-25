// import axios from 'axios'
// import React, { useEffect } from 'react'

// const Example = () => {
//     useEffect(()=>{
//         const fun=async ()=>{
//          const req=await axios.get('https://fast-silver-cow.glitch.me/First.json')
//          const res=await req.data.Skechers;
//          console.log(res)
//         }
//         fun()
//     },[])
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Example


// let arr1=[1,2,3,4,5]
// let arr2=[6,7,8,9,10]
// let subarr=[]

//   for(let j=0;j<arr2.length;j++){
//    subarr.push(arr1[j],arr2[j])
// }
// console.log(subarr)


// let arr=[[1,2,3,4,5],[[7,8,9]],6,7,8]
// console.log(arr.flat(Infinity)) 

function su(){
  return 'helo surya'
}
function parent(sum){
  return sum()
}
const inst=parent(su)
console.log(inst)
