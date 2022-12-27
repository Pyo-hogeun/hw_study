window.onload = function(){
    const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}
async function callApiImages () {
  let imgList = await fetch('https://picsum.photos/v2/list?page=1&limit=20')
  .then((response) => response.json())
  .then((data) => data);
  
  renderImgList(imgList);
}

function renderImgList(imgList){
    let imageData = '';
    imgList.forEach(function(event){
        imageData += `
        <img src = '${imgList.download_url}'>
        ${event.id}
        ${event.author}
        ${event.width}
        ${event.height}
        ${event.url}
        `
    })
    document.querySelector('.practice-img-list').innerHTML = imageData;
}



// function renderImgList(imageData){
//     console.log(imageData);
//     let img_list = '';
//     for(let i = 0; i < imageData.length; i++){
//         img_list += `<li>
//         <img src = '${imageData[i].download_url}'>
//         <div>
//             <div>
//                 id = ${imageData[i].id}
//             </div>
//             <div>
//                 author = ${imageData[i].author}
//             </div>
//             <div>
//                 width = ${imageData[i].width}
//             </div>
//             <div>
//                 height = ${imageData[i].height}
//             </div>
//             <div>
//                 url = ${imageData[i].url}
//             </div>
//         </div>
//         </li>` 
//     }
//     document.querySelector('.practice-img-list').innerHTML = img_list;
// }
