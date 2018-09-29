$(function () {
    let input=$(".search input");

    let kuai=$(".kuai");
    let fail=$(".fail");
    console.log(kuai);
    kuai.click(function () {
        let content=input.val();
        if(content==""){
        console.log(content);
          fail.css("display","block");
      }
    })
})