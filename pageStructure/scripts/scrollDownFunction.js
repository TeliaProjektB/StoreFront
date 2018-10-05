
/* scroll if click on category */

function scrollDownTo(nameOfTag){

    var pathname = window.location.href;
    if (pathname == "http://localhost/StoreFront/home/") { /* change with window href*/
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + nameOfTag).offset().top
        }, 1000);
    }
    else {
        window.open('/StoreFront/search','_self'); /*change depending on the category */
    }
    
   
}

/* scroll if search category on the search bar */

function searchCategory(){
    
    var searchInput = $('#searchInput').val();
    var searchCat = document.getElementsByName(searchInput);
    var id = searchCat[0].getAttribute('id');
    
    var pathname = window.location.href;
    if (pathname == "http://localhost/StoreFront/home/") { /* change with window href*/
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + id).offset().top
        }, 1000);
    }
    else {
        window.open('/StoreFront/search','_self'); /*change depending on the category */
    }
    
   
}


/* dropdown button other scroll*/

function openCloseDropdown(){
  $(".dropdown-content").animate({height: 'toggle'});  
}

