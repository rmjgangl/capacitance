Q = 0; //initial value
I = 0; //initial value

Vcap = 0;
C = 0.375;

Vbatt = 10; // Volts

R1 = 5; // Ohms
R2 = 0;

dt = 0.1;

battery_is_connected = false;

function preload() {
  imgDisconnected = loadImage("RCdisconnected.png");
  imgConnected = loadImage("RCconnected.png");
}

// For people with C and C++ experience, draw() is
// very similar to main(), except that draw() 
// is run over and over again 
function draw() {
  
  if (keyIsPressed) {
   if (key == 'c') battery_is_connected = true;
   if (key == 'd') battery_is_connected = false;
  }
    
  if ( battery_is_connected == true) {
    I = 0;
    Vcap = Vbatt;
    Q = C*Vcap;    
  } else { // battery is not connected
    I = Vcap/R1;
    Q += -I*dt;
    Vcap = Q/C;
  }
  
  // This will clear the screen and re-draw it
  display();

  graph1.addPoint(Q);
  graph1.display();
  print("Q = ",Q); // Uncomment if curious about precise value of Q
  
  graph2.addPoint(I);
  graph2.display();
  print("I = ",I); // Uncomment if curious about precise value of I

} // end draw()
