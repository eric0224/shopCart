$(() => {
    // 将本地数据读取到购物车页面
    let arr = loadData('shopCartData');
    let html = '';
    arr.forEach(e => {
        html += `<div class="item" data-id="${e.pID}">
        <div class="row">
          <div class="cell col-1 row">
            <div class="cell col-1">
              <input type="checkbox" class="item-ck" checked="">
            </div>
            <div class="cell col-4">
              <img src="${e.imgSrc}" alt="">
            </div>
          </div>
          <div class="cell col-4 row">
            <div class="item-name">${e.name}</div>
          </div>
          <div class="cell col-1 tc lh70">
            <span>￥</span>
            <em class="price">${e.price}</em>
          </div>
          <div class="cell col-1 tc lh70">
            <div class="item-count">
              <a href="javascript:void(0);" class="reduce fl">-</a>
              <input autocomplete="off" type="text" class="number fl" value="${e.number}">
              <a href="javascript:void(0);" class="add fl">+</a>
            </div>
          </div>
          <div class="cell col-1 tc lh70">
            <span>￥</span>
            <em class="computed">${e.price * e.number}</em>
          </div>
          <div class="cell col-1">
            <a href="javascript:void(0);" class="item-del">从购物车中移除</a>
          </div>
        </div>
      </div>`;
    });
    $('.item-list').html(html);
    $('.empty-tip').hide();
    $('.cart-header').removeClass('hidden');
    $('.total-of').removeClass('hidden');


    // 全选与不全选
    $('.pick-all').on('change', function () {
        $('.item-ck ,.pick-all').prop('checked', $(this).prop('checked'));
        getSum();
    })
    $('.item-ck').on('change', function () {
        let status = $('.item-ck:checked').length === $('.item-ck').length;
        $('.pick-all').prop('checked', status);
        getSum();
    })
    


    // 计算总数量和总金额
    function getSum(){
        let count=0;
        let money=0;
        $('.item-list input[type="checkbox"]:checked').each((i,e)=>{
            let id=parseInt($(e).parents('.item').attr('data-id'));
            console.log(id);
            arr.forEach(e => {
                if(e.pID==id){
                    count+=e.number;
                    money+=e.price*e.number;
                }
            });
        })
        $('.selected').text(count);
        $('.total-money').text(money);
    }
    getSum();

    

})