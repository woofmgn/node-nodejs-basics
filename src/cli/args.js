const parseArgs = () => {
  const proc = process.argv.slice(2);

  const res = proc.reduce((acc, value, i, arr) => {
    if (value.startsWith("--")) {
      return acc + value + " is ";
    } else if (arr.length === i + 1) {
      return acc + value;
    }
    return acc + value + ", ";
  }, "");

  console.log(res);
};

parseArgs();
