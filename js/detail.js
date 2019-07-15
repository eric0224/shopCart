$(() => {
    let id = parseInt(location.search.substring(4));
    let obj = phoneData.find(e => {
        return e.pID == id;
    });
    $('.sku-name').text(obj.name);
    $('.preview-img img').attr('src', obj.imgSrc);
    $('.summary-price em').text(obj.price);


    // 点击加入购物车
    $('.addshopcar').on('click', function () {
        let number = parseInt($('.choose-amount .choose-number').val());
        let arr = loadData('shopCartData');
        let isExit = arr.find(e => {
            return e.pID === id;
        })
        if (isExit !== undefined) {
            isExit.number += number;
        } else {
            let good = {
                pID: obj.pID,
                name: obj.name,
                imgSrc: obj.imgSrc,
                price: obj.price,
                number: number
            }
            arr.push(good);
        }
        saveData('shopCartData', arr);
        location.href = "cart.html";
    })
})