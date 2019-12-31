
$(window).on("load", function() {
    console.log('footnotes start')
    var leftax = $('.leftfnbegin').offset().top
    var rightax = $('.rightfnbegin').offset().top
    var leftmore = 0;
    $('.footnotes-list').children().each(function(ind, ob) {
        let i = ind + 1
        console.log(i)
        let offs = $(`#fnref${i}`).offset()
        let toppos = offs.top - 70
        console.log(toppos)
        //$(`#footnote-${i}`).css('top', `${toppos}px`)

        if ((toppos < 900 || offs.left < window.innerWidth / 2 || (rightax - toppos > 200) || leftmore < -2) && !(leftax - toppos > 200)) {
            let newhtml = `<div class="floating-footnote" id="footnote-${i}" style="top: ${Math.max(leftax, toppos)}px"><span class="footnote-float-numeral">${i}</span> ${ob.innerHTML}</div>`
            $('.sidebar-left').append(newhtml)
            leftax = toppos + $(`#footnote-${i}`).outerHeight() + 30
            leftmore++
        } else {
            let newhtml = `<div class="floating-footnote" id="footnote-${i}" style="top: ${Math.max(rightax, toppos)}px"><span class="footnote-float-numeral">${i}</span> ${ob.innerHTML}</div>`
            $('.sidebar-right').append(newhtml)
            rightax = toppos + $(`#footnote-${i}`).outerHeight() + 30
            leftmore--
        }
    })
    
})

$(window).on("load resize", function() {
    console.log('resize', window.innerWidth)
    if (window.innerWidth < 1295) {
        $(".floating-footnote").css('display', 'none')
    } else {
        $(".floating-footnote").css('display', 'inline')
    }
});