$(function () {
    let input=$(".search input");

    let kuai=$(".kuai");
    let fail=$(".fail");
    kuai.click(function () {
        let content=input.val();
        if(content==""){
          fail.css("display","block");
      }else if(content=="水管"){
        location.href="zcy-sousuo.html";
      }
    })
})