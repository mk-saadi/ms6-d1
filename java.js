document.getElementById('apply-bg').addEventListener('click',function(){    const waifus= document.getElementsByClassName('waifu')

    // >> for of loop
    for(const waifu of waifus){
        waifu.style.color = '#eb3867'
        waifu.style.backgroundColor = '#f27c6ea6'
        waifu.style.boxShadow = '0 3px 3px gray'
        waifu.style.transition = '0.5s'
        waifu.style.borderRadius = '5px'
        waifu.style.paddingLeft = '10px'
    }
})

document.getElementById('center-first').addEventListener('click',function(){
    const first= document.getElementById('first-waifu')
    first.style.transition = '0.5s'
    first.style.textAlign = 'center'
})

document.getElementById('add-waifu').addEventListener('click',function(){
    const waifuContainer= document.getElementById('waifus')
    const waifu= document.createElement('div')
    waifu.classList.add('waifu')
    waifu.innerHTML= `
    <div class="waifu">
    <h3>New Waifu</h3>
    <p>New Waifu Added</p>
    </div>
    `
    waifuContainer.appendChild(waifu)
})