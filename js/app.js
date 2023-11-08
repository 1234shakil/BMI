function submit(){
    let wid = Number(document.querySelector('#wid').value);
    let hei = Number(document.querySelector('#hei').value);

    let bmi = wid / ((hei * 0.0254)**2);


    if(bmi < 18.5){
        document.querySelector('.yourbmi').innerText = bmi;
        document.querySelector('.na').innerHTML = 'Your BMI is : UNDERWEIGHT';
        document.querySelector('h2').style.color = '#15DCBF'
    }else if(bmi >= 18.5 && bmi <=24.9){
        document.querySelector('.yourbmi').innerText = bmi;
        document.querySelector('.na').innerText = 'Your BMI is : HEALTHY';
        document.querySelector('h2').style.color = '#2AB602'
    }else if(bmi >= 25 && bmi <=29.9){
        document.querySelector('.yourbmi').innerText = bmi;
        document.querySelector('.na').innerText ='Your BMI is : OVERWEIGHT';
        document.querySelector('h2').style.color = '#FCB006'
    }else if(bmi >= 30 && bmi <=34.9){
        document.querySelector('.yourbmi').innerText = bmi;
        document.querySelector('.na').innerText ='Your BMI is : OBESITY';
        document.querySelector('h2').style.color = '#FA6709'
    }else if(bmi >=35){
        document.querySelector('.yourbmi').innerText = bmi;
        document.querySelector('.na').innerText = 'Your BMI is : EXTRENLY OBESITY';
        document.querySelector('h2').style.color = '#fb1515'
    }
    
}


