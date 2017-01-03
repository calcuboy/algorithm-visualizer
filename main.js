/**
 * Created by ShenXi on 2017/1/3 0003.
 *
 *   尝试算法可视化引擎。
 *
 *   进度一：
 *      1、代码中挂载事件，产生动画描述语句。
 *      2、根据动画描述语句序列，产生动画
 *      3、动画可以步进、步退、暂停、播放等。
 *
 *      说明：这时候需要将原始类型扩展成自定义类型，以动态产生动画描述语句
 *
 *   进度二：
 *      1、做到对原始代码的无侵入性。（似乎是让人抓狂的工作）
 *
 *      说明：任意一段代码，即可生成动画描述语句序列，并动画展示
 *
 *   进度三：
 *      1、从平面走向3D,甚至 VR
 *      2、可将代码运行时信息加入，如访问量高的变量呈亮红色，几乎不访问的变量呈灰色，入口函数是大门等。
 *
 *      说明：会是什么样的效果呢？如果你置身代码的世界，用手去触摸变量，看着代码运行。期待！
 */

var canvas;
var ctx;

window.onload = function(){
    canvas = document.createElement("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    document.body.appendChild(canvas);

    ctx = canvas.getContext("2d");

};