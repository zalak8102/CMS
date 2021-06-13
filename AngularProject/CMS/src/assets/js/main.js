$(document).ready(function () {
    $nav1=$('.nav1');
    $toggleCollapse=$('.toggle-collapse');
    $toggleCollapse.click(function () {
        $nav1.toggleClass('collapse');
    })

    $('#next').on('click',function () {
        var cimg=$('.active');
        var nimg = cimg.next();
        if(nimg.length){
            cimg.removeClass('active').css('z-index',-10);
            nimg.addClass('active').css('z-index',10);
        }
    });

    $('#prev').on('click',function () {
        var cimg=$('.active');
        var pimg = cimg.prev();
        if(pimg.length){
            cimg.removeClass('active').css('z-index',-10);
            pimg.addClass('active').css('z-index',10);
        }
    });

    $("#bill").on('click',function(){
        $.getJSON("bill.json", function(result){
            $.each(result, function(i, field){
                $("#billarea").append(i + ": "+field);
                $("#billarea").append('<br>');
            });
        });
    });
});

function topFunction() {

    document.documentElement.scrollTop = 0;
}

const searchFun = () => {
    let filter = document.getElementById("gsearch").value.toUpperCase();
    let myTable= document.getElementById("myTable");
    let tr = myTable.getElementsByTagName("tr");
    for(var i=0; i<tr.length; i++)
    {
        let td=tr[i].getElementsByTagName('td')[0];
        if(td){
            let textval = td.textContent || td.innerHTML;
            if(textval.toUpperCase().indexOf(filter) > -1)
            {
                tr[i].style.display="";
            }
            else
            {
                tr[i].style.display="none";
            }
        }
    }

}

const searchFun2 = () => {
    let filter = document.getElementById("gsearch").value.toUpperCase();
    let myTable1= document.getElementById("myTable1");
    let myTable2= document.getElementById("myTable2");
    let tr1 = myTable1.getElementsByTagName("tr");
    let tr2 = myTable2.getElementsByTagName("tr");

    for(var i=0; i<tr1.length; i++)
    {
        let td=tr1[i].getElementsByTagName('td')[0];
        if(td){
            let textval = td.textContent || td.innerHTML;
            if(textval.toUpperCase().indexOf(filter) > -1)
            {
                tr1[i].style.display="";
            }
            else
            {
                tr1[i].style.display="none";
            }
        }
    }
    for(var i=0; i<tr2.length; i++)
    {
        let td=tr2[i].getElementsByTagName('td')[0];
        if(td){
            let textval = td.textContent || td.innerHTML;
            if(textval.toUpperCase().indexOf(filter) > -1)
            {
                tr2[i].style.display="";
            }
            else
            {
                tr2[i].style.display="none";
            }
        }
    }

}


AOS.init({
    duration:1200,
})