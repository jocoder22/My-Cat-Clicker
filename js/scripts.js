var catModel = [
  {
      clickCount : 0,
      name : "Poplinre",
      imgSrc : "https://placekitten.com/820/600"
  },
  {
      clickCount : 0,
      name : "Chewie",
      imgSrc : "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496"
  },
  {
      clickCount : 0,
      name : "Jetske",
      imgSrc : "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426"
  },
  {
      clickCount : 0,
      name : "Ran Kitten",
      imgSrc : "https://placekitten.com/800/560"
  },
  {
      clickCount : 0,
      name : "Green Eyes Kitten",
      imgSrc : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Green_eyes_kitten.jpg/680px-Green_eyes_kitten.jpg"
  },
  {
      clickCount : 0,
      name : "Cute Kitten",
      imgSrc : "https://placekitten.com/790/600"
  }
];




var myCat = function(data){
  var self = this;
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);

  this.title = ko.computed(function(){
    var title = '';
    var clicks = self.clickCount();
    if (clicks < 10){
      title = 'Newborn';
    }else if (clicks < 50) {
      title = 'Infant';
    }else if (clicks < 100) {
      title = 'Child';
    }else if (clicks < 200) {
      title = 'Teen';
    }else if (clicks < 500) {
      title = 'Adult';
    }else {
      title = 'Ninja'
    } return title;
  });
}






var ViewModel = function() {
  var self = this;
  this.catList = ko.observableArray([]);
  catModel.forEach(function(catItem){
    self.catList.push(new myCat(catItem));
  });

  this.currentCat = ko.observable(self.catList()[0]);
  this.counter = function(){
    /**this.clickCount(this.clickCount() + 1);**/
    var currentCount = self.currentCat().clickCount();
    self.currentCat().clickCount(currentCount + 1);

  };
  this.showname = function(clickedCat){
    self.currentCat(clickedCat);
  };

};

ko.applyBindings(new ViewModel());
