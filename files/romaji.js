const japanese = require('japanese');

module.exports = {
    name: "Convert to Romaji",
    description: "Converts Katakana or Hiragana to Romaji (Japanese)",
    hiraganize(text) {
        return japanese.romanize(text, {
            "し": "shi",
            "ち": "chi",
            "つ": "tsu",
            "ふ": "fu",
            "じ": "ji",
            "ぢ": "ji",
            "づ": "zu",
            "ああ": "aa",
            "いい": "ii",
            "うう": "uu",
            "ええ": "ee",
            "おお": "oo",
            "あー": "aa",
            "えい": "ei",
            "おう": "ou",
            "んあ": "n'a",
            "んば": "nba",
            "つち": "tchi",
            "ゐ": "wi",
            "を": "o",
        });
    }
}