const japanese = require('japanese');

module.exports = {
    name: "Convert to Katakana",
    description: "Converts Hiragana or Romaji to Katakana (Japanese)",
    triggers: ["katakana", "katakanize", "katakanise", "katakanise", "katakana for", "katakana of"],
    hiraganize(text) {
        return japanese.katakanize(text, {
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