chrome.storage.sync.get("history", ({ history }) => {
    console.log("history--->", history);
    history.unshift({
      title: document.title,
      url: location.href,
      time: new Date().toLocaleString(),
    //   lastVisitTime: history.lastVisitTime,
    //   visitCount : history.visitCount 
    });
    chrome.storage.sync.set({
      history
    });
  });
  