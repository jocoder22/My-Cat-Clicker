var ViewModal = function (){
  var self = this;
  self.clickCount = ko.observable(0);
  self.name = ko.observable("Poplinre");
  self.imgSrc = ko.observable("https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454")
  self.counter = function (){
    self.clickCount(self.clickCount() + 1)
  };
}

ko.applyBindings(new ViewModal());
