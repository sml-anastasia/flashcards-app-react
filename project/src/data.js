
let wordsJSON = `[
    {"id":"1","english":"stork","transcription":"[ stɔːk ]","russian":"аист","tags":"животные"},
    {"id":"2","english":"shark","transcription":"[ ʃɑːk ]","russian":"акула","tags":"животные, еда"},
    {"id":"3","english":"antelope","transcription":"[ ˈæntɪləʊp ]","russian":"антилопа","tags":"животные"},
    {"id":"4","english":"butterfly","transcription":"[ ˈbʌtəflaɪ ]","russian":"бабочка","tags":"животные"},
    {"id":"5","english":"hedgehog","transcription":"[ ˈhedʒhɒɡ ]","russian":"ёж","tags":"животные"},
    {"id":"6","english":"library","transcription":"[ ˈlaɪbrəri ]","russian":"библиотека","tags":"город"},
    {"id":"7","english":"lost property office","transcription":"[ lɒst ˈprɒpəti ˈɒfɪs ]","russian":"бюро находок", "tags":"город"},
    {"id":"8","english":"gallery","transcription":"[ ˈɡæləri ]","russian":"галерея","tags":"город, путешествия"},
    {"id":"9","english":"traffic","transcription":"[ ˈtræfɪk ]","russian":"движение","tags":"город"},
    {"id":"10","english":"cinema","transcription":"[ ˈsɪnəmə ]","russian":"кино","tags":"город"},
    {"id":"11","english":"accompany","transcription":"[ tuː əˈkʌmpəni ]","russian":"аккомпанировать","tags":"музыка"},
    {"id":"12","english":"bagpipe","transcription":"[ ˈbægpaɪp ]","russian":"волынка","tags":"музыка"},
    {"id":"13","english":"balalaika","transcription":"[ ˌbæləˈlaɪkə ]","russian":"балалайка","tags":"музыка, культура"},
    {"id":"14","english":"bassoon","transcription":"[ bə'suːn ]","russian":"фагот","tags":"музыка"},
    {"id":"15","english":"baton","transcription":"[ ˈbætən ]","russian":"дирижерская палочка","tags":"музыка"}
    ]
    `;
    
let words = JSON.parse(wordsJSON);
export default words;