picC=["img/paper.png","img/scissors.png","img/stone.png"]
var myS;
function startGame(){
    indPic=Math.floor(Math.random()*3)
    picComp.src=picC[indPic];
    picComp.style.width="300px";
    picComp.style.height="300px";
    if (indPic==myS){
        alert("������ �������� ��� ����...xD...xD")
    } else if (((myS==2) && (indPic==1)) || ((myS==0) && (indPic==2)) || ((myS==1)) && (indPic==0)){
        alert("���� ������ �������?")
    } else {
        alert("������ �ƨ� ����������???")
    }
}