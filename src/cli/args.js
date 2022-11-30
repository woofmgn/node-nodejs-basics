// const parseArgs = () => {
//   const proc = process.argv.slice(2);

//     // for( let i = 0; i < proc.length; i++) {
//     //   if(i.startsWith('--')) {
//     //     console.log(`${i} is ${i++}`)
//     //   }

//   let arr = []
//   proc.forEach((item) => {
//     if(item.startsWith('--')) {
//       arr.push(item)
//     }
//   })  

//   console.log(proc)
// };

// parseArgs();

const parseArgs = () => {
  const proc = process.argv.slice(2);

  let arr = [];
  let arr2 = [];

  proc.forEach((item, i) => {
    if((i % 2 === 0)) {
      arr.push(item);
    } else {
      arr2.push(item)
    }
  })

  console.log(arr)
  console.log(arr2)
  console.log(proc)
};

parseArgs();