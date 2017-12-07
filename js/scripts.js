var cat1Url ="https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454";
    var cat2Url = "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496";
    var cat3Url = "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426";
    var cat4Url = "https://placekitten.com/800/560";
    var cat5Url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Green_eyes_kitten.jpg/680px-Green_eyes_kitten.jpg";
    var cat6Url = "https://placekitten.com/1160/600";

    var counter1 = 0;
    var catNames = ['Poplinre', 'Chewie', 'Jetske', "Ran Kitten","Green Eyes Kitten", "Cute Kitten"];
    var pictures = [cat1Url, cat2Url, cat3Url, cat4Url, cat5Url, cat6Url];

    function myfunction(mm){
      for (var i = 0; i < catNames.length; i++){
        var name = catNames[i];
        if (name == mm.innerHTML){
          var pic = pictures[i];
          counter1 = 0;
          document.getElementById("cat-number").innerHTML = counter1;
          document.getElementById("newName").innerHTML = name;
          document.getElementById("catlog").src = pic;
        }
      }

    }


    $("#catlog").click(function(e){
        counter1++;
        document.getElementById("cat-number").innerHTML = counter1;
      });
