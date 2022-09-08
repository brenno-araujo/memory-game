function onLoad() {
    const hero = {
        img: './icons/batman.png',
        name: 'Batman'
    }
    const codeHtml = Screen.getHtml(hero)
    Screen.alterContent(codeHtml)
}

window.onload = onLoad;