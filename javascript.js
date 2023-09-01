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

const cardDetail = async (categoryId) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json();
    
}





allData();

