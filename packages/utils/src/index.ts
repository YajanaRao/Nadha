/* global __DEV__ */
import {Platform} from "react-native";


const WEBHOOK: string = "https://discord.com/api/webhooks/721281224600977428/OpPLEzrok2azWUlObFwyA2y2INWV_9E2Yz8C3IXOxm3GIaTHs-4fmPW01ENhR0ktRlJ0"

export function sendMessage(content: any) {
    fetch(WEBHOOK, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(content)
    }).then(response => response.json()).then(response => console.log(response))
}

export const log = {
    error(title: any, message?: any) {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            console.log(title, message);
        } else {
            let text;
            if (message.componentStack) {
                text = message.componentStack.slice(0, 2000);
            } else {
                text = message.toString();
            }

            const platform = Platform.OS;
            let extras: any = []
            extras.push({
                name: 'Platform',
                value: platform,
            });
            if (platform == "web") {
                extras.push({
                    name: 'Browser',
                    value: navigator.appCodeName,
                }, {
                    name: "OS",
                    value: navigator.platform
                });
            } else if (platform == "android") {
                extras.push({
                    name: 'Android Version',
                    value: Platform.Version,
                });
            }
            let content = {
                "username": "error-logs",
                "avatar_url": "https://i.imgur.com/4M34hi2.png",
                "content": title.toString(),
                "embeds": [
                    {
                        "title": arguments.callee.name,
                        fields: extras,
                        "description": text,
                        "color": 14177041,

                    }
                ]
            }
            sendMessage(content);
        }

    },

    debug(message: string) {
        let content = {
            "username": "debug-logs",
            "avatar_url": "https://i.imgur.com/4M34hi2.png",
            "content": "error message",
            "embeds": [
                {
                    "title": arguments.callee.name,
                    "description": message,
                    "color": 15258703
                }
            ]
        }
        sendMessage(content);
    }
}