// feature products
const featuredProducts = productList.slice(0, 4);
const featuredProductsHTML = featuredProducts.map(
    (product) => `
    <div class="col-md-3">
        <div class="product-block">
            <div class="card border-0 rounded-0 text-decoration-none">
                <div class="mb-3 product-image-container">
                    <img src="${
                        product.imgUrl
                    }" alt="" class="card-img border-0 rounded-0">
                    <div class="group-action position-absolute" style="z-index: 1;">
                        <div class="shop-action">
                            <span class="product-detail-button fa-stack" data-bs-toggle="tooltip"
                                data-bs-title="Quick view">
                                <i class="fas fa-circle fa-stack-2x text-white"></i>
                                <a href="shop-details.html" class="fas fa-link fa-stack-1x text-black product-details-link text-decoration-none" data-productLink="${
                                    product.code
                                }"></a>
                            </span>
                            <span class="wish-list-button fa-stack" data-bs-toggle="tooltip"
                                data-bs-title="Browse wishlist">
                                <i class="fas fa-circle fa-stack-2x text-white"></i>
                                <i class="fas fa-heart fa-stack-1x text-black ${
                                    (storageFavoriteValue || []).includes(
                                        product.code
                                    )
                                        ? " heart-selected"
                                        : ""
                                }" data-codeProduct=${product.code}></i>
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
                        
                        <p class="fw-bold text-black">${product.price.toLocaleString(
                            "vi-VN"
                        )} VNĐ</p>

                    </div>
                </div>
            </div>
            <div class="add-to-cart position-absolute">
                <button
                    class="btn btn-primary text-uppercase fw-bold px-4 py-3 d-flex gap-2 align-items-center cart-in-product ${
                        (storageCartValue || []).includes(product.code)
                            ? " cart-selected"
                            : ""
                    }"  data-codeProduct=${product.code} >
                    <span>Add to cart</span>
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
        </div>
    </div>
`
);
// Vòng lặp này duyệt qua mảng các chuỗi HTML đã được tạo bởi map.
// document.querySelector(".product-container").innerHTML += product;: Thêm HTML của mỗi sản phẩm vào phần tử có class product-container (đây là nơi các sản phẩm nổi bật sẽ được hiển thị trên trang).
featuredProductsHTML.forEach((product) => {
    document.querySelector(".product-container").innerHTML += product;
});
//Khởi tạo tooltip của Bootstrap cho các phần tử có thuộc tính data-bs-toggle="tooltip"
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// assignDetails(): Xử lý chức năng "xem nhanh".
// assignCartEvent(): Xử lý chức năng "thêm vào giỏ hàng".
// assignHeartEvent(): Xử lý chức năng "yêu thích"
assignDetails();
assignCartEvent();
assignHeartEvent();
function getSelectedPost(event) {
    localStorage.setItem(
        "selectedPost",
        event.currentTarget.getAttribute("value")
    );
}

// Hàm này có nhiệm vụ lưu trữ ID hoặc một định danh nào đó của một bài viết (post) được chọn vào localStorage của trình duyệt.
// event.currentTarget: Tham chiếu đến phần tử đã kích hoạt sự kiện.
// getAttribute("value"): Lấy giá trị của thuộc tính value của phần tử đó.
// localStorage.setItem("selectedPost", ...): Lưu giá trị vào localStorage với khóa là "selectedPost".

// register successfully flash
const flashDict = JSON.parse(localStorage.getItem("flash"));
if (flashDict) {
    flash(flashDict.type, flashDict.message);
    setTimeout(() => {
        localStorage.removeItem("flash");
    }, 6);
}

// back to top
const backToTopContainer = document.createElement("div");
backToTopContainer.innerHTML = `
    <span class="back-to-top fa-stack fa-2x cursor-pointer">
        <i class="fas fa-circle fa-stack-2x text-primary"></i>
        <i class="fa-sharp fa-solid fa-angle-up fa-stack-1x text-white"></i>
    </span>
`;
document.body.appendChild(backToTopContainer);

//sự kiện click
document.querySelector(".back-to-top").addEventListener("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

//cuộn trang
document.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        document.querySelector(".back-to-top").style.opacity = 1;
    } else {
        document.querySelector(".back-to-top").style.opacity = 0;
    }
});

let interval = 3000;
document.querySelectorAll(".num").forEach((num) => {
    let startValue = 0;
    let endValue = parseInt(num.getAttribute("data-value"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startValue++;
        num.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});
