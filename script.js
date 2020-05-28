
    $(function(){
      $("#header").load("header.html"); 
      $("#footer").load("footer.html"); 
    });
    function details(main,name1,name2,name3,name4,price,source){
        var v1a=name1;
        localStorage.setItem("first1",v1a);
        var v2a=name2;
        localStorage.setItem("first2",v2a);
        var v3a=name3;
        localStorage.setItem("first3",v3a);
        var v4a=name4;
        localStorage.setItem("first4",v4a);
        var v5a=price;
        localStorage.setItem("first5",v5a);
        var v6a=main;
        localStorage.setItem("main1",v6a);
        var v7a=source;
        localStorage.setItem("srce",v7a);
      
        return false;

    }
    function pass(name){
        var v1=name;
        localStorage.setItem("first",v1);
        return false;

    }
    function solution(na)
    {
    if (na==1){
        a=document.getElementById("h1i").textContent;
        pass(a);
    }
    else if (na==2){
        a=document.getElementById("h2i").textContent;
        pass(a);
    }
    else if (na==3){
        a=document.getElementById("h3i").textContent;
        pass(a);
    }
    else if (na==4){
        a=document.getElementById("h4i").textContent;
        pass(a);
    }
    else if (na==5){
        a=document.getElementById("h5i").textContent;
        pass(a);
    }
    else if (na==6){
        a=document.getElementById("h6i").textContent;
        pass(a);
    }
    }
            
            $(document).ready(function () {
                $("#light").click(function () {
                    $("#im1").attr('src', "images/l1.jpg");
                    $("#im2").attr('src', "images/l2.jpeg");
                    $("#im3").attr('src', "images/l3.jpg");
                    $("#im4").attr('src', "images/l7.jpg");
                    $("#im5").attr('src', "images/l5.png");
                    $("#im6").attr('src', "images/l6.jpg");
                    $('#h1i').html('<h3>Candle light ($22 only*)</h3>')
                    $('#h2i').html('<h3>Golden light ($20 only*)</h3>')
                    $('#h3i').html('<h3>Stand light ($22 only*)</h3>')
                    $('#h4i').html('<h3>Little lamp light ($19 only*)</h3>')
                    $('#h5i').html('<h3>Yellowish light ($15 only*)</h3>')
                    $('#h6i').html('<h3>Study light ($23 only*)</h3>')
    
                });
                $("#table").click(function () {
                    $("#im1").attr('src', "https://cdn.homedit.com/wp-content/uploads/2016/09/Marble-top-coffee-table-with-gold-base-legs.jpg");
    
                    $("#im2").attr('src', "https://cdn.home-designing.com/wp-content/uploads/2019/06/Square-Black-Wood-Accent-Coffee-Table-With-Wooden-Wide-Planked-Top-Modern-600x600.jpg");
    
                    $("#im3").attr('src', "https://i.pinimg.com/originals/86/d4/66/86d4667c5fbb06652ee735fce86924a7.jpg");
                    $("#im4").attr('src', "https://i.pinimg.com/originals/4a/8d/ca/4a8dca95ae909765440220419fb96976.jpg");
                    $("#im5").attr('src', "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwkEh7oJYGCupsL-rVKNxCtp3IUzUIwQzk4DZoYkQOaM011plD&usqp=CAU");
                    $("#im6").attr('src', "https://www.orientcement.com/wp-content/uploads/2016/04/home-buld.jpg");
                    $('#h1i').html('<h3>GLamorous Side ($50 only*)</h3>')
                    $('#h2i').html('<h3>Coffe Table ($54 only*)</h3>')
                    $('#h3i').html('<h3>Centre Table ($55 only*)</h3>')
                    $('#h4i').html('<h3>light Square table ($59 only*)</h3>')
                    $('#h5i').html('<h3>Luxuary Table ($53 only*)</h3>')
                    $('#h6i').html('<h3>Woody table ($48 only*)</h3>')
    
                });
                $("#office").click(function () {
                    $("#im1").attr('src', "https://i.pinimg.com/originals/24/c4/c1/24c4c196a98e0cd0e900a38beaa4c5f7.jpg");
                    $("#im2").attr('src', "https://i.pinimg.com/280x280_RS/3e/c6/97/3ec6976a544bfe466cd1071600f24bc2.jpg");
    
                    $("#im3").attr('src', "https://cdn.home-designing.com/wp-content/uploads/2014/05/2-Contemporary-office-desks.jpeg");
                    $("#im4").attr('src', "https://www.business-opportunities.biz/wp-content/uploads/2020/01/beautiful-new-office-furniture-2a.jpg");
                    $("#im5").attr('src', "https://cdn.home-designing.com/wp-content/uploads/2014/05/6-Dual-user-desk.jpeg");
                    $("#im6").attr('src', "https://i.pinimg.com/originals/d5/00/20/d50020c7a3a0b468ec831b40aa17a157.jpg");
                    $('#h1i').html('<h3>Large Table ($63 only*)</h3>')
                    $('#h2i').html('<h3>Glass Table ($64 only*)</h3>')
                    $('#h3i').html('<h3>White Table set ($75 only*)</h3>')
                    $('#h4i').html('<h3>Single Table ($56 only*)</h3>')
                    $('#h5i').html('<h3>Meeting Table ($55 only*)</h3>')
                    $('#h6i').html('<h3>File Cabinet ($51 only*)</h3>')
    
    
                });
                $("#seating").click(function () {
                    $("#im1").attr('src', "https://lh3.googleusercontent.com/proxy/jbth-pJw1pNMVRzMPqomqNs5452hgz4gOHSm-anDzMfuvF49ZHrf2y1jLAy1Cc9De1FD0CGArMs9CwC0Q8tBCele4QqFCUZ2UV2CQoWmPdQICVAAqFeUS3uR_5ieEfgoxuJRqw");
                    $("#im2").attr('src', "https://www.dhoumm.co/cdn-k1/li/beautiful-livingroom-chairs-ideas-and-living-room-chair_room-interior-and-decoration.jpg");
    
                    $("#im3").attr('src', "https://mudahome.com/wp-content/uploads/2019/02/40-Beautiful-Sofa-Set-Designs-Ideas-For-Small-Living-Room-01.jpg");
                    $("#im4").attr('src', "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cozy-couches-chairs-1536789888.jpeg?crop=1.00xw:0.337xh;0,0.464xh&resize=480:*");
                    $("#im5").attr('src', "https://lynwang.me/i/2019/04/designs-room-living-set-target-good-furniture-images-looking-catalogue-diy-sets-seats-arm-chair-pictures-latest-sitting-jiji-chairs-covers-accent-photos.jpg");
                    $("#im6").attr('src', "https://i.ebayimg.com/images/g/ipUAAOSwDJNbxIeZ/s-l1600.jpg");
                    $('#h1i').html('<h3>Floor Seating ($73 only*)</h3>')
                    $('#h2i').html('<h3>Living room chair ($58 only*)</h3>')
                    $('#h3i').html('<h3>Drawing Room Sofa ($69 only*)</h3>')
                    $('#h4i').html('<h3>Comfy Couches ($56 only*)</h3>')
                    $('#h5i').html('<h3>Cusion Diy Sofa Set ($75 only*)</h3>')
                    $('#h6i').html('<h3>2 seater White sofa ($56 only*)</h3>')
    
    
                });
    
    
            });
    