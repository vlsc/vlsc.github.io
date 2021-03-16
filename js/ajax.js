(function(window){

    let ajax = {};

    function getRequestObject(){
        if(XMLHttpRequest){
            return (new XMLHttpRequest());
        }
        else {
            window.alert("Ajax is not suported");
            return(null);
        }
    }

    ajax.makeRequest = function(url,func,isJson){
        let request = getRequestObject();
        request.onreadystatechange = function(){
            if (request.readyState ==4 && request.status == 200){
                if(isJson == undefined){
                    isJson = true;
                }
                
                if(isJson){
                    func(JSON.parse(request.responseText));
                }
                else {
                    func(request.responseText);
                }
            } 
        };
        request.open('GET', url, true);
        request.send(null);
    }



    window.$ajax = ajax;
})(window);