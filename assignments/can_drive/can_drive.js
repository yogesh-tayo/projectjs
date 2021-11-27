function CanDrive(hasDrivingLiscence, isTired, isSober) {
    if(hasDrivingLiscence==true && isTired==false &&isSober==true){
        return "You can drive";
    }
    else if(hasDrivingLiscence==false || isTired==true && isSober==true){
        return "You cannot drive";
    }
    else if(hasDrivingLiscence==true || isTired==true && isSober==false){
        return "You shouldn't drive";
    }
    else if(hasDrivingLiscence==true && isTired==false && isSober==false){
        return "You shouldn't drive";
    }
}

module.exports = CanDrive;
