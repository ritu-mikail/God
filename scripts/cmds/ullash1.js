module.exports = {
	config: {
			name: "@তোগো চাচ্চু মার্ক জাকারবার্গ",
			version: "1.0",
			author: "Jaychris Garcia",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "@তোগো চাচ্চু মার্ক জাকারবার্গ") return message.reply("আমার বস উল্লাস এখন ব্যস্ত আছে,যা বলার ওনার ইনবক্স এ বলো।");
}
};