//Accordion
var acc = document.getElementsByClassName("accordion");
            var i;
            
            for (i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                  panel.style.display = "none";
                } else {
                  panel.style.display = "block";
                }
              });
            }
//Project: Black Luster
const downKeys = new Set();
        let x = 0;
        let y = 0;
        let a = 0;
        let b = 0;

        const p1 = document.getElementById('p1');  
        //Up
        document.getElementById("Up").addEventListener("click", motionBtnUp)
        function motionBtnUp(){
            const core = p1.style;
            var dir = 52;
             core.top  = (y -= dir) + 'px';
        }
        //Right
        document.getElementById("Right").addEventListener("click", motionBtnRight)
        function motionBtnRight(){
            const core = p1.style;
            var dir = 52;
            core.left = (x += dir) + 'px';
        }
        //Down
        document.getElementById("Down").addEventListener("click", motionBtnDown)
        function motionBtnDown(){
            const core = p1.style;
            var dir = 52;
            core.top  = (y += dir) + 'px';
        }
        //Left
        document.getElementById("Left").addEventListener("click", motionBtnLeft)
        function motionBtnLeft(){
            const core = p1.style;
            var dir = 52;
            core.left = (x -= dir) + 'px';
        }
        //Up-Right
        document.getElementById("UR").addEventListener("click", motionBtnUR)
        function motionBtnUR(){
            const core = p1.style;
            var dir = 52;
            core.top  = (y -= dir) + 'px';
            core.left = (x += dir) + 'px';
        }
        //Down-Right
        document.getElementById("DR").addEventListener("click", motionBtnDR)
        function motionBtnDR(){
            const core = p1.style;
            var dir = 52;
            core.left = (x += dir) + 'px';
            core.top  = (y += dir) + 'px';
        }
        //Down-Left
        document.getElementById("UL").addEventListener("click", motionBtnUL)
        function motionBtnDL(){
            const core = p1.style;
            var dir = 52;
            core.top  = (y += dir) + 'px';
            core.left = (x -= dir) + 'px';
        }
        //Up-Left
        document.getElementById("DL").addEventListener("click", motionBtnDL)
        function motionBtnUL(){
            const core = p1.style;
            var dir = 52;
            core.top  = (y -= dir) + 'px';
            core.left = (x -= dir) + 'px';
        }

        //Code that enable key commands

        const downKeysControl = document.getElementById('base');
        document.addEventListener('keydown', event => downKeys.add   (event.key));
        document.addEventListener('keyup',   event => downKeys.delete(event.key));
        
        function motion() {
            downKeysControl.textContent = downKeys;
            const core = p1.style;
            function isDown(key) {return downKeys.has(key);}
            const dir = isDown('Shift') ? 30 : 10;

            if (isDown('ArrowRight')) core.left = (x += dir) + 'px';
            if (isDown('ArrowDown' )) core.top  = (y += dir) + 'px';
            if (isDown('ArrowLeft' )) core.left = (x -= dir) + 'px';
            if (isDown('ArrowUp'   )) core.top  = (y -= dir) + 'px';
            if (isDown('d')) core.left = (x += dir) + 'px';
            if (isDown('s' )) core.top  = (y += dir) + 'px';
            if (isDown('a' )) core.left = (x -= dir) + 'px';
            if (isDown('w'   )) core.top  = (y -= dir) + 'px';
    
            window.requestAnimationFrame(motion);
        }
            motion();


//Checker Board
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
//Interactive Periodic Table

var c = document.getElementById("Textbox_Image");

      c.style.position= "absolute";
      c.style.left = 70.7 + '%';
