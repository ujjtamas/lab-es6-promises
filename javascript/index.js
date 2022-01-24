// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code
/*
// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks
// ...


getInstruction('mashedPotatoes',2, (step) => {
   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
  getInstruction('mashedPotatoes',0, (step) => {
     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    getInstruction('mashedPotatoes',1, (step) => {
       document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
      getInstruction('mashedPotatoes',3, (step) => {
         document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
        getInstruction('mashedPotatoes',4, (step) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));
// Iteration 2 - using promises
// ...  
obtainInstruction('steak', 0)
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 7);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })

// Iteration 3 using async/await
// ...
async function makeBroccoli(){
  // ... Your code here
await obtainInstruction('broccoli',0)
  .then( (step) => {
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
})
await obtainInstruction('broccoli',1)
  .then( (step) => {
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
})
await obtainInstruction('broccoli',2)
  .then( (step) => {
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
})
await obtainInstruction('broccoli',3)
  .then( (step) => {
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
})
await obtainInstruction('broccoli',4)
  .then( (step) => {
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
})
await obtainInstruction('broccoli',5)
  .then( (step) => {
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
})
await obtainInstruction('broccoli',6)
  .then( (step) => {
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
})
}

makeBroccoli()
  

// Bonus 2 - Promise all
// ...

const p0 = new Promise((resolve,reject) => {
  obtainInstruction('brusselsSprouts',0)
    .then((step) => {
      resolve(step);
    })
});

const p1 = new Promise((resolve,reject) => {
  obtainInstruction('brusselsSprouts',1)
    .then((step) => {resolve(step);
    })
});

const p2 = new Promise((resolve,reject) => {
  obtainInstruction('brusselsSprouts',2)
    .then((step) => {resolve(step);
    })
});
const p3 = new Promise((resolve,reject) => {
  obtainInstruction('brusselsSprouts',3)
    .then((step) => {resolve(step);
    })
});
const p4 = new Promise((resolve,reject) => {
  obtainInstruction('brusselsSprouts',4)
    .then((step) => {resolve(step);
    })
});
const p5 = new Promise((resolve,reject) => {
  obtainInstruction('brusselsSprouts',5)
    .then((step) => {resolve(step);
    })
});
const p6 = new Promise((resolve,reject) => {
  obtainInstruction('brusselsSprouts',6)
    .then((step) => {resolve(step);
    })
});
const p7 = new Promise((resolve,reject) => {
  obtainInstruction('brusselsSprouts',7)
    .then((step) => {resolve(step);
    })
});


Promise.all([p0,p1,p2,p3,p4,p5,p6,p7])
  .then((values) => {
    for(i in values){
      document.querySelector('#brusselsSprouts').innerHTML += `<li>${values[i]}</li>`;
    }
    document.querySelector('#brusselsSprouts').innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");

  });
