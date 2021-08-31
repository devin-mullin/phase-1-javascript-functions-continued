// Your code here
saturdayFun()
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun()
saturdayFun("bathe my dog")

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}
mondayWork()
mondayWork("work from home")

function wrapAdjective(mark = "*"){
        return function(adj = "a good person") {
            return `You are ${mark}${adj}${mark}!`
        }
}

wrapAdjective()
wrapAdjective("|")("a dedicated programmer")





