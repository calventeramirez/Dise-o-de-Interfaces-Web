$(document).ready(function(){
    let caja1 = $('#demoAnimation');
    let caja2 = $('#demoAnimation2');

    caja1.click(function(){
        caja1.animate({
            marginLeft: '150px',
        }, "slow")
        caja1.animate({
            marginTop: '150px',
        }, "slow")
    });

    caja2.click(function(){
        caja2.animate({
            marginLeft: '50px',
            marginTop: "100px",
            width: "200px",
            height: "200px"
        }, "slow")
        caja2.animate({
            marginLeft: '150px',
            marginTop: "150px",
            width: "250px",
            height: "250px"
        }, "slow")
    });
});