
/**
 * @description - This function formats the message object
 *                to send only the required data.
 * @param {Object} message 
 * @returns {Object} 
 * 
 * @example - sample message object : {
    _data: {
      id: {
        fromMe: false,
        remote: '123456789@c.us',
        id: 'EDFTGA6BD0643EDFT324537785BB3D0E2C9',
        _serialized: 'false_123456789@c.us_ERFF26BD06430JDKWO87485BB3D032DS'
      },
      body: 'Hello',
      type: 'chat',
      t: 1651724747,
      notifyName: 'John Doe',
      from: '123456789@c.us',
      to: '9876543217@c.us',
      self: 'in',
      ack: 1,
      isNewMsg: true,
      star: false,
      recvFresh: true,
      isFromTemplate: false,
      broadcast: false,
      mentionedJidList: [],
      isVcardOverMmsDocument: false,
      isForwarded: false,
      hasReaction: false,
      ephemeralOutOfSync: false,
      productHeaderImageRejected: false,
      lastPlaybackProgress: 0,
      isDynamicReplyButtonsMsg: false,
      isMdHistoryMsg: false,
      requiresDirectConnection: false,
      pttForwardedFeaturesEnabled: true,
      isEphemeral: false,
      isStatusV3: false,
      links: []
    },
    mediaKey: undefined,
    id: {
      fromMe: false,
      remote: '123456789@c.us',
      id: 'EDFEE332D06430BB17DFADSF7899DES',
      _serialized: 'false_987654321@c.us_E9FDFASDF7830BB17FAS097EWDD0E2C9'
    },
    ack: 1,
    hasMedia: false,
    body: 'HEllo',
    type: 'chat',
    timestamp: 1651724747,
    from: '123456789@c.us',
    to: '987654321@c.us',
    author: undefined,
    deviceType: 'android',
    isForwarded: false,
    forwardingScore: 0,
    isStatus: false,
    isStarred: false,
    broadcast: false,
    fromMe: false,
    hasQuotedMsg: false,
    duration: undefined,
    location: undefined,
    vCards: [],
    inviteV4: undefined,
    mentionedIds: [],
    orderId: undefined,
    token: undefined,
    isGif: false,
    isEphemeral: false,
    links: []
  }
 * 
 */
module.exports.formatedMessage = message => {
    const date = new Date(message.timestamp * 1000);
    return {
        message: message.body,
        senderName: message._data.notifyName,
        senderNumber: message.from,
        messageType: message.type,
        time: new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(date),
    }         
}