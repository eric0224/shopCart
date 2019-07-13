$(() => {
    let id = parseInt(location.search.substring(4));
    let obj = phoneData.find(e => {
        return e.pID == id;
    });
    $('.sku-name').text(obj.name);
    $('.preview-img img').attr('src', obj.imgSrc);
    $('.summary-price em').text(obj.price);
})