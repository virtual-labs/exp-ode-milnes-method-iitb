function activity2() {
    let temp_btn = (document.getElementById('act1-btn1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    a2_internal_calculations();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
      ${btn_text}
      <div class="collapse divide text-center" id="act2-div">
         $$
            f(x,y) = \\frac{dy}{dx} = -0.2(y-20)
         $$
         <p class="fs-18px fb-500" style="text-align:left">
            Solution of the equation is as:
         </p>
         <br>
         <div id="act2-tb-box1"></div>
         <br>
         <p class="fs-18px fb-500" style="text-align: left">
            find y(4) using Milne's Predictor-Corrector method.<br>
            Enter the values upto 4 decimal places
         </p>
         <br>
         <div id='act2-verify-div'>
            <div class="row justify-content-center" style="align-items:center;">
               <div class="col-lg-7">
                  $$
                     y_4^p = y_0 + \\frac{4h}{3}[2f(x_1,y_1) - f(x_2,y_2) + 2f(x_3,y_3)] = 
                  $$
               </div>
               <div class="col-md-3">
                  <input type='number' id='act2-yp-inp' class='form-control fs-16px' />
               </div>
            </div>
            <div class="row justify-content-center" style="align-items:center;">
               <div class="col-lg-7">
                  $$
                     y_4^c = y_2 + \\frac{h}{3}[f(x_2,y_2) + 4f(x_3,y_3) + f(x_4,y_4^p)] = 
                  $$
               </div>
               <div class="col-md-3">
                  <input type='number' id='act2-yc-inp' class='form-control fs-16px' />
               </div>
            </div>
            <div class="row justify-content-center" style="align-items:center;">
               <div class="col-sm-3">
                  $$
                     y(4) = 
                  $$
               </div>
               <div class="col-sm-3">
                  <input type='number' id='act2-y04-inp' class='form-control fs-16px' />
               </div>
            </div>
            <br>
            <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='a2_verify_y_value();' id='act2-vf-btn1' >Verify</button>
         </div>
      </div>
   `;
    maindiv.innerHTML += text;
    let tb_box = (document.getElementById('act2-tb-box1'));
    let header = ['x', ...x_a2];
    let tb_data = [['y', ...y_a2]];
    let tb = new Display_Table(header, tb_data, tb_box);
    tb.load_table();
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
}
function a2_internal_calculations() {
    yp_a2 = 0;
    yc_a2 = 0;
    yp_a2 = get_yp(x_a2, y_a2, h_a2, f2);
    yc_a2 = get_yc(x_a2, y_a2, 1, h_a2, yp_a2, f2);
}
function a2_verify_y_value() {
    let yp_inp = (document.getElementById('act2-yp-inp'));
    let yc_inp = (document.getElementById('act2-yc-inp'));
    let y04_inp = (document.getElementById('act2-y04-inp'));
    console.log(yp_a2, yc_a2, yc_a2);
    if (!verify_values(parseFloat(yp_inp.value), parseFloat(yp_a2.toFixed(4)))) {
        yp_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        yp_inp.style.border = '1px solid #ced4da';
        yp_inp.disabled = true;
    }
    if (!verify_values(parseFloat(yc_inp.value), parseFloat(yc_a2.toFixed(4)))) {
        yc_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        yc_inp.style.border = '1px solid #ced4da';
        yc_inp.disabled = true;
    }
    if (!verify_values(parseFloat(y04_inp.value), parseFloat(yc_a2.toFixed(4)))) {
        y04_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        y04_inp.style.border = '1px solid #ced4da';
        y04_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-verify-div'));
    div.innerHTML = '';
    div.innerHTML = `
   $$
      y_4^p = y_0 + \\frac{4h}{3}[2f(x_1,y_1) - f(x_2,y_2) + 2f(x_3,y_3)] = ${parseFloat(yp_a2.toFixed(4))}
   $$
   $$
      y_4^c = y_2 + \\frac{h}{3}[f(x_2,y_2) + 4f(x_3,y_3) + f(x_4,y_4^p)] = ${parseFloat(yc_a2.toFixed(4))}
   $$
   $$ y(4) = ${parseFloat(yc_a2.toFixed(4))} $$
   <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='exp_complete();' id='act2-btn1' >Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function exp_complete() {
    let btn = (document.getElementById('act2-btn1'));
    btn && btn.remove();
    alert('Experiment completed');
}
// activity2();
//# sourceMappingURL=activity2.js.map