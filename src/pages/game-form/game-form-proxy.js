import GameFormComponent from "./index";
import {DialogService} from "../../shared/services/dialog-service/dialog-service";

const GameFormProxy = () => {
    const ty='!!!';
    return DialogService.saveClose('1', new GameFormComponent({}).render(), 1200, 800,true, ()=>{console.log(ty)}) //DialogWindowComponent({'inner-component': GameFormComponent()})}
}
export default GameFormProxy;
