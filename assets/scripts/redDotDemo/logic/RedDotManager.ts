import { RedDotTree } from "../../Core/redDotTree/RedDotTree";

export class RedDotManager {
    public static redDotTree: RedDotTree = null;

    private static MAINBTN0 = "MainBtn0";
    private static MAINBTN1 = "MainBtn1";
    private static MAINBTNMENU = "MainBtnMenu";
    private static MAINBTNMENUBTN0 = "MainBtnMenu/Btn0";
    private static MAINBTNMENUBTN1 = "MainBtnMenu/Btn1";


    public static init() {
        this.redDotTree = new RedDotTree();
        // 添加红点结点
        RedDotManager.redDotTree.addNode(RedDotManager.MAINBTN0, false);
        RedDotManager.redDotTree.addNode(RedDotManager.MAINBTN1, false);
        RedDotManager.redDotTree.addNode(RedDotManager.MAINBTNMENU, true);
        RedDotManager.redDotTree.addNode(RedDotManager.MAINBTNMENUBTN0, false);
        RedDotManager.redDotTree.addNode(RedDotManager.MAINBTNMENUBTN1, false);


        // 初始化红点数值 仅作为测试参考
        RedDotManager.redDotTree.changeRedDotNum("MainBtn0", 1);
        RedDotManager.redDotTree.changeRedDotNum("MainBtn1", 1);
        RedDotManager.redDotTree.changeRedDotNum("MainBtnMenu/Btn0", 1);
        RedDotManager.redDotTree.changeRedDotNum("MainBtnMenu/Btn1", 1);
    }

    public static checkMainBtn1() {
        RedDotManager.redDotTree.changeRedDotNum("MainBtn0", 0);
    }
    public static checkMainBtn2() {
        RedDotManager.redDotTree.changeRedDotNum("MainBtn1", 0);
    }
    public static checkMainMenu(idx: number) {
        //红点逻辑
        switch (idx) {
            case 0:
                RedDotManager.checkMainMenuBtn1();
                break;
            case 1:
                RedDotManager.checkMainMenuBtn2();
                break;
        }
    }
    public static checkMainMenuBtn1() {
        //红点逻辑
        RedDotManager.redDotTree.changeRedDotNum("MainBtnMenu/Btn0", 0);
    }
    public static checkMainMenuBtn2() {
        //红点逻辑
        RedDotManager.redDotTree.changeRedDotNum("MainBtnMenu/Btn1", 0);
    }
}