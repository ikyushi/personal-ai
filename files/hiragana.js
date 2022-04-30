const japanese = require('japanese');

module.exports = {
    name: "Convert to Hiragana",
    description: "Converts Katakana or Romaji to Hiragana (Japanese)",
    triggers: ["hiragana", "hiraganize", "hiraganise", "hiraganise", "hiragana for", "hiragana of"],
    hiraganize(text) {
        return japanese.hiraganize(text, {
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