
import  {of} from "rxjs"
export class Study{

    public run():void{
        this._from()
    }

    _from(){
        let input = [1,2,3];
        of(input).subscribe((aa)=>console.log(aa));
    }
}