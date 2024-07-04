import { _decorator, Button, Component, Node } from 'cc';
import { RedDotManager } from '../../../logic/RedDotManager';
const { ccclass, property } = _decorator;

@ccclass('prompt_menu')
export class prompt_menu extends Component {
    @property(Node)
    public btn_red1: Node = null;

    @property(Node)
    public btn_red2: Node = null;



    start() {
        this.btn_red1.on(Button.EventType.CLICK, () => {
            RedDotManager.checkMainMenu(0);

        })

        this.btn_red2.on(Button.EventType.CLICK, () => {
            RedDotManager.checkMainMenu(1);
        })

        //监听
        RedDotManager.redDotTree.registerCallback("MainBtnMenu/Btn0", this.onRedDotBullet1.bind(this));
        RedDotManager.redDotTree.registerCallback("MainBtnMenu/Btn1", this.onRedDotBullet2.bind(this));

    }

    update(deltaTime: number) {

    }

    private onRedDotBullet1(redNum: number) {
        this.btn_red1.getChildByName('RedDot').active = redNum > 0;
    }
    private onRedDotBullet2(redNum: number) {
        this.btn_red2.getChildByName('RedDot').active = redNum > 0;
    }
}


