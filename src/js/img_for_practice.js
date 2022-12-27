
async function callApiImages () {
  let imgList = await fetch('https://picsum.photos/v2/list?page=1&limit=20')
  .then((response) => response.json())
  .then((data) => data);
  
  console.log(imgList);
}

