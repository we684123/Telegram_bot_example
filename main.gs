function doPost(e){
  var estringa = JSON.parse(e.postData.contents);
  var d = new Date();
  var SpreadSheet = SpreadsheetApp.openById("1J5i22RjhCVi_pqVoMG2I7P26YMn75ieLNhNS0-xv-W8");
  var Sheet = SpreadSheet.getSheetByName("紀錄收到的訊息");
  var LastRow = Sheet.getLastRow();
  Sheet.getRange(LastRow+1, 1).setValue(d);  
  Sheet.getRange(LastRow+1, 2).setValue(estringa);
}


//=================================================================
//https://api.telegram.org/botKEY/setWebhook?url=https://XXX
var id = "207014603"
var key = "371338845:AAFglvgqvIIpkg8oT0ezpBH75zb6mppUBlM"
//=================================================================
function sendSticker() {
    var payload = {
        "method": "sendSticker",
        "chat_id": id,
        "sticker": 'CAADBQADAQEAAvjGxQp623fRgMRgIAI'
    }
    start(payload);
}
//=================================================================
function sendVoice() {
    var payload = {
        "method": "sendVoice",
        'chat_id': id,
        'voice': 'https://www.dropbox.com/s/neghu4g1hki0ly1/Voice.ogg?dl=1'
    }
    start(payload);
}

https://api.telegram.org/bot258029688:AAE8T6sSOzhM8yDf0lafzLJbKtOWCcAlvYI/sendMessage?chat_id=207014603&text=XD
//=================================================================
function sendPhoto() {
    var payload = {
        "method": "sendPhoto",
        'chat_id': id,
        'photo': 'http://imgur.com/6bcTUP6'
    }
    start(payload);
}
//=================================================================
function senddocument() {
    var payload = {
        "method": "senddocument",
        'chat_id': id,
        'document': 'BQADBQADFgAD1jtpVmwGvHbXqJgXAg'
    }
    start(payload);
}
//=================================================================
function sendAudio() {
    var payload = {
        "method": "sendAudio",
        'chat_id': id,
        'audio': 'https://www.dropbox.com/s/q4gkprcgltd1748/%E8%80%B6%E9%9B%B7%E5%BC%97_001.mp3?dl=1'
    }
    start(payload);
}
//=================================================================
function sendtext(){
        var H = '<b>bold</b>, <strong>bold</strong>\
<i>italic</i>, <em>italic</em>\
<a href="http://www.example.com/">inline URL</a>\
<code>inline fixed-width code</code>\
<pre>pre-formatted fixed-width code block</pre>'
        var payload = {
        "method": "sendMessage",
        'chat_id': id,
        'text': 'http://www.19wx.net/book/1002392911/1788.html',
        
    }
    start(payload);
}
//=================================================================
function keyboards() {
    var keyboard = [[{'text':'a'},{'text':'b'}],[{'text':'xxxxx'}]]
    
    var inline_keyboard = [
        [{
                "text": "\u2b55\ufe0f",
                "callback_data": "event_join_\u2b55\ufe0f"
            },
            {
                "text": "\u2753",
                "callback_data": "event_join_\u2753"
            },
            {
                "text": "\u274c",
                "callback_data": "event_join_\u274c"
            }
        ],
        [{
            "text": "Leave",
            "callback_data": "event_leave"
        }]
    ]
    var InlineKeyboardMarkup = {
        'inline_keyboard': inline_keyboard
    }
    var ReplyKeyboardMakeup = {
        'keyboard': keyboard,
        'resize_keyboard': true,
        'one_time_keyboard': true,
        'selective': false
    }
    var ReplyKeyboardRemove = {
        'remove_keyboard': true,
        'selective': false
    }
    var ForceReply = {
        'force_reply': true,
        'selective': false
    }

    var payload = {
        "method": "sendMessage",
        'chat_id': id,
        'text': 'trying...',
        'reply_markup': JSON.stringify(ReplyKeyboardMakeup)
    }
    start(payload);
}

//===================================以下是標準發送跟記下Log==================================================
function start(payload) {
    var data = {
        "method": "post",
        "payload": payload
    }
    var d = new Date();
    var SpreadSheet = SpreadsheetApp.openById("1J5i22RjhCVi_pqVoMG2I7P26YMn75ieLNhNS0-xv-W8");
    var Sheet = SpreadSheet.getSheetByName("紀錄發送的訊息");
    var LastRow = Sheet.getLastRow();
    Sheet.getRange(LastRow + 1, 1).setValue(d);
    Sheet.getRange(LastRow + 1, 3).setValue(data);
    var returned = UrlFetchApp.fetch("https://api.telegram.org/bot" + key + "/", data);
    Sheet.getRange(LastRow + 1, 2).setValue(d);
}
//=================================================================