//nhận 1 price làm đầu vào định dạng thành 1 chuỗi với phân cách hàng nghìn bằng dấu chấm

function formatPrice(price) {
    return price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

let dataProductCurrent = dataProductAll;

const priceStart = document.querySelector(".price-start");
const priceEnd = document.querySelector(".price-end");
const rangeMain = document.querySelector(".range-main");
const rangeValueStart = this.document.querySelector(".range__value-start");
const rangeValueEnd = this.document.querySelector(".range__value-end");
const rangeBlack = this.document.querySelector(".range__black");
let leftS = rangeValueStart.getBoundingClientRect().left;

let leftE = rangeValueEnd.getBoundingClientRect().left;
//nhận 2 tham số max và min
function setMaxMinFilter(max, min) {
    //gán gtri max và min đã format ở hàm trên
    priceStart.textContent = formatPrice(min);
    priceEnd.textContent = formatPrice(max);
}
setMaxMinFilter(
    //tính giá trị tối đa từ mảng dataProductAll
    Math.max(...dataProductAll.map((item) => item.price)),
    //tính giá trị nhỏ  nhất từ dataProductAll
    Math.min(...dataProductAll.map((item) => item.price))
);
rangeValueStart.addEventListener("mousedown", function (e) {
    // tạo hình chữ nhật bao quanh của phần tử rangeMain
    let { left, right, width, height } = rangeMain.getBoundingClientRect();
    let temp;
    console.log(left, right, width, height);
    // khi chuột di chuyển trong khi nút chuột vẫn được nhấn xuống
    function handleMouseMove(e) {
        //tính vị trí ngang của chuột và độ lẹch của chuột so với tay cầm
        let posX = e.clientX - left - 10;
        leftS = rangeValueStart.getBoundingClientRect().left;
        // kiểm tra vị trí ngang của chuột có vượt quá chiều rộng cảu phần tử rangeMain ko
        if (posX > width) {
            posX = width;
        }
        //kiểm tra có nhỏ hơn 0 ko nếu có cho = 0
        if (posX < 0) {
            posX = 0;
        }
        // kiểm tra vị trí tọa độ kết thúc có bằng tọa độ ban đầu ko nếu quá thì sẽ xóa trình lắng nghe
        if (leftE <= leftS + 20) {
            document.removeEventListener("mousemove", handleMouseMove);
        }
        //tính chuyển đổi giá trị của tay cầm thành 1 gtri
        temp =
            (posX / width) *
                (Math.max(...dataProductAll.map((item) => item.price)) -
                    Math.min(...dataProductAll.map((item) => item.price))) +
            Math.min(...dataProductAll.map((item) => item.price));
        //cập nhật nội dung văn bản thành giá đã tính
        priceStart.textContent = formatPrice(temp);

        //đặt css
        rangeValueStart.style.left = posX + "px";
        rangeBlack.style.left = posX + 10 + "px";
        rangeBlack.style.width = leftE - leftS + "px";
    }
    //thực thi nhấn chuột váo và ra
    document.addEventListener("mousemove", handleMouseMove);

    document.addEventListener("mouseup", function () {
        document.removeEventListener("mousemove", handleMouseMove);
    });
});
//sử lí khi chuột được nhấn
rangeValueEnd.addEventListener("mousedown", function (e) {
    let { left, right, width, height } = rangeMain.getBoundingClientRect();
    console.log(left, right, width, height);

    function handleMouseMove(e) {
        let posX = e.clientX - left - 10;
        leftE = rangeValueEnd.getBoundingClientRect().left;

        if (posX > width) {
            posX = width;
        }
        if (posX < 0) {
            posX = 0;
        }
        // cập nhật biến với vijtrij bên trái hiện tại
        if (leftE <= leftS + 20) {
            document.removeEventListener("mousemove", handleMouseMove);
        }
        temp =
            (posX / width) *
                (Math.max(...dataProductAll.map((item) => item.price)) -
                    Math.min(...dataProductAll.map((item) => item.price))) +
            Math.min(...dataProductAll.map((item) => item.price));
        priceEnd.textContent = formatPrice(temp);
        rangeValueEnd.style.left = posX + "px";
        rangeBlack.style.width = leftE - leftS + "px";
    }

    document.addEventListener("mousemove", handleMouseMove);

    document.addEventListener("mouseup", function () {
        document.removeEventListener("mousemove", handleMouseMove);
    });
});

// shop
//sử lý trình thả xuống
const categoryDropdown = document.querySelector(".category__dropdown");
categoryDropdown.addEventListener("click", function (e) {
    const categoryDropdownIcon = document.querySelector(
        ".category__dropdown-icon"
    );
    categoryDropdownIcon.classList.toggle("fa-plus");
    categoryDropdownIcon.classList.toggle("fa-minus");
});
const range = document.querySelector(".range-main");

// categories
const categoriesValue = document.querySelectorAll(".category__text");
console.log(categoriesValue);
const categoriesIconSelect = document.querySelectorAll(
    ".category__icon-select"
);
let dataFilterCategories = dataProductAll;
let dataFilterBrands = dataProductAll;
function handleCategories() {
    return categoriesValue.forEach((item) => {
        item.addEventListener("click", function (e) {
            if (e.target.classList.contains("category-selected")) {
                e.target.classList.remove("category__icon-selected");
                e.target.classList.remove("category-selected");
                e.target.previousElementSibling.innerHTML = ``;
                e.target.previousElementSibling.classList.remove(
                    "category__icon-selected"
                );
                dataProductCurrent = dataFilterBrands;
                dataFilterCategories = dataProductAll;
                renderPagination(dataProductCurrent);
                assignPaginationEvent(dataProductCurrent);
                handleRenderProductsBody(dataProductCurrent);
                assignHeartEvent();
                assignCartEvent();
                assignDetails();
            } else {
                categoriesIconSelect.forEach((item) => {
                    item.classList.remove("category__icon-selected");
                });
                categoriesValue.forEach((item) => {
                    item.classList.remove("category-selected");
                    item.previousElementSibling.innerHTML = ``;
                });
                e.target.classList.add("category-selected");
                e.target.previousElementSibling.innerHTML = `<i class="fa-solid fa-check"></i>`;
                e.target.previousElementSibling.classList.add(
                    "category__icon-selected"
                );

                dataFilterCategories = dataProductAll.filter(function (item) {
                    return item.categories.includes(
                        `${e.target.textContent.trim()}`
                    );
                });
                dataProductCurrent = dataFilterCategories.filter(function (
                    item
                ) {
                    return dataFilterBrands.includes(item);
                });

                renderPagination(dataProductCurrent);
                assignPaginationEvent(dataProductCurrent);
                handleRenderProductsBody(dataProductCurrent);
                assignHeartEvent();
                assignCartEvent();
                assignDetails();
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", function () {
    handleCategories();
});
// brand
const brandsValue = document.querySelectorAll(".product__brand__text");
const brandsIconSelect = document.querySelectorAll(
    ".product__brand__icon-select"
);
function handleBrands() {
    return brandsValue.forEach((item) => {
        item.addEventListener("click", function (e) {
            if (e.target.classList.contains("brand-selected")) {
                e.target.classList.remove("brand__icon-selected");
                e.target.classList.remove("brand-selected");
                e.target.previousElementSibling.innerHTML = ``;
                e.target.previousElementSibling.classList.remove(
                    "brand__icon-selected"
                );
                dataProductCurrent = dataFilterCategories;
                dataFilterBrands = dataProductAll;
                renderPagination(dataProductCurrent);
                assignPaginationEvent(dataProductCurrent);
                handleRenderProductsBody(dataProductCurrent);
                assignHeartEvent();
                assignCartEvent();
                assignDetails();
            } else {
                brandsIconSelect.forEach((item) => {
                    item.classList.remove("brand__icon-selected");
                });
                brandsValue.forEach((item) => {
                    item.classList.remove("brand-selected");
                    item.previousElementSibling.innerHTML = ``;
                });
                e.target.classList.add("brand-selected");
                e.target.previousElementSibling.innerHTML = `<i class="fa-solid fa-check"></i>`;
                e.target.previousElementSibling.classList.add(
                    "brand__icon-selected"
                );

                dataFilterBrands = dataProductAll.filter(function (item) {
                    return item.brand === `${e.target.textContent.trim()}`;
                });
                dataProductCurrent = dataFilterBrands.filter(function (item) {
                    return dataFilterCategories.includes(item);
                });

                renderPagination(dataProductCurrent);
                assignPaginationEvent(dataProductCurrent);
                handleRenderProductsBody(dataProductCurrent);
                assignHeartEvent();
                assignCartEvent();
                assignDetails();
            }
        });
    });
}
handleBrands();

// list body
const listProductsBody = document.querySelector(".list-products__body");
let currentPage = 1;
function renderViewTable(data) {
    cartCount();
    const listProductContent = data.map((item, index) => {
        let discount = false;
        if (item.discount > 0) {
            discount = true;
        } else {
            discount = false;
        }
        if (index < currentPage * 12 && index >= (currentPage - 1) * 12) {
            // Calculate the discounted price
            const discountedPrice = (item.price * (100 - item.discount)) / 100;

            return `
                    <div class="products-item position-relative">
                        <span class="product-item-discount ${
                            discount ? "" : " d-none"
                        }">-${item.discount}%</span>
                        <img src=${item.imgUrl} alt=${
                item.name
            } class="product-item-img" />
                        <p class="product-item-name">${item.name}</p>
                        <div class="product__group-prices">
                            <p class=${
                                discount ? "real__price" : "normal__price"
                            }>${formatPrice(item.price)} VND</p>
                            <p class="sale__price ${
                                discount ? "" : " d-none"
                            }">${formatPrice(discountedPrice)} VND</p>
                        </div>
                        <div class="product__actions d-flex flex-column align-items-center justify-content-between gap-2 position-absolute p-3 top-0 start-0 w-100 h-100" style="background-color: rgba(256, 256, 256, 0.5);z-index:-10;transform:translateY(80px);border:3px solid rgb(255, 174, 0);opacity:0;visibility:hidden;border-radius:30px">
                            <div class="product__actions__group-1 d-flex gap-3 position-relative" style="z-index:999">
                                <a href="./shop-details.html" class="fa-solid fa-link product-details-link" data-productLink=${
                                    item.code
                                }></a>
                                <i class="fa-regular fa-heart ${
                                    (storageFavoriteValue || []).includes(
                                        item.code
                                    )
                                        ? " heart-selected"
                                        : ""
                                }" data-codeProduct=${
                item.code
            }></i><i class="fa-solid fa-repeat"></i>
                            </div>
                            <div data-codeProduct=${
                                item.code
                            } class="product__actions__group-2 d-flex align-items-center cart-in-product ${
                (storageCartValue || []).includes(item.code)
                    ? " cart-selected"
                    : ""
            }" style="color: white;max-width:100%; background-color: rgb(255, 174, 0);padding:5px 10px; border-radius:30px">
                                <span>ADD TO CART</span>
                                <i class="fa-solid fa-cart-shopping text-black border-0 bg-transparent"></i>
                            </div>
                        </div>
                    </div>`;
        }
    });
    listProductsBody.innerHTML = listProductContent.join("");
}
function renderViewList(data) {
    cartCount();
    const listProductContent = data.map((item, index) => {
        let discount = false;
        if (item.discount > 0) {
            discount = true;
        } else {
            discount = false;
        }
        if (index < currentPage * 12 && index >= (currentPage - 1) * 12) {
            // Calculate the discounted price
            const discountedPrice = (item.price * (100 - item.discount)) / 100;

            return `
                    <div class="list-products__body-list__item d-flex align-items-start gap-5 p-5 border border-subtle">
                        <div class="products__body-list__item__left">
                            <img src=${item.imgUrl} alt=${item.name} />
                        </div>
                        <div class="list-products__body__item-list__right d-flex flex-column gap-3">
                            <p class="list-products__item__categories">
                                ${item.categories.join(", ")}
                            </p>
                            <a class="list-products__item__name">
                                ${item.name}
                            </a>
                            <p class="list-products__item__desc">
                                ${item.desc}
                            </p>
                            <div class="product__group-prices">
                                <p class=${
                                    discount ? "real__price" : "normal__price"
                                }>${formatPrice(item.price)} VND</p>
                                <p class="sale__price ${
                                    discount ? "" : " d-none"
                                }">${formatPrice(discountedPrice)} VND</p>
                            </div>
                            <div class="product__actions d-flex gap-2">
                                <a href="./shop-details.html" class="fa-solid fa-link product-details-link" data-productLink=${
                                    item.code
                                }></a>
                                <i class="fa-regular fa-heart  ${
                                    (storageFavoriteValue || []).includes(
                                        item.code
                                    )
                                        ? " heart-selected"
                                        : ""
                                }" data-codeProduct=${
                item.code
            }></i><i class="fa-solid fa-repeat"></i>
                                <i class="fa-solid fa-cart-shopping  cart-in-product ${
                                    (storageCartValue || []).includes(item.code)
                                        ? " cart-selected"
                                        : ""
                                }" data-codeProduct=${item.code}></i>
                            </div>
                        </div>
                    </div>`;
        }
    });
    listProductsBody.innerHTML = listProductContent.join("");
}
const pagination = document.querySelector(".pagination");
function handleRenderProductsBody(data) {
    if (data.length === 0) {
        listProductsBody.innerHTML = `<div style="text-align:center;font-size: 20px;">No products found</div>`;
    } else {
        if (listProductsBody.classList.contains("list-products__body-table")) {
            return renderViewTable(data);
        } else if (
            listProductsBody.classList.contains("list-products__body-list")
        ) {
            return renderViewList(data);
        }
    }
}
function renderPagination(data) {
    const totalProducts = data.length;
    const numberOfPages = Math.ceil(totalProducts / 12);
    let temp = "";
    if (totalProducts === 0) {
        pagination.innerHTML = temp;
    } else {
        for (i = 1; i <= numberOfPages; i++) {
            temp += `<div class="pagination-num ${
                currentPage == i ? "pagination-num--active" : ""
            }">${i}</div>`;
        }

        pagination.innerHTML = `
                <div class="pagination-pre  ${
                    currentPage == 1 ? " d-none" : ""
                } ${currentPage > 1 ? "d-block" : ""}">
                    <i class="fa-solid fa-chevron-left"></i>
                    PRE
                </div>
                ${temp}
                <div class="pagination-next ${
                    numberOfPages > 1 && currentPage !== numberOfPages
                        ? ""
                        : " d-none"
                }"> 
                    NEXT 
                    <i class="fa-solid fa-chevron-right"></i>
                </div>`;
    }
}
// Định nghĩa hàm để gán sự kiện cho các nút pagination
function assignPaginationEvent(data) {
    const paginationNums = [...document.querySelectorAll(".pagination-num")];
    paginationNums.forEach((item) => {
        item.addEventListener("click", function (e) {
            paginationNums.forEach((item) =>
                item.classList.remove("pagination-num--active")
            );
            e.target.classList.add("pagination-num--active");
            currentPage = parseInt(e.target.textContent);
            handleRenderProductsBody(data);
            renderPagination(data);
            assignPaginationEvent(data);

            assignHeartEvent();
            assignCartEvent();
            assignDetails();
        });
    });
    const paginationNext = document.querySelector(".pagination-next");
    const paginationPre = document.querySelector(".pagination-pre");
    paginationNext?.addEventListener("click", function (e) {
        currentPage += 1;
        handleRenderProductsBody(data);
        renderPagination(data);
        assignPaginationEvent(data);

        assignHeartEvent();
        assignCartEvent();
        assignDetails();
    });
    paginationPre?.addEventListener("click", function (e) {
        currentPage -= 1;
        handleRenderProductsBody(data);
        renderPagination(data);
        assignPaginationEvent(data);

        assignHeartEvent();
        assignCartEvent();
        assignDetails();
    });
}

// Trong hàm renderPagination(), sau khi render pagination, gọi lại hàm gán sự kiện
renderPagination(dataProductAll);
assignPaginationEvent(dataProductAll);

handleRenderProductsBody(dataProductAll);

assignHeartEvent();
assignCartEvent();
assignDetails();
const viewList = document.querySelector(".view-list");
const viewTable = document.querySelector(".view-table");
viewList.addEventListener("click", function (e) {
    viewList.classList.add("view-selected");
    viewTable.classList.remove("view-selected");
    listProductsBody.classList.add("list-products__body-list");
    listProductsBody.classList.remove("list-products__body-table");

    handleRenderProductsBody(dataProductCurrent);

    assignHeartEvent();
    assignCartEvent();
    assignDetails();
});
viewTable.addEventListener("click", function (e) {
    viewTable.classList.add("view-selected");
    viewList.classList.remove("view-selected");
    listProductsBody.classList.remove("list-products__body-list");
    listProductsBody.classList.add("list-products__body-table");
    handleRenderProductsBody(dataProductCurrent);

    assignHeartEvent();
    assignCartEvent();
    assignDetails();
});
// sort
const optionsSort = document.querySelector(".options__select");
optionsSort.addEventListener("input", function (e) {
    if (e.target.value === "LTH") {
        dataProductCurrent.sort(function (a, b) {
            var priceA = (a.price * (100 - a.discount)) / 100;
            var priceB = (b.price * (100 - b.discount)) / 100;
            if (priceA < priceB) return -1;
            if (priceA > priceB) return 1;
            return 0;
        });
        handleRenderProductsBody(dataProductCurrent);

        assignHeartEvent();
        assignCartEvent();
        assignDetails();
    } else if (e.target.value === "HTL") {
        dataProductCurrent.sort(function (a, b) {
            var priceA = (a.price * (100 - a.discount)) / 100;
            var priceB = (b.price * (100 - b.discount)) / 100;
            if (priceA > priceB) return -1;
            if (priceA < priceB) return 1;
            return 0;
        });
        handleRenderProductsBody(dataProductCurrent);

        assignHeartEvent();
        assignCartEvent();
        assignDetails();
    } else {
        dataProductCurrent.sort(function (e) {
            return Math.random() - 0.5;
        });
        handleRenderProductsBody(dataProductCurrent);

        assignHeartEvent();
        assignCartEvent();
        assignDetails();
    }
});
// filter price

function assignFilterPrice() {
    const filterPrice = this.document.querySelector(".filter__btn");
    filterPrice.addEventListener("click", function (e) {
        const start = parseInt(priceStart.textContent.replace(/\./g, ""));
        const end = parseInt(priceEnd.textContent.replace(/\./g, ""));
        const dataFilterPrice = dataProductAll.filter(function (item) {
            return (
                (item.price * (100 - item.discount)) / 100 >= start &&
                (item.price * (100 - item.discount)) / 100 <= end
            );
        });
        dataProductCurrent = dataFilterPrice;

        renderPagination(dataProductCurrent);
        handleRenderProductsBody(dataProductCurrent);
        assignPaginationEvent(dataProductCurrent);

        assignHeartEvent();
        assignCartEvent();
        assignDetails();
    });
}
assignFilterPrice();
//wishlist
function assignHeartEventInWishList(wishList) {
    const hearts = document.querySelectorAll(".fa-heart");
    hearts.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.target.classList.toggle("heart-selected");
            const codeSP = e.target.getAttribute("data-codeProduct");
            if (e.target.classList.contains("heart-selected")) {
                storageFavoriteValue.push(codeSP);

                localStorage.setItem(
                    storageFavorite,
                    JSON.stringify(storageFavoriteValue)
                );
            } else {
                storageFavoriteValue.splice(
                    storageFavoriteValue.indexOf(codeSP),
                    1
                );

                localStorage.setItem(
                    storageFavorite,
                    JSON.stringify(storageFavoriteValue)
                );
            }
            listCodeFavorite = localStorage.getItem(storageFavorite);
            storageFavoriteValue = JSON.parse(listCodeFavorite) || [];
            if (wishList.classList.contains("wishlist--active")) {
                e.target.parentNode.parentNode.parentNode.parentNode.removeChild(
                    e.target.parentNode.parentNode.parentNode
                );
                if (storageFavoriteValue.length === 0) {
                    listProductsBody.innerHTML = `<div style="text-align:center;font-size: 20px;">No products found</div>`;
                }
            }
        });
    });
}

function renderWishList(wishList) {
    let dataWishlist = dataProductAll.filter(function (item) {
        return storageFavoriteValue.includes(item.code);
    });
    if (wishList.classList.contains("wishlist--active")) {
        dataProductCurrent = dataWishlist;
        renderPagination(dataWishlist);
        handleRenderProductsBody(dataWishlist);
        assignPaginationEvent(dataWishlist);

        assignHeartEventInWishList(wishList);
        assignCartEvent();
        assignDetails();
    } else {
        dataProductCurrent = dataProductAll;
        renderPagination(dataProductCurrent);
        handleRenderProductsBody(dataProductCurrent);
        assignPaginationEvent(dataProductCurrent);
        assignHeartEventInWishList(wishList);
        assignCartEvent();
        assignDetails();
    }
}

function assignWishList() {
    const wishlists = document.querySelectorAll(".wishlist");
    wishlists.forEach((item) =>
        item.addEventListener("click", function (e) {
            e.target.classList.toggle("wishlist--active");

            renderWishList(e.target);

            categoriesIconSelect.forEach((item) => {
                item.classList.remove("category__icon-selected");
            });
            categoriesValue.forEach((item) => {
                item.classList.remove("category-selected");
                item.previousElementSibling.innerHTML = ``;
            });
        })
    );
}
assignWishList();
const wishlists = document.querySelectorAll(".wishlist");
const filterTMBtn = document.querySelector(".filterTM__btn");
const filterTM = document.querySelector(".filter-on-table-mobile-sidebar");
filterTMBtn.addEventListener("click", function (e) {
    filterTM.classList.add("filter-on-table-mobile-sidebar--active");
});
const closeFilterTM = document.querySelector(
    ".close-filter-on-table-mobile-sidebar"
);
closeFilterTM.addEventListener("click", function (e) {
    filterTM.classList.remove("filter-on-table-mobile-sidebar--active");
});
// details

assignDetails();

$("#category__dropdown").click(function () {
    $("#category__dropdown__panel").slideToggle();
});

$("#category__dropdown-tm").click(function () {
    $("#category__dropdown__panel-tm").slideToggle();
});

// register successfully flash
const flashDict = JSON.parse(localStorage.getItem("flash"));
if (flashDict) {
    flash(flashDict.type, flashDict.message);
    setTimeout(() => {
        localStorage.removeItem("flash");
    }, 6);
}
