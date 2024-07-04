import { _decorator, Button, Component, Label, Node } from 'cc';
import { RedDotManager } from '../../../logic/RedDotManager';
const { ccclass, property } = _decorator;

@ccclass('prompt_show')
export class prompt_show extends Component {
    @property(Node)
    public btn_red1: Node = null;

    @property(Node)
    public btn_red2: Node = null;

    @property(Node)
    public btn_show: Node = null;

    @property(Node)
    public prompt_show: Node = null;

    protected onLoad(): void {
        // 可以认为这里是全局初始化的地方
        RedDotManager.init();
    }

    start() {
        this.btn_red1.on(Button.EventType.CLICK, () => {
            RedDotManager.checkMainBtn1();
        })

        this.btn_red2.on(Button.EventType.CLICK, () => {
            RedDotManager.checkMainBtn2();
        })

        this.btn_show.on(Button.EventType.CLICK, () => {
            this.prompt_show.active = !this.prompt_show.active;
        })

        //监听
        RedDotManager.redDotTree.registerCallback("MainBtn0", this.onRedDotBullet1.bind(this));
        RedDotManager.redDotTree.registerCallback("MainBtn1", this.onRedDotBullet2.bind(this));
        RedDotManager.redDotTree.registerCallback("MainBtnMenu", this.onRedDotBulletMenu.bind(this));
    }

    update(deltaTime: number) {

    }

    private onRedDotBullet1(redNum: number) {
        this.btn_red1.getChildByName('RedDot').active = redNum > 0;
    }
    private onRedDotBullet2(redNum: number) {
        this.btn_red2.getChildByName('RedDot').active = redNum > 0;
    }

    private onRedDotBulletMenu(redNum: number) {
        const redDot = this.btn_show.getChildByName('RedDot')
        redDot.active = redNum > 0;
        redDot.getComponentInChildren(Label).string = redNum.toString();
    }
}


