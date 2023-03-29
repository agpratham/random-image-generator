var i=1;
            function changeImg() {
                if (i==10) {
                    i=1;
                }
                else {
                    i+=1;
                }
                var file_name = "./img_"+i.toString()+".jpg";
                document.getElementById("display").setAttribute("src",file_name);
            }