// feature products
const featuredProducts = productList.slice(0, 4)
const featuredProductsHTML = featuredProducts.map(product => `
    <div class="col-md-3">
        <div class="product-block">
            <div class="card border-0 rounded-0 text-decoration-none">
                <div class="mb-3 product-image-container">
                    <img src="${product.imgUrl}" alt="" class="card-img border-0 rounded-0">
                    <div class="group-action position-absolute" style="z-index: 1;">
                        <div class="shop-action">
                            <span class="product-detail-button fa-stack" data-bs-toggle="tooltip"
                                data-bs-title="Quick view">
                                <i class="fas fa-circle fa-stack-2x text-white"></i>
                                <a href="shop-details.html" class="fas fa-link fa-stack-1x text-black product-details-link text-decoration-none" data-productLink="${product.code}"></a>
                            </span>
                            <span class="wish-list-button fa-stack" data-bs-toggle="tooltip"
                                data-bs-title="Browse wishlist">
                                <i class="fas fa-circle fa-stack-2x text-white"></i>
                                <i class="fas fa-heart fa-stack-1x text-black ${(storageFavoriteValue || []).includes(product.code) ? " heart-selected" : ""}" data-codeProduct=${product.code}></i>
                            </span>
                            <span class="wish-list-button fa-stack" data-bs-toggle="tooltip"
                                data-bs-title="Compare">
                                <i class="fas fa-circle fa-stack-2x text-white"></i>
                                <i class="fas fa-refresh fa-stack-1x text-black"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="mb-3 text-black">
                        <p class="text-center">${product.name}</p>
                    </div>
                    <div class="d-flex gap-1 align-items-center justify-content-center">
                        <p class="fw-bold text-black">$${product.price}</p>
                    </div>
                </div>
            </div>
            <div class="add-to-cart position-absolute">
                <button
                    class="btn btn-primary text-uppercase fw-bold px-4 py-3 d-flex gap-2 align-items-center cart-in-product ${(storageCartValue || []).includes(product.code) ? " cart-selected" : ""}"  data-codeProduct=${product.code} >
                    <span>Add to cart</span>
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
        </div>
    </div>
`)
featuredProductsHTML.forEach(product => {
    document.querySelector(".product-container").innerHTML += product
});
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
assignDetails()
assignCartEvent()
assignHeartEvent()
function getSelectedPost(event) {
    localStorage.setItem("selectedPost", event.currentTarget.getAttribute("value"));
}

// register successfully flash
const flashDict = JSON.parse(localStorage.getItem("flash"))
if (flashDict) {
    flash(flashDict.type, flashDict.message)
    setTimeout(() => {
        localStorage.removeItem("flash")
    }, 6);
}

// back to top
const backToTopContainer = document.createElement("div")
backToTopContainer.innerHTML = `
    <span class="back-to-top fa-stack fa-2x cursor-pointer">
        <i class="fas fa-circle fa-stack-2x text-primary"></i>
        <i class="fa-sharp fa-solid fa-angle-up fa-stack-1x text-white"></i>
    </span>
`
document.body.appendChild(backToTopContainer)
document.querySelector(".back-to-top").addEventListener("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow")
})
document.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        document.querySelector(".back-to-top").style.opacity = 1
    } else {
        document.querySelector(".back-to-top").style.opacity = 0
    }
})

let interval = 3000
document.querySelectorAll(".num").forEach(num => {
    let startValue = 0
    let endValue = parseInt(num.getAttribute("data-value"))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(() => {
        startValue++
        num.textContent = startValue
        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration);
})