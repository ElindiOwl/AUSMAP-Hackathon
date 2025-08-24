type EventCallback<T> = (data: T) => void;

interface Events {
    [eventName: string]: EventCallback<string>[];
}

const createEventSystem = () => ({
	events: {} as Events,
	publish(eventName: string, data: string) {
		if (!this.events[eventName]) return;
		this.events[eventName].forEach(callback => callback(data));
	},
	subscribe(eventName: string, callback: EventCallback<string>) {
		if (!this.events[eventName]) {
			this.events[eventName] = [];
		}
		this.events[eventName].push(callback);
	},
	unsubscribe(eventName: string, callback: EventCallback<string>) {
		if (!this.events[eventName]) return;
		this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
	},
});

let instance: ReturnType<typeof createEventSystem> | null = null;

export const eventSystem = (() => {
	if (typeof window === 'undefined') {
		return {
			events: {} as Events,
			publish: () => {
			},
			subscribe: () => {
			},
			unsubscribe: () => {
			},
		};
	}

	if (!instance) {
		instance = createEventSystem();
	}

	return instance;
})();