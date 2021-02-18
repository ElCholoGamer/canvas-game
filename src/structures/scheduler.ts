type Runnable = () => void;

export interface Task {
	run: Runnable;
	runAt: number;
}

export interface IntervalTask extends Task {
	interval: number;
}

class Scheduler {
	private schedules = new Map<number, Task>();
	private intervals = new Map<number, IntervalTask>();

	private _time = 0;
	private taskID = 1;

	public tick() {
		this._time++;

		const tasks = Array.from(this.schedules.entries());
		for (const [id, task] of tasks) {
			if (this._time < task.runAt) continue;

			task.run();
			this.schedules.delete(id);
		}

		const intervalTasks = Array.from(this.intervals.values());
		for (const task of intervalTasks) {
			if (this._time < task.runAt) continue;

			task.run();
			task.runAt += task.interval;
		}
	}

	public schedule(fn: Runnable, ticks: number): number {
		this.taskID++;

		const task: Task = {
			run: fn,
			runAt: this._time + ticks,
		};

		this.schedules.set(this.taskID, task);
		return this.taskID;
	}

	public scheduleInterval(fn: Runnable, interval: number): number;
	public scheduleInterval(
		fn: Runnable,
		initialDelay: number,
		interval: number
	): number;
	public scheduleInterval(
		fn: Runnable,
		initialDelay: number,
		interval?: number
	): number {
		this.taskID++;

		const task: IntervalTask = {
			run: fn,
			interval: interval ?? initialDelay,
			runAt: this._time + initialDelay,
		};

		this.intervals.set(this.taskID, task);
		return this.taskID;
	}

	public cancelSchedule(id: number) {
		return this.schedules.delete(id);
	}

	public cancelInterval(id: number) {
		return this.intervals.delete(id);
	}

	public get time() {
		return this._time;
	}
}

export default Scheduler;
