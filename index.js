// Includes
const fs = require("fs");

// Export functions
module.exports = {

	//Log to file
	LogToFile: function (prompt, file) {
		fs.writeFileSync(
			file,
			prompt,
			(err) => {
				if (err) {
					throw err;
				}
			}
		);
	},

	// Custom method to test for value
	ArrayContains: function (arr, value, row) {
		var output = false;
		for (let i = 0; i < arr.length; i++) {
			// Get the size of the inner array
			if (arr[i][row] == value) {
				output = true;
			}
		}
		return output;
	},

	// Seconds to other
	RelativeTimeReplySeconds: function (totalSeconds) {
		let days = Math.floor(totalSeconds / 86400);
		totalSeconds %= 86400;
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let seconds = Math.floor(totalSeconds % 60);
		return RelativeTimeReply(days, hours, minutes, seconds);
	},

	// Reply using relative time
	RelativeTimeReply: function (days, hours, minutes, seconds) {
		let uptime = "Unknown error occurred...";
		if (days > 0) {
			uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
		}
		else if (hours > 0) {
			uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
		}
		else if (minutes > 0) {
			uptime = `${minutes} minutes and ${seconds} seconds`;
		} else {
			uptime = `${seconds} seconds`;
		}
		return uptime;
	}
}