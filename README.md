## Valiant

Technologies: 

* Event Bus: **Nats**
* Cache: **Redis**
* Database: **CockroachDB**
* Binary Serialization: **MsgPack**
* Containers: **Docker**
* Orchestration: **Kubernetes**
* Language: **Typescript**
* Runtime: **NodeJS**

Services: 

* Gateway
	* The Gateway is responsible for collecting and passing events from Discord to the 			correct service. It also is used to execute a small set of commands.

* Cache
	* The cache is responsible for caching received from the Gateway to ensure we keep the 	calls to the Discord API to a minimum. It's backed by Redis.

* Rest

	* The Rest service is used to interact with the Discord REST API. It handles rate-limits 		and errors. This is the only way for our services to interact with Discord other than 		the Gateway.

* Logger

	* The Logger service is a centralized logging solution which processes and if needed acts  		upon the logs. The slight downside to this approach is that if this service is down no 		logs will be collected although I plan to fix this issue in the later versions.


* Metrics

	* Similar to the Logging service it's centralized, and the responsibilities of this service consist of gathering and processing metrics passed on from other services. It also handles basic real-time analytics at this point in time but I plan to separate this feature into it's own service later.

* Command Handler

	* The Command Handler service processes messages passed from the Gateway and then will act upon it accordingly. It also handles command discovery etc.

* Event Handler

	* TODO

* Music

	* TODO

* Games

	* TODO

