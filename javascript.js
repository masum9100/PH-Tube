const allData = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await response.json();
    const btnContainer = document.getElementById("btn-container");
    const singleData = data.data;

    singleData.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <a onclick="cardDetail('${category.category_id}')" class="tab bg-[#D3D3D3] text-black rounded">${category.category}</a> 
        `;
        btnContainer.appendChild(div);
    });
}

const cardDetail = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json();
    const cardContainer = document.getElementById("card-container")
    data.data.forEach((videos) => {
        console.log(videos)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex justify-center">
        <div class="w-72">
          <img class="rounded h-48" src=${videos?.thumbnail} alt="">
          <div class="flex justify-self-center items-center gap-5 mt-3">
            <div class="avatar">
              <div class="w-10 rounded-full">
                <img src=${videos?.authors[0]?.profile_picture} />
              </div>
            </div>
            <h1 class="text-base font-bold">${videos?.title}</h1>
          </div>
          <div class="flex justify-self-center items-center ml-[60px] font-normal text-sm text-[#5D5D5D] mt-2 gap-2">
            <h1>${videos?.authors[0]?.profile_name}</h1>
            <h1>${videos?.authors[0]?.verified}</h1>
          </div>
          <div class="ml-[60px] font-normal text-sm text-[#5D5D5D] mt-2">
            <h1><span>${videos?.others?.views}</span> Views</h1>
          </div>
        </div>
      </div>
        `
        cardContainer.appendChild(div)
    })
}



allData();