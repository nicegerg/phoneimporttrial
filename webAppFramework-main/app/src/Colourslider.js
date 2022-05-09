

    function Colourslider()
{
var gui;
var me = this;
var menu = [];
var menuNames = ["Slider1",  "Slider2", "Slider3", "Slider4", "Slider5"]; 
var x = 400;
var y = 400;
var offX = 0;
var offY = 0;

this.setup = function()
{
  gui = createGui();

  setupHeaderButtons();          

  var xoffset = 30;
  var yoffset = 100;
  var xwidth = width-60;
  var spacer = 70;

  for(var i = 0;i < menuNames.length;i++) {
      menu[i] = createSlider(menuNames[i],xoffset,i*spacer +yoffset+20);
      menu[i].index = i;
      menu[i].w = xwidth;
      menu[i].h = 50;    
      menu[i].y = menu[i].y + offsetY;    
  }         
    
  
}

this.enter = function()
{   
  gui.show();

}

this.exit = function()
{
  gui.hide();
}

this.draw = function()
{
  background(255);

  fill(0,0,255);
  rect(0,0,windowWidth,windowHeight/2);
  
  
  	offX = sin(50 + frameCount / 0.01) * 300;
    offY = cos(50 + frameCount / 0.01) * 300;
    fill(228,228,52);
    
  	ellipse(x + offX, y + offY, 7 + 50);
  
  fill(58,195,58);
  rect(0,windowHeight/2,windowWidth,windowHeight/2);
  
}


}
       