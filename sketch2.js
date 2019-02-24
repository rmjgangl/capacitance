Q = 0; //initial value
I = 0; //initial value

Vcap = 0;
C = 0.375;

Vbatt = 10; // Volts

R1 = 5; // Ohms
R2 = 3;

dt = 0.1;

battery_is_connected = false;

function preload() {
  imgDisconnected = loadImage("RCdisconnected_v2.png");
  imgConnected = loadImage("RCconnected_v2.png");
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
    I = Vbatt-Vcap/R2; // current in R2, determined by Vcap, Vbatt and R2
    Q += I*dt; // charging up
    Vcap = Q/C;
  } else {  // battery is not connected
    I = Vcap/R1; // current in R1
    Q += -I*dt; // discharging
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
