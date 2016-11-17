function cookieAPI()
{
    this.objself = {};

    this.initialize = function() {
        console.log("Initialize Start!");

        var documentcookie = document.cookie;
        var items = documentcookie.split(";");

        //change flag if the cookie has something assigned
        var flag_assignment = false;

        for (i = 0; i < items.length; i++) {

            var currentsplit = items[i].split("=");
            if (currentsplit[0] == "cookobj") {
                this.objself = JSON.parse(currentsplit[1]);
                flag_assignment = true;
            }

        }
        if (flag_assignment == false) {

            this.objself = {
                url_swap: null,
                url_assign: null,
                locale: null
            };

            console.log("Object Null Instantiated");
            this.save();
        }
        else {
            console.log("Object From DocCookie Instantiated");
        }
    };

    this.get = function(name){
        return this.objself[name];
    };

    this.set = function(name, val){
        this.objself[name] = val;
        this.save();
    };

    this.save = function(){
        document.cookie = "cookobj=" + JSON.stringify(this.objself) + ";path=/;";
    }

    this.initialize();
}

(function(){

    window.onload = function(){

          var api = new cookieAPI();
          //api.save();
          //api.get();
          //api.set("url_swap", "avalue")
          //api.get("url_swap");
	  };

})();
