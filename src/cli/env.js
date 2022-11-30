const parseEnv = () => {
  const proc = process.env;
  let arr = [];

  for (let [key, value] of Object.entries(proc)) {
    if(key.startsWith('RSS_')) {
      arr.push(key +'=' + value)
    }
  }

  const res = arr.join(', ')
  console.log(res.replace(', ', '; '))
};

parseEnv();