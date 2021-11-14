import _ from 'lodash'
const paginate =(movies,pageNumber,frameSize)=>{
const startIndex=(pageNumber-1)*frameSize;
    return _(movies).slice(startIndex).take(frameSize).value();
}
export default paginate;