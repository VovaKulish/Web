(function(){
 'use strict';

 function Slider(cls){
  this.slider = cls;
  this.buttons = this.slider.find('.slider.buttons');
  this.sliderWindow = this.slider.find('.slider.window ul');
  this.init();
  this.tmr = setInterval($.proxy(this.nextImg,this),1000);
  $(this.slider).addClass('active');
 }

 Slider.prototype.interval = function() {
  clearInterval(this.tmr);
  $(this.slider).removeClass('active');
 }

 Slider.prototype.intervalOn = function() {
  if(!$(this.slider).hasClass('active')) {
   this.tmr = setInterval($.proxy(this.nextImg,this),3000);
   $(this.slider).addClass('active');
  }
 }
 Slider.prototype.setImg = function() {
  var target = $(event.target || event.srcElement);
  clearInterval(this.tmr);
  if (target.hasClass('first')) {
   this.sliderWindow.animate({
    'margin-left':'-0px'
   });
  } else if (target.hasClass('second')) {
   this.sliderWindow.animate({
    'margin-left':'-910px'
   });
  } else if (target.hasClass('third')) {
   this.sliderWindow.animate({
    'margin-left':'-1820px'
   });
  } else if (target.hasClass('fourth')) {
   this.sliderWindow.animate({
    'margin-left':'-2730px'
   });
  }
 }

 Slider.prototype.nextImg = function() {
  var indent = parseInt(this.sliderWindow.css('margin-left'));

  if(indent < -1820) {
   this.sliderWindow.animate({
    'margin-left':'-0px'
   });
  } else {
   this.sliderWindow.animate({
    'margin-left': (indent - 910 + 'px')
   });
  }
 }

 Slider.prototype.init = function () {
  var btns = $(this.buttons);
  btns.on( 'mouseout', $('.slider.window'), $.proxy(this.intervalOn, this));
  btns.on( 'click', 'li', $.proxy(this.setImg, this));
  btns.on( 'click', $('.slider.window'), $.proxy(this.interval, this));
 }

 window.Slider = Slider;
}());

new Slider($('.slider.main'));