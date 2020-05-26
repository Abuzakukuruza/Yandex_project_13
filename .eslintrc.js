module.exports = {
    "extends": [
        "airbnb-base"
    ],
    "rules": {
        "no-underscore-dangle": [0, { "allow": [] }],
        "quotes": ["error", "double"],
        "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
    }
};