c.style.top = 120 + 'px';
function element1(){
     document.getElementById("Name").innerHTML = "Hydrogen";
     document.getElementById("Description").innerHTML = "Hydrogen's Description";
      c.setAttribute("src", "PeriodicTableImages/Hydrogen.jpeg");
      
      
  }
  function element2(){
   document.getElementById("Name").innerHTML = "Helium";
   document.getElementById("Description").innerHTML = "Helium's Description";
   c.setAttribute("src", "http://i.bnet.com/blogs/heliumatompssscdsbonca.jpg");
      
}
  function element3(){
   document.getElementById("Name").innerHTML = "Lithium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "https://www.featurepics.com/StockImage/20100422/model-lithium-atom-stock-illustration-1515994.jpg");
      
}
  function element4(){
   document.getElementById("Name").innerHTML = "Beryllium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element5(){
   document.getElementById("Name").innerHTML = "Boron";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element6(){
   document.getElementById("Name").innerHTML = "Carbon";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element7(){
   document.getElementById("Name").innerHTML = "Nitrogen";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element8(){
   document.getElementById("Name").innerHTML = "Oxygen";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element9(){
   document.getElementById("Name").innerHTML = "Fluorine";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element10(){
   document.getElementById("Name").innerHTML = "Neon";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element11(){
   document.getElementById("Name").innerHTML = "Sodium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element12(){
   document.getElementById("Name").innerHTML = "Magnesium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element13(){
   document.getElementById("Name").innerHTML = "Aluminium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element14(){
   document.getElementById("Name").innerHTML = "Silicon";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element15(){
   document.getElementById("Name").innerHTML = "Phosphorus";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element16(){
   document.getElementById("Name").innerHTML = "Sulfur";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element17(){
   document.getElementById("Name").innerHTML = "Chlorine";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element18(){
   document.getElementById("Name").innerHTML = "Argon";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element19(){
   document.getElementById("Name").innerHTML = "Potassium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element20(){
   document.getElementById("Name").innerHTML = "Calcium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element21(){
   document.getElementById("Name").innerHTML = "Scandium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element22(){
   document.getElementById("Name").innerHTML = "Titanium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element23(){
   document.getElementById("Name").innerHTML = "Vandium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element24(){
   document.getElementById("Name").innerHTML = "Chromium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element25(){
   document.getElementById("Name").innerHTML = "Manganese";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element26(){
   document.getElementById("Name").innerHTML = "Iron";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element27(){
   document.getElementById("Name").innerHTML = "Cobalt";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element28(){
   document.getElementById("Name").innerHTML = "Nickle";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element29(){
   document.getElementById("Name").innerHTML = "Copper";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element30(){
   document.getElementById("Name").innerHTML = "Zinc";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element31(){
   document.getElementById("Name").innerHTML = "Gallium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element32(){
   document.getElementById("Name").innerHTML = "Germanium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element33(){
   document.getElementById("Name").innerHTML = "Arsenic";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element34(){
   document.getElementById("Name").innerHTML = "Selenium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element35(){
   document.getElementById("Name").innerHTML = "Bromine";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element36(){
   document.getElementById("Name").innerHTML = "Krypton";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element37(){
   document.getElementById("Name").innerHTML = "Rubidium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element38(){
   document.getElementById("Name").innerHTML = "Strontium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element39(){
   document.getElementById("Name").innerHTML = "Yttrium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element40(){
   document.getElementById("Name").innerHTML = "Zirconium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element41(){
   document.getElementById("Name").innerHTML = "Niobium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element42(){
   document.getElementById("Name").innerHTML = "Molybdenum";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element43(){
   document.getElementById("Name").innerHTML = "Technetium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element44(){
   document.getElementById("Name").innerHTML = "Ruthenium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element45(){
   document.getElementById("Name").innerHTML = "Rhodium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element46(){
   document.getElementById("Name").innerHTML = "Palladium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element47(){
   document.getElementById("Name").innerHTML = "Silver";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element48(){
   document.getElementById("Name").innerHTML = "Cadmium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element49(){
   document.getElementById("Name").innerHTML = "Indium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element50(){
   document.getElementById("Name").innerHTML = "Tin";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element51(){
   document.getElementById("Name").innerHTML = "Antimony";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element52(){
   document.getElementById("Name").innerHTML = "Tellurium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element53(){
   document.getElementById("Name").innerHTML = "Iodine";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element54(){
   document.getElementById("Name").innerHTML = "Xenon";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element55(){
   document.getElementById("Name").innerHTML = "Caesium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element56(){
   document.getElementById("Name").innerHTML = "Barium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element57(){
   document.getElementById("Name").innerHTML = "Lanthanum";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element58(){
   document.getElementById("Name").innerHTML = "Cerium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element59(){
   document.getElementById("Name").innerHTML = "Praseodymium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element60(){
   document.getElementById("Name").innerHTML = "Neodymium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element61(){
   document.getElementById("Name").innerHTML = "Promethium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element62(){
   document.getElementById("Name").innerHTML = "Samarium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element63(){
   document.getElementById("Name").innerHTML = "Europium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element64(){
   document.getElementById("Name").innerHTML = "Gadolinium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element65(){
   document.getElementById("Name").innerHTML = "Terbium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element66(){
   document.getElementById("Name").innerHTML = "Dysprosium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element67(){
   document.getElementById("Name").innerHTML = "Holmium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element68(){
   document.getElementById("Name").innerHTML = "Erbium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element69(){
   document.getElementById("Name").innerHTML = "Thulium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element70(){
   document.getElementById("Name").innerHTML = "Ytterbium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element71(){
   document.getElementById("Name").innerHTML = "Lutetium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element72(){
   document.getElementById("Name").innerHTML = "Hafnium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element73(){
   document.getElementById("Name").innerHTML = "Tantalum";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element74(){
   document.getElementById("Name").innerHTML = "Tungsten";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element75(){
   document.getElementById("Name").innerHTML = "Rhenium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element76(){
   document.getElementById("Name").innerHTML = "Osmium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element77(){
   document.getElementById("Name").innerHTML = "Iridium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element78(){
   document.getElementById("Name").innerHTML = "Platinum";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element79(){
   document.getElementById("Name").innerHTML = "Gold";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element80(){
   document.getElementById("Name").innerHTML = "Mercury";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element81(){
   document.getElementById("Name").innerHTML = "Thallium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element82(){
   document.getElementById("Name").innerHTML = "Lead";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element83(){
   document.getElementById("Name").innerHTML = "Bismuth";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element84(){
   document.getElementById("Name").innerHTML = "Polonium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element85(){
   document.getElementById("Name").innerHTML = "Astatine";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element86(){
   document.getElementById("Name").innerHTML = "Radon";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element87(){
   document.getElementById("Name").innerHTML = "Francium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element88(){
   document.getElementById("Name").innerHTML = "Radium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element89(){
   document.getElementById("Name").innerHTML = "Actinium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element90(){
   document.getElementById("Name").innerHTML = "Thorium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element91(){
   document.getElementById("Name").innerHTML = "Protactinium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element92(){
   document.getElementById("Name").innerHTML = "Uranium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element93(){
   document.getElementById("Name").innerHTML = "Neptunium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element94(){
   document.getElementById("Name").innerHTML = "Plutonium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element95(){
   document.getElementById("Name").innerHTML = "Americium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element96(){
   document.getElementById("Name").innerHTML = "Curium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element97(){
   document.getElementById("Name").innerHTML = "Berkelium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element98(){
   document.getElementById("Name").innerHTML = "Californium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element99(){
   document.getElementById("Name").innerHTML = "Einstienium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element100(){
   document.getElementById("Name").innerHTML = "Fermium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element101(){
   document.getElementById("Name").innerHTML = "Mendelevium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element102(){
   document.getElementById("Name").innerHTML = "Nobelium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element103(){
   document.getElementById("Name").innerHTML = "Lawrencium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element104(){
   document.getElementById("Name").innerHTML = "Rutherfordium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element105(){
   document.getElementById("Name").innerHTML = "Dubnium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element106(){
   document.getElementById("Name").innerHTML = "Seaborgium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element107(){
   document.getElementById("Name").innerHTML = "Bohrium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element108(){
   document.getElementById("Name").innerHTML = "Hassium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element109(){
   document.getElementById("Name").innerHTML = "Meitnerium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element110(){
   document.getElementById("Name").innerHTML = "Darmstadtium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element111(){
   document.getElementById("Name").innerHTML = "Roentgenium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element112(){
   document.getElementById("Name").innerHTML = "Copernicium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element113(){
   document.getElementById("Name").innerHTML = "Nihonium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element114(){
   document.getElementById("Name").innerHTML = "Flerovium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element115(){
   document.getElementById("Name").innerHTML = "Moscovium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element116(){
   document.getElementById("Name").innerHTML = "Livermorium";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element117(){
   document.getElementById("Name").innerHTML = "Tennessine";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
  function element118(){
   document.getElementById("Name").innerHTML = "Oganesson";
   document.getElementById("Description").innerHTML = "";
   c.setAttribute("src", "");
      
}
