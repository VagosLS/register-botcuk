const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {

const tag = message.guild.members.cache.filter(m => m.user.username.includes(ayarlar.tag)).size

  
let arwSayılar = {
    "0": `0`,
    "1": `1`,
    "2": `2`,
    "3": `3`,
    "4": `4`,
    "5": `5`,
    "6": `6`,
    "7": `7`,
    "8": `8`,
    "9": `9`
}

message.react(client.emojis.cache.get(ayarlar.yes))

let arwEmbed = new Discord.MessageEmbed()
.setDescription(`
\`>\` Sunucumuzda toplam ${message.guild.memberCount.toString().split("").map(a => client.emojis.cache.get(arwSayılar[a])).join("")} adet üye bulunmaktadır.
\`>\` Sunucumuzdaki sesli kanallarda ${message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b).toString().split("").map(a => client.emojis.cache.get(arwSayılar[a])).join("")} adet üye bulunmaktadır.
\`>\` Sunucumuzun tagını almış ${tag.toString().split("").map(a => client.emojis.cache.get(arwSayılar[a])).join("")} adet üye bulunmaktadır.
\`>\` Sunucumuzda toplam **${message.guild.premiumSubscriptionCount.toString().split("").map(a => client.emojis.cache.get(arwSayılar[a])).join("")}** takviye bulunmaktadır.`)
.setFooter(ayarlar.footer)
.setColor("RANDOM")
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))//Youtube Matthe
.setTimestamp()

message.channel.send(arwEmbed)

}
exports.config = {
  name: "say",
  guildOnly: true,
  aliases: ["count", "sayı"]
}