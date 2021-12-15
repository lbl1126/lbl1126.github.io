var search = function(){
    require(['/js/search.js'], function(){
    var inputArea = document.querySelector("#st-search-input");
    var $HideWhenSearch = $("#toc, #tocButton, .post-list, #post-nav-button a:nth-child(2)");
    var $resultArea = $("#local-search-result");
    
    var getSearchFile = function(){
    var search_path = "/search.xml";
    var path = search_path;
    searchFunc(path, 'st-search-input', 'local-search-result');
    }
    
    var getFileOnload = inputArea.getAttribute('searchonload');
    if (getFileOnload === "true") {
    getSearchFile();
    } else {
    inputArea.onfocus = function(){ getSearchFile() }
    }
    
    var HideTocArea = function(){
    $HideWhenSearch.css("visibility","hidden");
    }
    inputArea.oninput = function(){ HideTocArea() }
    inputArea.onkeydown = function(){ if(event.keyCode==13) return false}
    
    $resultArea.bind("DOMNodeRemoved DOMNodeInserted", function(e) {
    if (!$(e.target).text()) {
    $(".no-result").show(200);
    } else {
    $(".no-result").hide();
    }
    })
    })
    }();
    