
async function callApiImages () {
  let imgList = await fetch('https://picsum.photos/v2/list?page=1&limit=20')
  .then((response) => response.json())
  .then((data) => data);
  
  console.log(imgList);
}

window.onload = function(){
    let img_stroage = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6'];
    let img_list = '';
    for(let i = 0; i < img_storage.length; i++){
        img_list += `<li>
        <img src = "https://picsum.photos/300/">
        </li>` 
    }
    document.querySelector('.practice-img-list').innerHTML = img_list;
}
