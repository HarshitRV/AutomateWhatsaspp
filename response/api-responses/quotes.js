const axios = require("axios")

module.exports.fightClub = async () => {
    try {
        const response = await axios.get("https://fightclub-api.herokuapp.com/")
        if(response.status === 200){
            return response.data.quote;
        }
    } catch (err) {
        return "Error fetching quote";
    }
}

module.exports.sarcasmApi = async () => {
    try {
        const response = await axios.get("https://sarcasm-api.herokuapp.com/");
        if(response.status === 200){
            return response.data.sarcasm;
        }
    } catch (err) {
        return "Error fetching comment";
    }
}