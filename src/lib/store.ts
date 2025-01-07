import NewGameModal from "../components/test/NewGameModal.svelte";

export let players: Array<{ username: string; id: number, avatar: string }> = [
	{
		username: 'User1',
		id: 1,
		avatar: " https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
	},
	{
		username: 'User2',
		id: 2,
		avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
	},
	{
		username: 'User3',
		id: 3,
		avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
	},
    {
        username: 'User4',
        id: 4,
        avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    {
        username: 'User5',
        id: 5,
        avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    {
        username: 'User6',
        id: 6,
        avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    }
]

export let gameOptions = {
    name: 'Игра 1',
    maxPlayers: 4,
    time: { minutes: 30, seconds: 0 },
    timeformove: { minutes: 1, seconds: 0 },
    id: 1,
    spectate: false
}

function delay(delay: number) {
    return new Promise(r => {
        setTimeout(r, delay);
    })
}
 export class Timer {
    constructor(public counter = (gameOptions.timeformove.minutes * 60) + gameOptions.time.seconds) {        
        this.doTimer();
    }

    async doTimer(): Promise<void> {
        for (let i = 0; i < this.counter; i++) {
            await delay(1000);
            this.counter = this.counter - 1;
            console.log(this.counter);
        }
    }
}
