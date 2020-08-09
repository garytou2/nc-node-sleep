# nc-node-sleep

This Node.js application tests if Namecheap's Node.js application (created through cPanel shared hosting) sleeps under traffic inactivity.

## The problem

I have noticed that my Node.js application (hosted on Namecheap) shuts down after a period of inactivity (no web traffic). According to Namecheap support, **this should not be the case**. Node.js application hosted on Namecheap should be running 24/7 and **should not shutdown under inactivity**.

They were not able to reproduce the problem.

## This Node.js application does the following:

- `console.log("=== STARTING APP ===")` when the application starts
- Every 30 seconds, `console.log()` the current time. This uses [`node-cron`](https://www.npmjs.com/package/node-cron) ("0,30 \* \* \* \* \*").
- When you `GET` `"/"` on port 80, it responds with "`<h1>Home</h1>`" and `console.log()` "HOME" with the current time.

## The results

<details>
<summary>Expand to see the log file from Phusion Passenger.</summary>

```log
App 806560 output: === STARTING APP ===
App 806560 output: Current time: 8/8/2020, 6:14:55 AM
App 806560 output: listening on port 80
App 806560 output:
App 806560 output:
App 806560 output:
App 806560 output: HOME: 8/8/2020, 6:14:55 AM
App 806560 output:
App 806560 output: 8/8/2020, 6:15:00 AM
App 806560 output: 8/8/2020, 6:15:30 AM
App 806560 output: 8/8/2020, 6:16:00 AM
App 806560 output: 8/8/2020, 6:16:30 AM
App 806560 output: 8/8/2020, 6:17:00 AM
App 806560 output: 8/8/2020, 6:17:30 AM
App 806560 output: 8/8/2020, 6:18:00 AM
App 806560 output: 8/8/2020, 6:18:30 AM
App 806560 output: 8/8/2020, 6:19:00 AM
App 806560 output: 8/8/2020, 6:19:30 AM
App 806560 output: 8/8/2020, 6:20:00 AM
App 806560 output: 8/8/2020, 6:20:30 AM
App 806560 output: 8/8/2020, 6:21:00 AM
App 806560 output: 8/8/2020, 6:21:30 AM
App 806560 output: 8/8/2020, 6:22:00 AM
App 806560 output: 8/8/2020, 6:22:30 AM
App 806560 output: 8/8/2020, 6:23:00 AM
App 806560 output: 8/8/2020, 6:23:30 AM
App 806560 output: 8/8/2020, 6:24:00 AM
App 806560 output: 8/8/2020, 6:24:30 AM
App 806560 output: 8/8/2020, 6:25:00 AM
App 806560 output: 8/8/2020, 6:25:30 AM
App 806560 output: 8/8/2020, 6:26:00 AM
App 806560 output: 8/8/2020, 6:26:30 AM
App 806560 output: 8/8/2020, 6:27:00 AM
App 806560 output: 8/8/2020, 6:27:30 AM
App 806560 output: 8/8/2020, 6:28:00 AM
App 806560 output: 8/8/2020, 6:28:30 AM
App 806560 output: 8/8/2020, 6:29:00 AM
App 806560 output: 8/8/2020, 6:29:30 AM
App 806560 output: 8/8/2020, 6:30:00 AM
App 806560 output: 8/8/2020, 6:30:30 AM
App 806560 output: 8/8/2020, 6:31:00 AM
App 806560 output: 8/8/2020, 6:31:30 AM
App 806560 output: 8/8/2020, 6:32:00 AM
App 806560 output: 8/8/2020, 6:32:30 AM
App 806560 output: 8/8/2020, 6:33:00 AM
App 806560 output: 8/8/2020, 6:33:30 AM
App 806560 output: 8/8/2020, 6:34:00 AM
App 806560 output: 8/8/2020, 6:34:30 AM
App 806560 output: 8/8/2020, 6:35:00 AM
App 806560 output:
App 806560 output: HOME: 8/8/2020, 6:35:27 AM
App 806560 output:
App 806560 output: 8/8/2020, 6:35:30 AM
App 806560 output: 8/8/2020, 6:36:00 AM
App 806560 output: 8/8/2020, 6:36:30 AM
App 806560 output: 8/8/2020, 6:37:00 AM
App 806560 output: 8/8/2020, 6:37:30 AM
App 806560 output: 8/8/2020, 6:38:00 AM
App 806560 output: 8/8/2020, 6:38:30 AM
App 806560 output: 8/8/2020, 6:39:00 AM
App 806560 output: 8/8/2020, 6:39:30 AM
App 806560 output: 8/8/2020, 6:40:00 AM
App 806560 output: 8/8/2020, 6:40:30 AM
App 806560 output: 8/8/2020, 6:41:00 AM
App 806560 output: 8/8/2020, 6:41:30 AM
App 806560 output: 8/8/2020, 6:42:00 AM
App 806560 output: 8/8/2020, 6:42:30 AM
App 806560 output: 8/8/2020, 6:43:00 AM
App 806560 output: 8/8/2020, 6:43:30 AM
App 806560 output: 8/8/2020, 6:44:00 AM
App 806560 output: 8/8/2020, 6:44:30 AM
App 806560 output: 8/8/2020, 6:45:00 AM
App 806560 output: 8/8/2020, 6:45:30 AM
App 806560 output: 8/8/2020, 6:46:00 AM
App 806560 output: 8/8/2020, 6:46:30 AM
App 806560 output: 8/8/2020, 6:47:00 AM
App 806560 output: 8/8/2020, 6:47:30 AM
App 806560 output: 8/8/2020, 6:48:00 AM
App 806560 output: 8/8/2020, 6:48:30 AM
App 806560 output: 8/8/2020, 6:49:00 AM
App 806560 output: 8/8/2020, 6:49:30 AM
App 806560 output: 8/8/2020, 6:50:00 AM
App 806560 output: 8/8/2020, 6:50:30 AM
App 806560 output: 8/8/2020, 6:51:00 AM
App 806560 output: 8/8/2020, 6:51:30 AM
App 806560 output: 8/8/2020, 6:52:00 AM
App 806560 output: 8/8/2020, 6:52:30 AM
App 806560 output: 8/8/2020, 6:53:00 AM
App 806560 output: 8/8/2020, 6:53:30 AM
App 806560 output: 8/8/2020, 6:54:00 AM
App 806560 output: 8/8/2020, 6:54:30 AM
App 806560 output: 8/8/2020, 6:55:00 AM
App 806560 output: 8/8/2020, 6:55:30 AM
App 806560 output: 8/8/2020, 6:56:00 AM
App 806560 output: 8/8/2020, 6:56:30 AM
App 806560 output: 8/8/2020, 6:57:00 AM
App 806560 output: 8/8/2020, 6:57:30 AM
App 806560 output: 8/8/2020, 6:58:00 AM
App 806560 output: 8/8/2020, 6:58:30 AM
App 806560 output: 8/8/2020, 6:59:00 AM
App 806560 output: 8/8/2020, 6:59:30 AM
App 806560 output: 8/8/2020, 7:00:00 AM
App 806560 output: 8/8/2020, 7:00:30 AM
App 15251 output:
App 15251 output:
App 15251 output:
App 15251 output: === STARTING APP ===
App 15251 output: Current time: 8/8/2020, 6:45:50 PM
App 15251 output: listening on port 80
App 15251 output:
App 15251 output:
App 15251 output:
App 15251 output: HOME: 8/8/2020, 6:45:50 PM
App 15251 output:
App 15251 output: 8/8/2020, 6:46:00 PM
App 15251 output: 8/8/2020, 6:46:30 PM
```

_log file located at `/home/garytou2/logs/nc.garytou.com/restart2_passenger.log`_

</details>

As you can see, node stops printing the current time after a period of no web traffic/activity. This indicates that the server has stopped running (shut down). Later when I visit `"/"` (home page), the logs indicate that the app has been started and it begins printing the time every 30 seconds again. In addition, the App number changes which I assume is an indication that the application was restarted.

## My thoughts

I believe this might have something to do with Phusion Passenger's config [`PassengerPoolIdleTime`](https://www.phusionpassenger.com/library/config/apache/reference/#passengerpoolidletime).

## How to reproduce this problem/run this application

1. Set up domain/subdomain for this node.js application
2. `git clone https://github.com/garytou2/nc-node-sleep.git`
3. Create Node.js application through cPanel. Choose a location for the Passenger log file. This is how you will view the messages from `console.log()` and identify if the application is running or not.
4. Let the application run. Check back on the log file later or `tail -f <file_path>`. The application may stop in 5 minutes or it may take long. I believe this depends on how busy the server is.

# The solution

After another chat with Namecheap support, their technicians concluded that this as expect of. In order to customize Phusion Passenger or prevent your application for shutting down, you can:

- upgrade to VPS/dedicated
- Self ping your application to create traffic.
