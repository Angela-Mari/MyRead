/*global chrome*/
import React, {Component} from "react";

function getUrl() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = chrome.tabs.query(queryOptions);
    return tab;
}

export default getUrl;