

// 

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do {
      //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
  
    var targetY = 0;
    do {
      //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
    } while ((target = target.offsetParent));
  
    scroll = function(c, a, b, i) {
      i++;
      if (i > 30) return;
      c.scrollTop = a + ((b - a) / 30) * i;
      setTimeout(function() {
        scroll(c, a, b, i);
      }, 20);
    };
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
  };
// Side-Panel
const model = document.querySelector(".model-section");
const panel = document.getElementById("sidepanel");

function openNav() {
  model.style.display = "block";
  panel.style.width = "200px";
}

function closeNav() {
  
  panel.style.width = "0";
  model.style.display = "none";
}

model.addEventListener("click", function(e) {
  let className = e.target.getAttribute("class");
  if (className === "model-section") {
    model.style.display = "none";
    panel.style.width = "0";
  }
});

//==================================pop Up Windows============================================

function new_Window() {
//   if (this.innerHTML === "Model") {
//     window.open("http://127.0.0.1:5500/PROJECT3/Model.html");
//   }
  if (this.innerHTML === "Launch Terminal →") {
    window.open(
      "https://lightsail.aws.amazon.com/ls/remote/ap-south-1/instances/Harry_Amazon_Linux-1/terminal?protocol=ssh",
      "_blank",
      "height=800,width=1000,top=30,left=30"
    );
  }
//   if (this.innerHTML === "Calculator") {
//     window.open(
//       "http://127.0.0.1:5500/PROJECT1/Calculator.html",
//       "_blank",
//       "height=400,width=600,top=72,left=100"
//     );
//   }
//   if (this.innerHTML === "Pop-up Window") {
//     var New_Window = window.open(
//       "",
//       "_blank",
//       "height=400, width=600, top=72, left=100"
//     );
//     New_Window.document.write("Welcome to new Window !!");
//     // New_Window.document.close();
//     // New_Window.close();
//   }
}
