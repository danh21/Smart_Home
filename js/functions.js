// Thiết bị thứ nhất
//Bấm nút hoặc chạm để bật tắt
var btn1 = document.querySelector('#btn1');
var toggle = false;
function chngimg()
{
    if (toggle == true)  
    {
        document.getElementById('dec1').src  = 'images/device-off-1.png';
        document.getElementById('btn1').className  = 'fas fa-dot-circle';
    } 
    else 
    {
       document.getElementById('dec1').src = 'images/device-1.png';
       document.getElementById('btn1').className  = 'fas fa-times';
    }
    toggle = !toggle; 
}

// Thiết bị thứ hai
//Bấm nút hoặc chạm để bật tắt
var btn2 = document.querySelector('#btn2');
var toggle2 = false;
function chngimg2()
{
    if (toggle2 == true) 
    {
        document.getElementById('dec2').src  = 'images/device-off-2.png';
        document.getElementById('btn2').className  = 'fas fa-dot-circle';
    } 
    else 
    {
       document.getElementById('dec2').src = 'images/device-2.png';
       document.getElementById('btn2').className  = 'fas fa-times';
    }
    toggle2 = !toggle2; 
}

// Thiết bị thứ ba
//Bấm nút hoặc chạm để bật tắt
var btn3 = document.querySelector('#btn3');
var toggle3 = false;
function chngimg3()
{
    if (toggle3 == true)  
    {
        document.getElementById('dec3').src  = 'images/device-off-3.png';
        document.getElementById('btn3').className  = 'fas fa-dot-circle';
    } 
    else 
    {
       document.getElementById('dec3').src = 'images/device-3.png';
       document.getElementById('btn3').className  = 'fas fa-times';
    }
    toggle3 = !toggle3; 
}

// Thiết bị thứ tư
//Bấm nút hoặc chạm để bật tắt
var btn4 = document.querySelector('#btn4');
var toggle4 = false;
function chngimg4()
{
    if (toggle4 == true)  
    {
        document.getElementById('dec4').src  = 'images/device-off-4.png';
        document.getElementById('btn4').className  = 'fas fa-dot-circle';
    } 
    else 
    {
       document.getElementById('dec4').src = 'images/device-4.png';
       document.getElementById('btn4').className  = 'fas fa-times';
    }
    toggle4 = !toggle4; 
}

// Thiết bị thứ năm
//Bấm nút hoặc chạm để bật tắt
var btn5 = document.querySelector('#btn5');
var toggle5 = false;
function chngimg5()
{
    if (toggle5 == true) 
    {
        document.getElementById('dec5').src  = 'images/device-off-5.png';
        document.getElementById('btn5').className  = 'fas fa-dot-circle';
    } 
    else 
    {
       document.getElementById('dec5').src = 'images/device-5.png';
       document.getElementById('btn5').className  = 'fas fa-times';
    }
    toggle5 = !toggle5; 
}