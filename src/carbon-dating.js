const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
   if(MODERN_ACTIVITY<sampleActivity){return false;}
  if(sampleActivity<=0){return false;}

  if(typeof(sampleActivity)!="string"){return false;}
  if(isNaN(sampleActivity)&&sampleActivity!=parseFloat(sampleActivity)){return false;}
  var t = (Math.log(MODERN_ACTIVITY/Number(sampleActivity))/0.693)*HALF_LIFE_PERIOD;
  return Math.ceil(t);
};
