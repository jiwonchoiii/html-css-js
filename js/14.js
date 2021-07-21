var i, j;

outloop: 
    for(i=0; i<3;i++){
        inloop:
        for(j=0;j<3;j++){
            if(i===1 && j===0){
                continue outloop;
            }// if
            console.log('i=',i,',j=',j);
        } // inloop 
    } // outloop