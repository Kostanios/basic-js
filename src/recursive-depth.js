module.exports = class DepthCalculator {
    calculateDepth( arr ) {
        
        var deepDarkArray = [];
        var deepDark = 0;

        function searchArrays(arr){
            for(var i = 0 ; i < arr.length ; i++){
                if(Array.isArray(arr[i])){
                    deepDark +=1;
                    searchArrays(arr[i]);
                }
            }
            deepDark += 1;
            deepDarkArray.push(deepDark);
            deepDark = 0;
        }

        

        searchArrays(arr);

        var maxDeep = deepDarkArray[0];

        for(var i = 0; i < deepDarkArray.length; i++){
            if(maxDeep < deepDarkArray[i]){maxDeep = deepDarkArray[i];}
        }

        return maxDeep;
    }
};
