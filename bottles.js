function generateSongText () {
    let text = ''
    for (let i = 99; i > 0; i--) {
        if (i === 2 || i === 3 || i === 4 || i === 12 || i === 13 || i === 14 || i === 22 || i === 23 || i === 24 || i === 32 || i === 33 || i === 34 || i === 42 || i === 43 || i === 44 || i === 52 || i === 53 || i === 54 || i === 62 || i === 63 || i === 64 || i === 72 || i === 73 || i === 74 || i === 82 || i === 83 || i === 84 || i === 92 || i === 93 || i === 94){
            text += `${i} бутылки пива на стене\n${i} бутылки пива\nВозьми одну, пусти по кругу\n${i - 1} бутылки пива на стене\n\n`
        }else if (i === 1 || i === 11 || i === 21 || i === 31 || i === 41 || i === 51 || i === 61 || i === 71 || i === 81 || i === 91) {
            text += `${i} бутылка пива на стене\n${i} бутылка пива\nВозьми одну, пусти по кругу\n${i - 1} бутылка пива на стене\n\n`
        }else{
        text += `${i} бутылок пива на стене\n${i} бутылок пива\nВозьми одну, пусти по кругу\n${i - 1} бутылок пиво стене\n\n`
        }
    }
    return text
}
console.log(generateSongText())


