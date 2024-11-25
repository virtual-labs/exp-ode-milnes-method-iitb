let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-22px fb-700">ODE: Milne's Method</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    a1_internal_calculations();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
      ${btn_text}
      <div class="collapse divide text-center fs-18px" id="act1-div">
         $$
            f(x,y) = \\frac{dy}{dx} = x + y
         $$
         <p class="fs-18px fb-500" style="text-align:left">
            Solution of the equation is as:
         </p>
         <br>
         <div id="act1-tb-box1"></div>
         <br>
         <p class="fs-18px fb-500" style="text-align: left">
            find y(0.4) using Milne's Predictor-Corrector method. <br>
            Enter the values upto 4 decimal places
         </p>
         <br>
         <div id='act1-verify-div'>
            <div class="row justify-content-center" style="align-items:center;">
               <div class="col-lg-7">
                  $$
                     y_4^p = y_0 + \\frac{4h}{3}[2f(x_1,y_1) - f(x_2,y_2) + 2f(x_3,y_3)] = 
                  $$
               </div>
               <div class="col-md-3">
                  <input type='number' id='act1-yp-inp' class='form-control fs-16px' />
               </div>
            </div>
            <div class="row justify-content-center" style="align-items:center;">
               <div class="col-lg-7">
                  $$
                     y_4^c = y_2 + \\frac{h}{3}[f(x_2,y_2) + 4f(x_3,y_3) + f(x_4,y_4^p)] = 
                  $$
               </div>
               <div class="col-md-3">
                  <input type='number' id='act1-yc-inp' class='form-control fs-16px' />
               </div>
            </div>
            <div class="row justify-content-center" style="align-items:center;">
               <div class="col-sm-3">
                  $$
                     y(0.4) = 
                  $$
               </div>
               <div class="col-sm-3">
                  <input type='number' id='act1-y04-inp' class='form-control fs-16px' />
               </div>
            </div>
            <br>
            <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='a1_verify_y_value();' id='act1-vf-btn1' >Verify</button>
            
         </div>
      </div>
   `;
    maindiv.innerHTML += text;
    let tb_box = (document.getElementById('act1-tb-box1'));
    let header = ['x', ...x_a1];
    let tb_data = [['y', ...y_a1]];
    let tb = new Display_Table(header, tb_data, tb_box);
    tb.load_table();
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
}
function a1_internal_calculations() {
    yp_a1 = 0;
    yc_a1 = 0;
    yp_a1 = get_yp(x_a1, y_a1, h_a1, f1);
    yc_a1 = get_yc(x_a1, y_a1, 0.4, h_a1, yp_a1, f1);
}
function a1_verify_y_value() {
    let yp_inp = (document.getElementById('act1-yp-inp'));
    let yc_inp = (document.getElementById('act1-yc-inp'));
    let y04_inp = (document.getElementById('act1-y04-inp'));
    console.log(yp_a1, yc_a1, yc_a1);
    if (!verify_values(parseFloat(yp_inp.value), parseFloat(yp_a1.toFixed(4)))) {
        yp_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        yp_inp.style.border = '1px solid #ced4da';
        yp_inp.disabled = true;
    }
    if (!verify_values(parseFloat(yc_inp.value), parseFloat(yc_a1.toFixed(4)))) {
        yc_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        yc_inp.style.border = '1px solid #ced4da';
        yc_inp.disabled = true;
    }
    if (!verify_values(parseFloat(y04_inp.value), parseFloat(yc_a1.toFixed(4)))) {
        y04_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        y04_inp.style.border = '1px solid #ced4da';
        y04_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-verify-div'));
    div.innerHTML = '';
    div.innerHTML = `
   $$
      y_4^p = y_0 + \\frac{4h}{3}[2f(x_1,y_1) - f(x_2,y_2) + 2f(x_3,y_3)] = ${parseFloat(yp_a1.toFixed(4))}
   $$
   $$
      y_4^c = y_2 + \\frac{h}{3}[f(x_2,y_2) + 4f(x_3,y_3) + f(x_4,y_4^p)] = ${parseFloat(yc_a1.toFixed(4))}
   $$
   $$ y(0.4) = ${parseFloat(yc_a1.toFixed(4))} $$
   <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='activity2();' id='act1-btn1' >Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
activity1();
//# sourceMappingURL=activity1.js.map