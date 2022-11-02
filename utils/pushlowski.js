import { faNpm } from "@fortawesome/free-brands-svg-icons";
import { makeArr } from "../utils";

const objectiveFunction = (alpha, phi, a, beta) => {
    var output = (Math.cos(phi) * Math.sin(beta - phi) - a);
    console.log(Math.cos(phi));
    output += (a - Math.cos(phi) * Math.sin(alpha - phi)) * Math.exp(-(beta - alpha) / Math.tan(phi));
    console.log('For Beta = ' + beta + ' Output = ' + 1e10*output);
    return 1e10*output;
}

export const verifyEquation = (alpha, phi_arg, a, phi_is_angle) => {
    alpha = Math.PI*alpha/180;


    var phi = Math.PI*phi_arg/180;
    if(!phi_is_angle){
        phi = Math.acos(phi_arg);
    }

    term1 = Math.sin(alpha-phi);
    term2 = a/Math.cos(phi);


    return term1 < term2;
}

export const getAlphaRange = (phi, a, beta) => {


}

export const getBeta = (alpha, phi_arg, a, phi_is_angle) => {
    alpha = Math.PI*alpha/180;


    var phi = Math.PI*phi_arg/180;
    if(!phi_is_angle){
        phi = Math.acos(phi_arg);
    }

    var test_betas = makeArr(alpha, 2*Math.PI, 18);


    let test_objectives = test_betas.map(beta => {
        return objectiveFunction(alpha, phi, a, beta)
    });
    let test_signs = test_objectives.map(obj => {
        return Math.sign(obj);
    });


    let sign_switches = [];
    let zero_region = [];
    var last_sign = test_signs[0];
    for (let i = 1; i < test_signs.length; i++){
        if(test_signs[i] != 0 && last_sign != 0 && last_sign != test_signs[i]){
            sign_switches.push(i);
        }
        if(test_signs[i] == 0 && i > 1){
            if (i)
            zero_region.push(i);
        }
        last_sign = test_signs[i];
    }

    var chosen_index = sign_switches.pop();
    
    if (chosen_index){
        var A = test_betas[chosen_index-1];
        var B = test_betas[chosen_index];
        var fA = test_objectives[chosen_index-1];
        var error = 2;
        while(error > 1e-10){
            var C = (A + B) / 2
            var fC = objectiveFunction(alpha, phi, a, C)
            error = Math.abs(fC)
            if(fC === 0){
                return C * 180 / Math.PI
            }
            if(Math.sign(fC) == Math.sign(fA)){
                A = C
                fA = fC
            }
            else{
                B = C
            }
        }
        return (A + B) * 180 / (2 * Math.PI);
    }
    else{
        var avg = 0;
        zero_region.map((i) => {
            avg += test_betas[i];
        });
        avg = avg / zero_region.length;
        return avg * 180 / (Math.PI);
    }
}