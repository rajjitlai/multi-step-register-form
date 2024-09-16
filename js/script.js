var GlobalSlideNo;

function NextSlide(SlideNo){
    GlobalSlideNo = SlideNo
    event.preventDefault()
    if(SlideNo == 1){
        document.querySelector(".goBack").style.animation = "GoBackBtnVisible 0.25s ease"
        document.querySelector(".goBack").onanimationend = function(){
            this.style.animation = ""
            this.style.left = "10px"
        }
    }

    document.getElementById("scroller").style.marginLeft = parseInt(window.getComputedStyle(document.getElementById("scroller")).getPropertyValue("margin-left")) - 478 + "px"
    MoveIndicatorBar(SlideNo)
}

IndicatorObj = {
    startVal: 0,
    EndVal: 25,
    currentWidth: 0
}

function MoveIndicatorBar(i){
    var step = document.querySelectorAll(".steps")[i-1]
    IndicatorObj.StepNo = i
    IndicatorObj.EndVal = i * 25
    NextWidth()
}

function NextWidth(){
    var bar = document.querySelector(".active")
    var step = document.querySelectorAll(".steps")[IndicatorObj.StepNo - 1]
    barStyle = parseInt(window.getComputedStyle(bar).width)

    if(IndicatorObj.currentWidth > IndicatorObj.EndVal / 2){
        step.classList.add("PassedStep")
    }

    if(IndicatorObj.currentWidth < IndicatorObj.EndVal){
        IndicatorObj.currentWidth += 1
        bar.style.width = IndicatorObj.currentWidth + "%"
        window.requestAnimationFrame(NextWidth)
    }
}