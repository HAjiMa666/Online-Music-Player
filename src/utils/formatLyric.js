// [00:00.000] 作词 : 虎二 
// [00:01.000] 作曲 : 虎二 
// [00:02.000] 编曲 : 虎二/姚瀚霄@骁Studio 
// [00:03.000] 制作人 : 闫骁男@骁Studio 
// [00:12.086]日坠尘芳 杯觥交错 
// [00:17.736]新愁旧憾 与我何干 

const lyricEXP = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
function formatLyric(lyric) {
    const lyricArr = lyric && lyric.split("\n");
    const trueLyric = [];
    lyricArr && lyricArr.forEach(item => {
        if (item) {
            const lyricObj = { time: null, content: null };
            const newLyric = lyricEXP.exec(item);
            const minute = newLyric[1] * 60 * 1000;
            const second = newLyric[2] * 1000;
            const totalTime = (minute + second + newLyric[3] * 1) / 1000;
            console.log(newLyric, totalTime);
            const content = item.replace(lyricEXP, "").trim();
            lyricObj.time = totalTime;
            lyricObj.content = content;
            trueLyric.push(lyricObj);
        }
    })
    return trueLyric;
}


export default formatLyric;